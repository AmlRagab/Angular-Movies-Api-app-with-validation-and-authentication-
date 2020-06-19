import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomComponent } from './hom/hom.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule}from '@angular/common/http';
import { RegisterComponent } from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomComponent,
    MoviesComponent,
    MoviesdetailsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
