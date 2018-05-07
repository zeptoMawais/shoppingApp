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
    ShopDiscriptionComponent
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
