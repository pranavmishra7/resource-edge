import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {path:'admin', component:AdmindashboardComponent,
          children:[
            {path:'employee', component:EmployeeComponent}
          ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }