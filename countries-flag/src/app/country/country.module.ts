import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';


@NgModule({
    declarations: [
        CountryComponent
    ],
    imports: [
        CommonModule,
        CountryRoutingModule,
        SharedModule

    ]
})
export class CountryModule {

}
