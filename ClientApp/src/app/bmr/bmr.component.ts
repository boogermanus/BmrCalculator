import { Component, OnInit } from '@angular/core';
import { GenderConstants } from '../models/gender-constants';
import { UnitOfMassConstants } from '../models/units-of-mass-constants';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  genders: any[] = GenderConstants.getGenders();
  unitsOfMass: any[] = UnitOfMassConstants.getUnitsOfMass();
  constructor() { }

  ngOnInit(): void {
  }

}
