import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingsoftwareComponent } from './components/billingsoftware/billingsoftware.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OverviweComponent } from './components/overviwe/overviwe.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"about" , component:OverviweComponent},
  {path:"products" , component:ProductsComponent},
  {path:"services" , component:ServicesComponent},
  {path:"billing" , component:BillingsoftwareComponent},
  {path:"contact" , component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
