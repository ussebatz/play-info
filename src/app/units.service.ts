import { Injectable } from '@angular/core';

import { Unit } from './unitsystem/unit';
import { DEFUNITS } from './unitsystem/defaultunits';

@Injectable()
export class UnitsService {

  constructor() { }

  getUnits(): Unit[] {
    return DEFUNITS;
  }

}
