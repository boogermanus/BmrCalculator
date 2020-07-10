import { Component, OnInit } from '@angular/core';
import { BmrService } from '../services/bmr.service';
import { IBmr } from '../models/ibmr';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  data: IBmr[];

  constructor(private bmrService: BmrService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this.bmrService.getBmrs();
  }

}
