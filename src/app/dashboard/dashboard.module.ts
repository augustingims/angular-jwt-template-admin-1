import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashboard/dashborad.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule.forRoot(),
    LayoutModule
  ],
  declarations: [DashboradComponent]
})
export class DashboardModule { }
