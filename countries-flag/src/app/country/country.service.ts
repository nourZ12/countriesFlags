import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/constants.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly apiUrl = `${Constants.URL}/all?fields=flag;name;numericCode;capital;region;alpha3Code`;

  constructor(private http: HttpClient) { }

  getCountriesData() {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
