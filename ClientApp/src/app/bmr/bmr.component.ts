import { Component, OnInit } from '@angular/core';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMassConstants } from '../models/units-of-mass-constants';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  genders: any[] = GenderConstants.getGenders();
  unitsOfMass: any[] = UnitOfMassConstants.getUnitsOfMass();
  gender: FormControl;
  unitOfMass: FormControl;
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
    this.unitOfMass = new FormControl('', Validators.required);
    this.name = new FormControl('',
      Validators.compose([Validators.required, Validators.maxLength(100)]));
    this.age = new FormControl(0,
      Validators.compose([Validators.required, Validators.min(0)]));
    this.weight = new FormControl(0,
        Validators.compose([Validators.required, Validators.min(0)]));

    return this.formBuilder.group({
      gender: this.gender,
      unitOfMass: this.unitOfMass,
      name: this.name,
      age: this.age,
      weight: this.weight,
    });
  }

}
