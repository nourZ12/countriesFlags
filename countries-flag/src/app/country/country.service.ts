import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/constants.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public loading = true;
  private readonly apiUrl = `${Constants.URL}/all?fields=flag;name;numericCode;capital;region;alpha3Code`;

  constructor(private http: HttpClient) { }

  getCountriesData() {
    const requestReturn = this.http.get<Country[]>(this.apiUrl);
    console.log(requestReturn);
    requestReturn.subscribe(() => this.loading = false);
    return requestReturn;
  }
}
