/* UnitListComponent */
import { Component, OnInit } from '@angular/core';
import { Unit } from '../unitsystem/unit';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})

export class UnitListComponent implements OnInit {

  // -- units --
  /*
  data: any = [
		["Quantity",  "Label","Factor", "Cal."],
		["Length",    "m",    1.0,      17.4],
		["Distance",  "km",   1000.0,		33],
		["Length",    "mm",   0.001,		0.001],
  ];
  */

  units: Unit[];

  constructor(private unitsService: UnitsService) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits(): void {
    this.units = this.unitsService.getUnits();
  }
}
