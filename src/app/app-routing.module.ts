import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { HomeComponent } from './home/home.component'; 
import { ProductpageComponent } from './productpage/productpage.component';
import { RefreshComponent } from './refresh/refresh.component';
import { RouteResolver } from './resolvers/route.resolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    resolve: { myData: RouteResolver },
  },
  { path: 'category/:id', component: CategorypageComponent },
  { path: 'product/:id', component: ProductpageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:searchText', component: SearchComponent },
  { path: 'refresh', component: RefreshComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver,{
    provide:RouteReuseStrategy,
    useClass:CustomRouteReuseStrategy
  }],
})
export class AppRoutingModule {}
