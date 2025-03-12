import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name:string ='';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.name,this.email, this.password)
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

