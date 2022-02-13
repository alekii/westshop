import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit,OnDestroy {
  id: number;
  categories:Category[]
  category:string
  subscription: Subscription

  constructor(private route:ActivatedRoute,
              private categoryService:CategoryService) { }
 

  ngOnInit(): void {
    this.categories = this.categoryService.loadCategories();
   this.subscription = this.route.params
    .subscribe((params:Params)=>{
      this.id = +params['id']
      console.log(this.id)
      this.category = this.categories[this.id].categoryName
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
