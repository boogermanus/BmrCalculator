import { Component, OnInit, ViewChild } from '@angular/core';
import { BmrService } from '../services/bmr.service';
import { IBmr } from '../models/ibmr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  columns = [
    {columnDef: 'age', header: 'Age'},
    {columnDef: 'weight', header: 'Weight'},
    {columnDef: 'height', header: 'Height'},
    {columnDef: 'bmr', header: 'BMR'},
    {columnDef: 'createdOn', header: 'Created On'}
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<IBmr>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;

  constructor(private bmrService: BmrService) {}

  async ngOnInit(): Promise<void> {
    this.dataSource = new MatTableDataSource<IBmr>(await this.bmrService.getBmrs());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
