import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../product.service";
import { Products } from "../shared/products.model";

@Injectable()
export class RouteResolver implements Resolve<any>{
  loaded = false
    constructor(private productService: ProductService){
      //  this.productService.loadProducts();
    }

   async resolve() { 
        if(!this.loaded){
         const myData =await this.productService.loadProducts(); 
         this.loaded= true 
         return myData
        }else{
          return 
        }
      }

}