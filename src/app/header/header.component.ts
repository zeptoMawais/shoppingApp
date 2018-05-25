import { Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, merge} from 'rxjs/operators';

const states = ['awais','ali','umar'];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('instance') instance: NgbTypeahead;
  closeResult: string;
  public isShopCollapsed = true;
  public isLocationCollapsed = true;
  public isProductCollapsed = true;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
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
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      merge(this.focus$),
      merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );

}
