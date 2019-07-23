import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesDataService } from './country/countries-data.service';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountriesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
