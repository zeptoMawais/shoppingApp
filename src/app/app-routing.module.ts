import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  {
    path:'',
    component:SampleComponent
  },
  {
    path:'main',
    component:MyCarouselComponent
  },
  {
    path:'productsearchresult',
    component:ProductSearchResultComponent
  },
  {
    path:'shopsearchresult',
    component:ShopSearchResultComponent
  },
  {
    path:'shopdescription',
    component:ShopDiscriptionComponent
  },
  {
    path:'productdescription',
    component:ProductDesciptionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
