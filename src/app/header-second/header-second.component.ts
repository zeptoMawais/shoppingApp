import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrls: ['./header-second.component.css']
})
export class HeaderSecondComponent implements OnInit {

  cart: string = 'show';
  delivery: string = 'hide';
  payment: string = 'hide';
  receipt: string = 'hide';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  loadCart(){
    this.cart= 'show';
    this.delivery = 'hide';
    this.payment= 'hide';
    this.receipt = 'hide';
  }
  loadDelivery(){
    this.cart = 'hide';
    this.delivery = 'show';
    this.payment = 'hide';
    this.receipt = 'hide';
  }
  loadPayment(){
    this.cart = 'hide';
  this.delivery = 'hide';
    this.payment = 'show';
    this.receipt = 'hide';
  }
  loadReceipt(){
    this.cart = 'hide';
    this.delivery = 'hide';
    this.payment = 'hide';
    this.receipt = 'show';
  }
  buyerProfile(){
    this.router.navigate(['buyerProfile']);
  }

}
