import { NgModule } from '@angular/core';
import { CountriesDetailsComponent } from './countries-details.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        CountriesDetailsComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        SharedModule

    ]
})
export class CountriesModule {

}
