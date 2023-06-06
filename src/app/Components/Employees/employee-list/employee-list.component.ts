import { Component } from '@angular/core';
import  {Employee} from 'src/app/Models/employee.model'
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
    /**
     *
     */

    employees : Employee[] = [];
    isLoading :boolean = false;
    
    constructor(private employeeService : EmployeesService) {
      
    }
  ngOnInit():void{
    this.isLoading = true;
    this.employeeService.getAllEmployees()
    .subscribe({
      next : (employeesData) => {
        console.log(employeesData);
        this.employees = employeesData.data;
        this.isLoading =false
      },
      error : (response) =>{
        console.log(response)
        this.isLoading =false

      }
    })
}
}
