import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { HelpComponent } from './help/help.component';

// -- Routes --
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'units', component: UnitListComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [  RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
