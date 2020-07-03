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

  ngOnInit(): void {

  }
}
