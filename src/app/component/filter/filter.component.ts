import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  filterTypes: any = [
    'All Items',
    'New',
    'In Progress',
    'Completed'
  ]

  @Output() passFilter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterApplied(filterType: string) {
    this.passFilter.emit(filterType);
  }

}
