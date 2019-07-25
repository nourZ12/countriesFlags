import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})
@Injectable({
  providedIn: 'root'
})
export class CountryComponent implements OnInit {


  constructor(private http: HttpClient, private countryData: CountryService) { }
  public static hi: string;
  public loading = false;
  @Input() countries: Country[];

  ngOnInit() {
    return this.countryData.getCountriesData()
      .subscribe(
        data => {
          this.loading = true;

          this.countries = data;
          console.log(data);

        }
      );
  }



}
