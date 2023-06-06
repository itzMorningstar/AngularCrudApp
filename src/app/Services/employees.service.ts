import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/ResponseModel ';
import { addEmployee } from '../Models/add-employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl : string = environment.config.baseApiUrl;
  xApiKey : string = environment.config.apikey;
  getEmployeePath : string = "api/Employees/getemployees"
  addEmployeePath : string = "api/Employees/addemployee"
  FindEmployeePath : string = "api/Employees/"
  constructor(private http: HttpClient) { 

  }
  getAllEmployees(): Observable<ResponseModel> {
    // Create a HttpHeaders object and set the API key
    const headers = new HttpHeaders().set('x-api-key',this.xApiKey);
  
    // Make the request with the headers
    return this.http.get<ResponseModel>(this.baseApiUrl + this.getEmployeePath, { headers });
  }

  addEmployee(addEmployeeRequest : addEmployee){
    const headers  = new HttpHeaders ().set("x-api-key",this.xApiKey);
    return this.http.post<ResponseModel>(this.baseApiUrl +this.addEmployeePath,addEmployeeRequest,{headers});
  }

  getEmployeeById(employeeId : number){
    const headers = new HttpHeaders().set("x-api-key",this.xApiKey);
    return this.http.get<ResponseModel>(this.baseApiUrl +this.FindEmployeePath +employeeId,{headers} )
  }
}
