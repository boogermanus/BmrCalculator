import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { IBmrCalculation } from '../models/ibmr-calculation';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';
import { IBmr } from '../models/ibmr';
import { BmrCalculatorService } from '../services/bmr-calculator.service';
import { SettingsService } from '../services/settings.service';
import { BmrService } from '../services/bmr.service';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.css']
})
export class BmrCalculatorComponent implements OnInit {

  genders: any[] = GenderConstants.getGenders();
  unitsOfMeasure: any[] = UnitOfMeasureConstants.getUnitsOfMeasure();
  gender: FormControl;
  unitOfMeasure: FormControl;
  name: FormControl;
  age: FormControl;
  weight: FormControl;
  height: FormControl;
  heightInInches: FormControl;
  form: FormGroup;
  isCalculated = false;
  brmCalculation: IBmrCalculation;
  private _canSave = false;
  private _isAuthenticated = false;

  get weightText(): string {
    return UnitOfMeasureConstants.getWeightText(this.unitOfMeasure.value);
  }

  get heightText(): string {
    return UnitOfMeasureConstants.getHeightText(this.unitOfMeasure.value);
  }

  get ageInvalidMessage(): string {
    if (!this.age.valid) {
      return this.age.hasError('required') ? 'Age is required' : 'Age cannot be less than 1';
    }
  }

  get weightInvalidMessage(): string {
    if (!this.weight.valid) {
      return this.weight.hasError('required') ? 'Weight is required' : 'Weight cannot be less than 1';
    }
  }

  get heightInvalid(): boolean {
    return (!this.height.valid && this.height.touched)
      || (!this.heightInInches.valid && this.heightInInches.touched);
  }

  get canSave(): boolean {
    return this._canSave && this._isAuthenticated;
  }

  constructor(
    private formBuilder: FormBuilder,
    private bmCalculatorService: BmrCalculatorService,
    private settingsService: SettingsService,
    private bmrService: BmrService,
    private authService: AuthorizeService
  ) {
    this.form = this.buildForm();
    const data = this.settingsService.getSettings();

    this.gender.setValue(data.gender);
    this.unitOfMeasure.setValue(data.unitOfMeasure);
    this.name.setValue(data.name);
  }

  async ngOnInit(): Promise<void> {
    this.authService.isAuthenticated().subscribe(data => {
      this._isAuthenticated = data;
    });
  }

  private buildForm(): FormGroup {
    this.gender = new FormControl('', Validators.required);
    this.unitOfMeasure = new FormControl('i', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.age = new FormControl(0,
      Validators.compose([Validators.required, Validators.min(1)]));
    this.weight = new FormControl(0,
        Validators.compose([Validators.required, Validators.min(1)]));
    this.height = new FormControl(0,
      Validators.compose([Validators.required, Validators.min(1)]));
    this.heightInInches = new FormControl(0,
      Validators.compose([Validators.required, Validators.min(0), Validators.max(11)]));

    return this.formBuilder.group({
      gender: this.gender,
      unitOfMeasure: this.unitOfMeasure,
      name: this.name,
      age: this.age,
      weight: this.weight,
      height: this.height,
      heightInInches: this.heightInInches
    });
  }

  public async save(): Promise<void> {

    const bmr: IBmr = this.brmCalculation;
    console.log(bmr);
    await this.bmrService.saveBmr(bmr);
    this._canSave = false;
  }

  public calculate(): void {

    // check validators on all controls
    Object.keys(this.form.controls).forEach(control => {
      const field = this.form.get(control);
      field.markAsTouched();
    });

    if (!this.form.valid) { return ; }

    const bmrCalculation: IBmrCalculation = {
      gender: this.gender.value,
      unitOfMeasure: this.unitOfMeasure.value,
      name: this.name.value,
      age: this.age.value,
      weight: this.weight.value,
      height: this.height.value,
      heightInInches: this.heightInInches.value,
      bmr: 0
    };

    this.brmCalculation = this.bmCalculatorService.calculate(bmrCalculation);
    this.isCalculated = true;

    this.settingsService.saveSettings({
      gender: bmrCalculation.gender,
      unitOfMeasure: bmrCalculation.unitOfMeasure,
      name: bmrCalculation.name
    });

    this._canSave = true;

  }

  public controlIsInvalid(control: AbstractControl): boolean {
    return !control.valid && control.touched;
  }

}
