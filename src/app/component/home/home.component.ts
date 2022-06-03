import { Component, OnInit } from '@angular/core';
import { IBaseTable } from '../../interface/baseModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: IBaseTable[] = [];
  filteredModel: IBaseTable[] = []
  constructor() { }

  ngOnInit(): void {
    this.model.push({ item: 'item1', status: 'New', child: {} as IBaseTable });
    this.model.push({ item: 'item2', status: 'New', child: {} as IBaseTable });
    this.model.push({ item: 'item3', status: 'New', child: {} as IBaseTable });
    this.filteredModel = this.model;
  }

  handleFilter(filterType: any) {
    if (filterType === 'All Items') {
      this.filteredModel = this.model;
      return;
    }
    this.filteredModel = this.model.filter(res => res.status === filterType);
  }
}
