import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  main(){
    this.router.navigate(['main']);
  }
  pfcui(){
    this.router.navigate(['productsFromCatagoryUi']);
  }
  ssr(){
    this.router.navigate(['shopSearchResult']);
  }
  sp(){
    this.router.navigate(['shopProfile']);
  }
  pv(){
    this.router.navigate(['productView']);
  }
  cv(){
    this.router.navigate(['cartView']);
  }
  cc(){
    this.router.navigate(['closecart']);
  }
  cp(){
    this.router.navigate(['closepayment']);
  }
  buyerProfile(){
    this.router.navigate(['buyerProfile']);
  }

}
