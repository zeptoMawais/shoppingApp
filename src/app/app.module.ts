import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { ShopSearchResultComponent } from './shop-search-result/shop-search-result.component';
import { ShopDiscriptionComponent } from './shop-discription/shop-discription.component';
import { RatingComponent } from './rating/rating.component';
import { AboutStoreComponent } from './about-store/about-store.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDesciptionComponent } from './product-desciption/product-desciption.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SampleComponent } from './sample/sample.component';
import { CartComponent } from './cart/cart.component';
import { HeaderSecondComponent } from './header-second/header-second.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCarouselComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterBarComponent,
    ProductSearchResultComponent,
    ShopSearchResultComponent,
    ShopDiscriptionComponent,
    RatingComponent,
    AboutStoreComponent,
    ReviewsComponent,
    ProductDesciptionComponent,
    SingleProductComponent,
    SampleComponent,
    CartComponent,
    HeaderSecondComponent,
    ShippingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
