import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { BannerComponent } from './home/hero/banner/banner.component';
import { SidebarComponent } from './home/hero/sidebar/sidebar.component';
import { ProductrowComponent } from './home/productrow/productrow.component';
import { ProductcolumnComponent } from './home/productrow/productcolumn/productcolumn.component';
import { HomeCategoriesComponent } from './home/home-categories/home-categories.component';
import { HomeComponent } from './home/home.component';
import { CsvService } from './csv.service';
import { ProductService } from './product.service';
import { FilterPipe } from './shared/filter.pipe';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CategoryService } from './category.service';
import { ProductpageComponent } from './productpage/productpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from './ShoppinCart.Service';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { RefreshComponent } from './refresh/refresh.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    BannerComponent,
    SidebarComponent,
    ProductrowComponent,
    ProductcolumnComponent,
    HomeCategoriesComponent,
    HomeComponent, 
    FilterPipe, CategorypageComponent, ProductpageComponent,CartComponent, SearchComponent, RefreshComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CsvService,ProductService,CategoryService,ShoppingCartService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
