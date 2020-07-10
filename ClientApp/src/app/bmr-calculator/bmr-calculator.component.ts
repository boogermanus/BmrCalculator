import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IBmrCalculation } from '../models/ibmr-calculation';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';
import { IBmr } from '../models/ibmr';
import { BmrCalculatorService } from '../services/bmr-calculator.service';

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
  bmr = 0;

  get weightText(): string {
    const unit = this.unitOfMeasure.value !== null && this.unitOfMeasure.value === UnitOfMeasureConstants.IMPERIAL
      ? '(lbs)' : '(kg)';
    return `Weight ${unit}`;
  }

  get heightText(): string {
    const unit = this.unitOfMeasure.value === UnitOfMeasureConstants.IMPERIAL ? '(ft/in)' : '(cm)';
    return `Height ${unit}`;
  }

  get genderInvalid(): boolean {
    return !this.gender.valid && this.gender.touched;
  }

  get nameInvalid(): boolean {
    return !this.name.valid && this.name.touched;
  }

  get ageInvalid(): boolean {
    return !this.age.valid && this.age.touched;
  }

  get ageInvalidMessage(): string {
    if (!this.age.valid) {
      return this.age.hasError('required') ? 'Age is required' : 'Age cannot be less than 0';
    }
  }

  get weightInvalid(): boolean {
    return !this.weight.valid && this.weight.touched;
  }

  constructor(
    private formBuilder: FormBuilder,
    private bmCalculatorService: BmrCalculatorService
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): FormGroup {
    this.gender = new FormControl('', Validators.required);
    this.unitOfMeasure = new FormControl('i', Validators.required);
    this.name = new FormControl('',
      Validators.required);
    this.age = new FormControl(0,
      Validators.compose([Validators.required, Validators.min(0)]));
    this.weight = new FormControl(0,
        Validators.compose([Validators.required, Validators.min(0)]));
    this.height = new FormControl(0, Validators.required);
    this.heightInInches = new FormControl(0, Validators.required);

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

  public save(): void {
    const bmr: IBmr = this.form.value;
    console.log(bmr);
  }

  public calculate(): void {
    const bmrCalculation: IBmrCalculation = {
      gender: this.gender.value,
      unitOfMeasure: this.unitOfMeasure.value,
      age: this.age.value,
      weight: this.weight.value,
      height: this.height.value,
      heightInInches: this.heightInInches.value,
      bmr: 0
    };

    this.bmr = +this.bmCalculatorService.calculate(bmrCalculation).toFixed(2);
    this.isCalculated = true;
  }

}
