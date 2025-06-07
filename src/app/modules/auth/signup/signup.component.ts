import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name:string ='';
  email: string = '';
  password: string = '';
  confirmPassword:string = ''

  nameError:string ='';
  emailError:string ='';
  passwordError:string ='';


  constructor(private authService: AuthService, private router:Router) { }

  onSubmit() {

    if(!this.name || !this.email|| !this.password){
      if (this.name == ''){
        this.nameError = 'Enter your name';
      }
      if (this.email == ''){
          this.emailError = 'Enter your e-mail address';
      }
      if (this.password == ''){
          this.passwordError = 'Enter your password';
      }
      
      return;
    }
    this.authService.register(this.name,this.email, this.password)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['products']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    
  }


}

