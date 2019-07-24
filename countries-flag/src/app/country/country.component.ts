import { Component, OnInit, Input } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() countries: Country[];
  @Input() alpha: string;
  apiUrl = 'https://restcountries.eu/rest/v2/all?fields=flag;name;numericCode;capital;region;alpha3Code';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.getCountriesData()
      .subscribe(
        data => this.countries = data
      );
  }
  getCountriesData() {
    return this.http.get<Country[]>(this.apiUrl);
  }

}
