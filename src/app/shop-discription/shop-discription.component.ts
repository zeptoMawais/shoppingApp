import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-discription',
  templateUrl: './shop-discription.component.html',
  styleUrls: ['./shop-discription.component.css']
})
export class ShopDiscriptionComponent implements OnInit {

  productComponentStatus: string = 'show';
  aboutStoreComponentStatus: string = 'hide';
  reviewsComponentStatus: string = 'hide';
  constructor() { }

  ngOnInit() {
  }
  showProductComponent(){
    this.productComponentStatus = 'show';
    this.aboutStoreComponentStatus = 'hide';
    this.reviewsComponentStatus = 'hide';
  }
  showAboutStoreComponent(){
    this.productComponentStatus = 'hide';
    this.aboutStoreComponentStatus = 'show';
    this.reviewsComponentStatus = 'hide';
  }
  showReviewsComponent(){
    this.productComponentStatus = 'hide';
    this.aboutStoreComponentStatus = 'hide';
    this.reviewsComponentStatus = 'show';
  }

}
