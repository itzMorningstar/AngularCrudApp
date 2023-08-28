import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AuthGuard } from './Services/auth.guard';
import { LoginComponent } from './components/login-signup/login-component/login-component.component';

const routes: Routes = [
  {
    path : '',
    component :EmployeeListComponent
  },
  {
    path : 'employees',
    component :EmployeeListComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'employee/add',
    component : AddEmployeeComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'employees/edit/:id',
    component : EditEmployeeComponent,canActivate:[AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
