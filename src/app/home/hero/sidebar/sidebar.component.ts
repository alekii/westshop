import { Component, OnInit } from '@angular/core'; 
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: Category []
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categories = this.categoryService.loadCategories();

}
}
