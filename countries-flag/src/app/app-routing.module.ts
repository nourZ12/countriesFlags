import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesDetailsComponent } from './countries-details/countries-details.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {path: '', component: CountryComponent},
  {path: 'details/:alphaCode', component: CountriesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
