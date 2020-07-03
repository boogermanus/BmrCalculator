import { Component, OnInit } from '@angular/core';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMeasureConstants } from '../models/unit-of-measure-constants';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IBmrCalculation } from '../models/ibmr-calculation';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  genders: any[] = GenderConstants.getGenders();
  unitsOfMeasure: any[] = UnitOfMeasureConstants.getUnitsOfMeasure();
  gender: FormControl;
  unitOfMeasure: FormControl;
  name: FormControl;
  age: FormControl;
  weight: FormControl;
  form: FormGroup;
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

    return this.formBuilder.group({
      gender: this.gender,
      unitOfMeasure: this.unitOfMeasure,
      name: this.name,
      age: this.age,
      weight: this.weight,
    });
  }

  public save(): void {
    const bmr: IBmrCalculation = this.form.value;
    console.log(this.form.value);
    console.log(bmr);
  }

}
