import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService  {

  constructor(private route: ActivatedRoute, private router: Router) {  }


}
