import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce-Frontend';
   
  showHeader = true ;
  showFooter = true;

  constructor (private router : Router){
      this.router.events
           .pipe(filter(event => event instanceof NavigationEnd))
           .subscribe((event :any) =>{
               const hiddenRoutes =['/login', '/register'];
               this.showHeader = !hiddenRoutes.includes(event.url)
               this.showFooter = !hiddenRoutes.includes(event.url)
           })

}


}
