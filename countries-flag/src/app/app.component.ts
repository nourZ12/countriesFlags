import { Component, OnInit } from '@angular/core';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private country: CountryService) {
  }
  title = 'Countries';

  ngOnInit() {

  }
}
