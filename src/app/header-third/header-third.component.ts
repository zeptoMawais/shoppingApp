import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header-third',
  templateUrl: './header-third.component.html',
  styleUrls: ['./header-third.component.css']
})
export class HeaderThirdComponent implements OnInit {
  closeResult: string;
  wishlist: string = 'show';
  history: string = 'hide';
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  loadWishlist () {
    this.wishlist = 'show';
    this.history = 'hide';
  }
  loadHistory () {
    this.wishlist = 'hide';
    this.history = 'show';
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  buyerProfile(){
    this.router.navigate(['buyerProfile']);
  }
}
