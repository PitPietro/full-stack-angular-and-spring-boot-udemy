import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: [
    './sales-person-list.component.scss',
    '../app.component.scss'
  ]
})
export class SalesPersonListComponent implements OnInit {

  salesList: SalesPerson[] = [
    new SalesPerson('Elizabeth', 'Broose', 'albr@angular.com', 100000),
    new SalesPerson('Joe', 'Truman', 'jt@angular.com', 5400),
    new SalesPerson('Adrian', 'Plopper', 'apl@angular.com', 9800),
    new SalesPerson('Penny', 'Portman', 'ppman@angular.com', 14200),
    new SalesPerson('Rick', 'Robinson', 'riro@angular.com', 3210),
    new SalesPerson('Morty', 'Moore', 'momu@angular.com', 98788)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
