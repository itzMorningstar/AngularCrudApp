import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addEmployee } from 'src/app/Models/add-employee';
import { Department } from 'src/app/Models/department';
import { editEmployee } from 'src/app/Models/edit-employee';
import { Employee } from 'src/app/Models/employee.model';
import { Gender } from 'src/app/Models/gender';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employeeDetails: editEmployee ={
    id :0,
    firstName: '',
    lastName: '',
    age: 0,
    department: '',
    gender: '',
    sallery: ''
  };
  departments = Object.values(Department)
  selectedDepartment :Department = Department.Sales;
  gender = Object.values(Gender);
constructor (private employeeService : EmployeesService , 
  private router : Router,
  private route : ActivatedRoute,
  private cdr: ChangeDetectorRef
  ){  
}
  ngOnInit(){
    this.route.paramMap.subscribe({
      next : (params: { get: (arg0: string) => any; }) =>{
        const id = params.get('id');
        if(id){
          this.employeeService.getEmployeeById(id).subscribe({
            next : (employeeData) =>{
              
                this.employeeDetails = employeeData.data;
                console.log(this.employeeDetails)
                this.cdr.markForCheck();
            }
          })
        }
      }
    })
  }
  editEmployee(){
    
  }

}