import { Component, OnInit, ViewChild } from '@angular/core';
import { BmrService } from '../services/bmr.service';
import { IBmr } from '../models/ibmr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe, DecimalPipe } from '@angular/common';
import { KilogramsToPoundsPipe } from '../pipes/kilograms-to-pounds.pipe';
import { SettingsService } from '../services/settings.service';
import { CentimetersToFeetPipe } from '../pipes/centimeters-to-feet.pipe';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  // we need a date pipe in code so that we can transform the created date
  readonly datePipe: DatePipe = new DatePipe('en-US');
  readonly decimalPipe: DecimalPipe = new DecimalPipe('en-US');
  weightPipe: KilogramsToPoundsPipe;
  heightPipe: CentimetersToFeetPipe;
  // column definiations
  columns = [
    { columnDef: 'age', header: 'Age' },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: any) => `${this.weightPipe.transform(element.weight)}`
    },
    {
      columnDef: 'height',
      header: 'Height',
      cell: (element: any) => `${this.heightPipe.transform(element.height)}`
    },
    { columnDef: 'bmr', header: 'BMR' },
    {
      columnDef: 'createdOn',
      header: 'Created On',
      cell: (element: any) => `${this.datePipe.transform(element.createdOn, 'short')}`
    }
  ];

  // still need this, afraid to try something else...
  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<IBmr>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private bmrService: BmrService,
    settingsService: SettingsService) {
    this.weightPipe = new KilogramsToPoundsPipe(settingsService);
    this.heightPipe = new CentimetersToFeetPipe(settingsService);
    this.displayedColumns.push('actions');
  }

  async ngOnInit(): Promise<void> {
    this.dataSource = new MatTableDataSource<IBmr>(await this.bmrService.getBmrs());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
