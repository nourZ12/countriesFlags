import { Component, OnInit, Input } from '@angular/core';
import { Country } from './country.model';
import { CountriesDataService } from './countries-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 @Input() countries: Country[];

  constructor(private countriesData: CountriesDataService) { }

  ngOnInit() {
    return this.countriesData.getCountriesData()
    .subscribe(
      data => this.countries = data
    );
  }

}
