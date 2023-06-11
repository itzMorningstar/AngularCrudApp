import { Component, ChangeDetectorRef } from '@angular/core';
import  {Employee} from 'src/app/Models/employee.model'
import { EmployeesService } from 'src/app/Services/employees.service';
import { ResponseModel } from '../../../Models/ResponseModel ';
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
    checkedEmployees : number[] =[];
    constructor(private employeeService : EmployeesService, private changeDetectorRef :ChangeDetectorRef ) {
      
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

addToCheckedList(id : number){
  var  employeeIndex = this.checkedEmployees.indexOf(id);
  if(employeeIndex != -1){
    this.checkedEmployees.splice(employeeIndex,1)
  }
  else{

    this.checkedEmployees.push(id);
  }
  console.log(this.checkedEmployees)
}
deleteEmployee(id : number){
   this.employeeService.deleteEmployeeById(id).subscribe({
    next : (deletion) =>{
      console.log(deletion)
    }
  })
  this.employees.splice(id,1)
  this.employees = [...this.employees];
  console.log(this.employees);
  //  this.refreshEmployeeData();

  //  this.changeDetectorRef.detectChanges()
}

refreshEmployeeData() {
  this.isLoading = true;
  this.employeeService.getAllEmployees().subscribe({
    next: (employeesData) => {
      console.log(employeesData);
      this.employees = employeesData.data;
      this.isLoading = false;
    },
    error: (response) => {
      console.log(response);
      this.isLoading = false;
    }
  });
}

}
