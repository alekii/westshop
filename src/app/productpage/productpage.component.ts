import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Cart } from '../shared/cart.model';
import { Products } from '../shared/products.model';
import { ShoppingCartService } from '../ShoppinCart.Service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  id: number;
  product: Products;
  cartForm: FormGroup;
  quantity: number;
  loadStatus: string;
  isVisible = false;
  inStock = true;
  quantityAv: number;
  cart: Cart[];
  quantityInStock: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] - 1;
      this.product = this.productService.getProduct(this.id);
    });

    if (this.getQuantityInStock() <= 0) {
      this.inStock = false;
    } else {
      this.cartForm = new FormGroup({
        quantity: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      });
      this.cartForm.setValue({
        quantity: 1,
      });
    }
    this.quantityAv = this.getQuantityInStock();
    this.quantityInStock = this.getQuantityInStock();
    this.cart = this.shoppingCart.getCartItems();
    var quantityInCart;
    this.cart.forEach((cart) => {
      if (cart.prodId - 1 === this.id) {
        quantityInCart = cart.quantity;
        this.quantityAv -= quantityInCart;
      }
    });
    console.log('onInit ' + this.quantityAv);
    if (this.quantityAv <= 0) {
      this.inStock = false;
    }
  }

  increaseQuantity(limit: number) {
    let quantity = Math.abs(this.cartForm.value['quantity']);
    if (quantity >= limit) return;
    let newQuantity = quantity + 1;
    this.cartForm.setValue({
      quantity: newQuantity,
    });
  }
  decreaseQuantity() {
    let quantity = this.cartForm.value['quantity'];
    if (quantity <= 1) return;
    let newQuantity = quantity - 1;
    this.cartForm.setValue({
      quantity: newQuantity,
    });
  }
  getQuantityInStock() {
    return this.productService.products[this.id].quantity;
  }

  onSubmit() {
    const quantity = Math.abs(this.cartForm.value['quantity']);
    if (quantity > this.quantityAv || quantity <= 0) {
      this.loadStatus =
        'Please enter quantity between 1 and ' + this.quantityAv;
    } else {
      const amount = this.product.price * quantity;
      console.log('quantity is ' + quantity);
      this.quantityAv -= quantity;
      console.log('On Submit ' + this.quantityAv);
      this.isVisible = true;
      this.loadStatus = 'Adding to cart....';
      this.shoppingCart.addCartItems(this.id + 1, this.product, quantity);
      if (this.quantityAv < 1) {
        this.loadStatus = 'Added To Cart Successfully.';
        this.inStock = false;
      } else {
        setTimeout(() => {
          this.loadStatus = 'Added To Cart Successfully.';
          this, (this.isVisible = false);
        }, 500);
      }
    }
  }
}
