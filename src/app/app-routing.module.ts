import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';


const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"customer-support", component: CustomerSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const yo = 'Jagshemash';