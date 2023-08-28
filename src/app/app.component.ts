import { Component } from '@angular/core';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrudApp';

  /**
   *
   */
  constructor(private authService : AuthServiceService) {
    
  }
  logout(){
this.authService.logout();
  }
}
