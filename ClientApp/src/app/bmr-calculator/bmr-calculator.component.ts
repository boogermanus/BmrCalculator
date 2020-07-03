import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IBmrCalculation } from '../models/ibmr-calculation';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';

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

  get weightText(): string {
    const unit = this.unitOfMeasure.value === UnitOfMeasureConstants.IMPERIAL ? '(lbs)' : '(kg)';
    return `Weight ${unit}`;
  }

  get heightText(): string {
    const unit = this.unitOfMeasure.value === UnitOfMeasureConstants.IMPERIAL ? '(ft/in)' : '(cm)';
    return `Height ${unit}`;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): FormGroup {
    this.gender = new FormControl('', Validators.required);
    this.unitOfMeasure = new FormControl('i', Validators.required);
    this.name = new FormControl('',
      Validators.compose([Validators.required, Validators.maxLength(100)]));
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
    const bmr: IBmrCalculation = this.form.value;
    console.log(bmr);
  }

}
