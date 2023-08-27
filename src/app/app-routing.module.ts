import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { LoginComponentComponent } from './components/login-signup/login-component/login-component.component';

const routes: Routes = [
  {
    path : '',
    component :EmployeeListComponent
  },
  {
    path : 'employees',
    component :EmployeeListComponent
  },
  {
    path : 'employee/add',
    component : AddEmployeeComponent
  },
  {
    path : 'employees/edit/:id',
    component : EditEmployeeComponent
  },
  {
    path : 'login',
    component : LoginComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
