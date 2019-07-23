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
  @Output() countries: Country[];
  urlA = this.router.url.split('/details/');
  apiURL = 'https://restcountries.eu/rest/v2/alpha/' + this.urlA[1];


  alphaCode: number;
  constructor(private route: ActivatedRoute,  private router: Router, private http: HttpClient) { }

  ngOnInit() {
    console.log(this.apiURL);
    return this.getCountriesData()
    .subscribe(
      data => this.countries = data
    );
  }
  getCountriesData() {
    return this.http.get<CountryDetails[]>(this.apiURL);
  }

}
