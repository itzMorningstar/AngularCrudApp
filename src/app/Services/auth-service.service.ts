import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseApiUrl : string = environment.config.baseApiUrl;

  constructor(private http: HttpClient) { 

  }

  login(username:string, password:string ,rememberMe:boolean = false) {
    return this.http.post<string>(this.baseApiUrl+'api/account/login', {username, password,rememberMe})
      .pipe(
        tap((response : any) => {
          const token = response.token;
          if(token ){
            localStorage.setItem("authToken",token);
          }
        }),shareReplay()
      )
}
logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}

}
