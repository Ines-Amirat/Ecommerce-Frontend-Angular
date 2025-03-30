import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ProductsComponent } from './modules/product/products/products.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';


const routes: Routes = [
   {path :'login', component: LoginComponent },
   {path :'register', component: SignupComponent },
   {path :'products', component:ProductsComponent },
   {path :'home', component: HomeComponent },
   {path :'products/:id', component: ProductDetailComponent  },
   {path:'', redirectTo :'home' ,pathMatch:'full'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
