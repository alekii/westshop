import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { SearchService } from 'src/app/search.service';
import { Products } from 'src/app/shared/products.model';

@Component({
  selector: 'app-productcolumn',
  templateUrl: './productcolumn.component.html',
  styleUrls: ['./productcolumn.component.css'],
})
export class ProductcolumnComponent implements OnInit {
  @Input() nocolumns: any;
  products: Products[];
  result: Products[] = [];
  @Input() category: any;
  hasResults =true

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private searchService:SearchService
  ) {}

  ngOnInit(): void {
    // this.products = this.route.snapshot.data['myData']
    
    this.hasResults =true
    if(this.category === 'Search Results'){
       this.getSearchResults().then(()=>console.log("Task completed"));;
    }
    else{
    this.products = this.productService.getProductsByCategory();
    this.getResults()
    }
  }
  getResults() {
    setTimeout(() => {
      console.log(this.products)
      this.products.forEach((cat: any) => {
        if (
          cat.category.trim().toLowerCase() ===
          this.category.trim().toLowerCase()
        ) {
          this.result.push(cat);
        }
      });
    }, 100);
  }
   getSearchResults():Promise<any>{
     var promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        this.result =  this.searchService.getSearchResults()
        console.log(this.result)
        if(this.result.length===0){
          this.hasResults = false;
        } 
      resolve(this.result)
       },100);
    });
    return promise
  }
}
