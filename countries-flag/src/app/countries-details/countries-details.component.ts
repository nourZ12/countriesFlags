import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountryDetails } from './countries-details.model';
import { Country } from '../country/country.model';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {
  @Input() countries: Country[];
  alphaCode: string;
  apiURL = 'https://restcountries.eu/rest/v2/alpha';


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.params.subscribe(
      // tslint:disable-next-line: no-string-literal
      (params: Params) => this.alphaCode = params['alphaCode']
    );
  }

  ngOnInit() {
    return this.getCountriesData()
      .subscribe(
        data => this.countries = data
      );
  }
  getCountriesData() {
    const url = `${this.apiURL}/${this.alphaCode}`;
    return this.http.get<CountryDetails[]>(url);
  }

}
