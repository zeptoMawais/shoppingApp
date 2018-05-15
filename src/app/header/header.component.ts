import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string;
  public isShopCollapsed = true;
  public isLocationCollapsed = true;
  public isProductCollapsed = true;
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  productsFromCatagory(){
    this.router.navigate(['productsFromCatagoryUi']);
  }
  shopSearchResult(){
    this.router.navigate(['shopSearchResult']);
  }
  cart(){
    this.router.navigate(['cartView']);
  }

}
