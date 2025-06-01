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

  token: string='';


  emailError: string = '';
  passwordError: string = '';


  constructor(private authService: AuthService) { }

  onSubmit() {
    localStorage.clear();
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
            this.email = response.email;
            this.token = response.token;

            localStorage.setItem('email',this.email);
            localStorage.setItem('token',this.token);
           
            
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}

