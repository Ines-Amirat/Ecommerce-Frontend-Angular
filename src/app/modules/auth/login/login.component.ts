import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  emailError: string = '';
  passwordError: string = '';


  constructor(private authService: AuthService) { }

  onSubmit() {
    if (!this.email || !this.password) {
      if (this.email == '') {
        this.emailError = 'Enter your e-mail address';
      }
      if (this.password == '') {
        this.passwordError = 'Enter your password';
      }
      return;
    }
    
    this.authService.loginClient(this.email, this.password)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}

