import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomComponent } from './hom/hom.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',redirectTo:"signup",pathMatch:'full'
   
  }, 
  {
    path: 'home', canActivate:[AuthGuard], component:HomComponent
   
  }, 
  {
    path: 'signup',component:RegisterComponent
   
  },
  {
    path: 'login',component:LoginComponent
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
