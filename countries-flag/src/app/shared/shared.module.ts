import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoaderPageComponent } from '../loader-page/loader-page.component';

@NgModule({
    declarations: [
        LoaderPageComponent
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        LoaderPageComponent]
})

export class SharedModule {

}
