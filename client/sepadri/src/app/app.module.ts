import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Home/footer/footer.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { ServiceComponent } from './Home/service/service.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { ContactComponent } from './Home/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './Home/home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ServiceComponent,
    PageNotFoundComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '' , component: HomeComponent},
      {path : 'service' , component: ServiceComponent}
      ,{path : 'contact' , component: ContactComponent}
      ,{path : 'login' , component: LoginComponent}
      ,{path : 'register' , component: RegisterComponent},
      { path: '**', component: PageNotFoundComponent }
 ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
