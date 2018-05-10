import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment1: string = 'show';
  payment2: string = 'hide';
  payment3: string = 'hide';
  payment4: string = 'hide';
  constructor() { }

  ngOnInit() {
  }
  hidePayment1(){
    this.payment1 = 'hide';
    this.payment2 = 'show';
    this.payment3 = 'hide';
    this.payment4 = 'hide';
  }
  hidePayment2(){
    this.payment1 = 'hide';
    this.payment2 = 'hide';
    this.payment3 = 'show';
    this.payment4 = 'hide';
    setTimeout (() => {
      this.hidePayment3();
      console.log("Hello from setTimeout");
    }, 2000);
  }
  hidePayment3(){
    this.payment1 = 'hide';
    this.payment2 = 'hide';
    this.payment3 = 'hide';
    this.payment4 = 'show';
  }
  reset(){
    this.payment1 = 'show';
    this.payment2 = 'hide';
    this.payment3 = 'hide';
    this.payment4 = 'hide';
  }


}
