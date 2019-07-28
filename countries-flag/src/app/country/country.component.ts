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

export class CountryComponent implements OnInit {

  showSpinner = true;
  @Input() countries: Country[];
  constructor(private http: HttpClient, private countryData: CountryService) { }


  ngOnInit() {

    console.log('Done');
    return this.countryData.getCountriesData()
      .subscribe(
        data => {
          this.countries = data;
          this.showSpinner = false;
          console.log(this.countries);
        }
      );

  }



}
