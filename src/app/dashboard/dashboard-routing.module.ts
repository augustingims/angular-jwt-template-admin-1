import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboradComponent} from './dashboard/dashborad.component';

const routes: Routes = [
    {
      path: 'Dashboard',
      component: DashboradComponent,
      data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Dashboard'
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
