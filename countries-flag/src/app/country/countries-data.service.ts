import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {
  apiUrl = 'https://restcountries.eu/rest/v2/all?fields=flag;name;numericCode;capital;region;alpha3Code';

  constructor(private http: HttpClient) { }

  getCountriesData() {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
