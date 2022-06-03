import { Component, Input, OnInit } from '@angular/core';
import { IBaseTable } from 'src/app/interface/baseModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  filterTypes: any = [
    'New',
    'In Progress',
    'Completed'
  ]

  newModel = {

  }
  statusValue: string = '';

  @Input() model: IBaseTable[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
