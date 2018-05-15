import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-shop-search-result',
  templateUrl: './shop-search-result.component.html',
  styleUrls: ['./shop-search-result.component.css']
})
export class ShopSearchResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  shopProfile(){
    this.router.navigate(['shopProfile']);
  }
}
