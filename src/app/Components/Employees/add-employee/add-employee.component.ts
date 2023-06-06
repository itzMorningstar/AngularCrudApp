import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addEmployee } from 'src/app/Models/add-employee';
import { Department } from 'src/app/Models/department';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: addEmployee = {
    id :0,
    FirstName: '',
    LastName: '',
    Age: 0,
    Department: '',
    Gender: '',
    SalleryAmount: ''
  };
  departments = Object.values(Department);
  selectedDepartment: Department = Department.Sales;
  
  constructor (private employeeService: EmployeesService, private router : Router){

  }
  ngOnInit(): void{

  }
  addEmployee(){
    this.employee.Department = this.selectedDepartment;
    console.log(this.employee)
    var result = this.employeeService.addEmployee(this.employee)
    .subscribe({
      next :(Employee) =>{
        console.log(Employee)
        this.router.navigate(['employees'])
      },
      error : (response) =>{
        console.log(response)
      }
    })
    console.log(result);
  }

 
}
