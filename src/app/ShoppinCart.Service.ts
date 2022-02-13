import { Subject } from "rxjs/internal/Subject";
import { Cart } from "./shared/cart.model";
import { Products } from "./shared/products.model";

export class ShoppingCartService{
     private cart: Cart [] = [];
     cartChanged = new Subject<Cart[]>(); 
     itemSubtotal = 0;
     itemsInCart = 0;
     inCart= false;

    getCartItems(){  
        return this.cart.slice();
       
    }
    addCartItems(id:number,product: Products, quantity:number){  
     this.inCart= false;
      const price = product.price;
      const subtotal = price * quantity;   
      var  prodQuantity= Number(product.quantity)
      if (prodQuantity >10){
        prodQuantity = 10;
      }
      if(this.cart.length>=1){
        //check if item is in cart
        for(let i=0;i<this.cart.length;i++){
          if(this.cart[i].prodId === id){
            this.inCart = true;
            this.cart[i].quantity += quantity;
            this.cart[i].subtotal += subtotal; 
            this.itemsInCart += quantity;
          }
        }
      }
        if(!this.inCart){ 
          //add item to cart
        let cartItems = new Cart(
            id,
            product.productName,
            product.imageurl,
            quantity,
            price,
            subtotal,
            prodQuantity
        )  
        this.cart.push(cartItems); 
        this.itemsInCart += cartItems.quantity;
        }
        this.itemSubtotal+=subtotal; 
        this.cartChanged.next(this.cart.slice());  
        console.log(this.cart);
    
  }
  deleteCart(index:number) {  
      this.itemSubtotal -= this.cart[index].subtotal; 
      this.itemsInCart -= this.cart[index].quantity;
      this.cart.splice(index,1); 
      this.cartChanged.next(this.cart.slice()); 
        
  } 
   getcartTotal(){
     return this.itemSubtotal;
   }
   
  updateSubtotal(index: number,quant:number) {  
    const price = this.cart[index].price;
    const oldsubtotal =  this.cart[index].subtotal; 
    const newsubtotal = price * quant ; 
    const oldquant = this.cart[index].quantity; 
    const newquantity = (quant-oldquant);
    this.cart[index].subtotal = newsubtotal;
    this.cart[index].quantity = quant;
    this.itemSubtotal += (newsubtotal-oldsubtotal); 
    this.itemsInCart += newquantity;
    this.cartChanged.next(this.cart.slice());  

  }
  getNoItems(){
    return this.itemsInCart;
  }
}