import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SharedModule } from './shared/shared.module';
import { LoaderPageComponent } from './loader-page/loader-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    LoaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
