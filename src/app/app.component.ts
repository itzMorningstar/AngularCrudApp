import { Component } from '@angular/core';
import { AuthServiceService } from './Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrudApp';
  isLoggedIn = false; // Initial login status
  username = '';
  /**
   *
   */
  constructor(private authService : AuthServiceService, private router: Router) {
    
  }
  ngOnInit() {
    const authStatus = JSON.parse(localStorage.getItem("authStatus") || '{}');
    this.authService.setAuthStatus(authStatus);

    this.authService.authStatus.subscribe((status) => {
      this.isLoggedIn = status.loggedIn;
      this.username = status.username;
    });
  }
  logout(){
    this.authService.logout();
    this.router.createUrlTree(["/login"]);
  }
}
