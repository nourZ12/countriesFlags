import { NgModule } from '@angular/core';
import { CountriesDetailsComponent } from './countries-details.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { NgbPanelHeader, NgbPanelToggle, NgbPanelContent, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        CountriesDetailsComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        SharedModule,
        NgbAccordionModule

    ]
})
export class CountriesModule {

}
