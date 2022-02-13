import { Category } from "./shared/category.model"

export class CategoryService{
   private categories: Category[]  = [
        new Category("Smartphones"),
        new Category("TVs & Audio"),
        new Category("Kitchen Appliance"),
        new Category("Women Wear"),
        new Category("Men's Wear"),
        new Category("Watches"), 
        
      ] ;
  
    public loadCategories(){
        return this.categories.slice()
    }
}