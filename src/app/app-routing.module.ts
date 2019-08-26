import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent, HomeComponentGuard } from './home/home.component';
import { LoginComponent, LoginComponentGuard } from './login/login.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate:[LoginComponentGuard] },
    { path: 'home', component: HomeComponent, canActivate:[HomeComponentGuard], children:[
        { path: 'about', component: AboutComponent },
        { path: 'customer-support', component: CustomerSupportComponent },
    ]},
 
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }