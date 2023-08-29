import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseApiUrl : string = environment.config.baseApiUrl;
  private authSubject = new BehaviorSubject({loggedIn : false, username : ''})
  authStatus:Observable<{loggedIn : boolean; username : string}> = this.authSubject.asObservable();

  constructor(private http: HttpClient , private router : Router) { 

  }

  login(username:string, password:string ,rememberMe:boolean = false) {
    return this.http.post<string>(this.baseApiUrl+'api/account/login', {username, password,rememberMe})
      .pipe(
        tap((response : any) => {
          const token = response.token;
          if(token ){
            localStorage.setItem("authToken",token);
            this.authSubject.next({loggedIn : true, username : username});
            localStorage.setItem('authStatus', JSON.stringify({ loggedIn: true, username: username }));
          }
        }),shareReplay()
      )
}
logout() {
  localStorage.removeItem("authToken");
  this.authSubject.next({ loggedIn: false, username: '' });
  localStorage.removeItem("authStatus")
}
setAuthStatus(status: { loggedIn: boolean; username: string }) {
  this.authSubject.next(status);
}
}
