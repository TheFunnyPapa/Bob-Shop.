import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { AboutComponent } from './about/about.component';
import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent, HomeComponentGuard } from './home/home.component';
import { LoginComponent, LoginComponentGuard } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSupportComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [
    LoginComponentGuard,
    HomeComponentGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
