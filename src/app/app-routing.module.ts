import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './component/login/employee-login/employee-login.component';

const routes: Routes = [
  {
    path : '',
    redirectTo :'login',
pathMatch:'full'  },
  {
    path : 'login',
    component :EmployeeLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
