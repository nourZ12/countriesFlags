import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesDetailsComponent } from './countries-details.component';



const routes: Routes = [
    {
        path: ':alphaCode', component: CountriesDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountriesRoutingModule { }
