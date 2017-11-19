import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})

export class UnitListComponent implements OnInit {

  data: any = [
		["Quantity",  "Label","Factor", "Cal."],
		["Length",    "m",    1.0,      17.4],
		["Distance",  "km",   1000.0,		33],
		["Length",    "mm",   0.001,		0.001],
  ];

  constructor() { }

  ngOnInit() {
  }

}
