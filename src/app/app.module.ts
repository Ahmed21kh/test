import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { OverviweComponent } from './components/overviwe/overviwe.component';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { LatestPostComponent } from './components/latest-products/latest-post.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TablePricesComponent } from './components/table-prices/table-prices.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { HomeComponent } from './components/home/home.component';
import { BillingsoftwareComponent } from './components/billingsoftware/billingsoftware.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    OverviweComponent,
    FeaturedWorkComponent,
    LatestPostComponent,
    TestimonialsComponent,
    TablePricesComponent,
    ChooseUsComponent,
    StatisticsComponent,
    ContactUsComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    ServicesComponent,
    OurservicesComponent,
    HomeComponent,
    BillingsoftwareComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
