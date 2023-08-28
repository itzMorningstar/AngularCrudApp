import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value as string;
      const password = this.form.get('password')?.value as string;
      this.authService.login(email, password).subscribe(
        () => {
          // Redirect to the dashboard or any other desired route upon successful login
          this.router.navigate(['/employees']);
        },
        (error) => {
          // Handle login error here
        }
      );
    }
  }
}
