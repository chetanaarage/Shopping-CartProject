import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FlashMessagesService} from 'angular2-flash-messages';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
	qty:Number;
	private selectedproducts = [];

	private isDataLoading = true;	
		private isLoading = true;
	private selectedproduct = {};
	private productQty=1;
	private amount = {};

private product = {};
private name="";
private image="";
private price="";

  constructor(private http:Http,private cartService:CartService,
  	private flashMessage:FlashMessagesService,private router:Router) { 

  }

  ngOnInit() {
  	this.isDataLoading = true;
  	//this.isLoading = true;
  	this.selectedproducts = [];
	this.getSelectedProducts();
	 this.getTotalAmount();
  }

  getSelectedProducts() {
        this.cartService.getSelectedProducts().subscribe(
            data => {
			this.selectedproducts = data;
			this.getTotalAmount();
			//console.log("data in cart",this.selectedproducts)
			},error=>console.log(error),
			() => this.isDataLoading = false);
    }

  deleteProduct(prod){
  	if (window.confirm("Are you sure you want to permanently delete this item?")) {
  		this.selectedproduct={id:prod.id,qty:prod.qty};
  		this.cartService.deleteProduct(this.selectedproduct).subscribe(
  			res=>{
  				this.flashMessage.show("Item deleted Suceesfully",{cssClass:'alert-success',timeout:3000});
  				this.getSelectedProducts();
  				this.getTotalAmount();
  				
  			},
  			error=>console.log(error)
  		);
  	}

  }

  loadProduct(product) {
        //this.productSize = product.p_sizecode;
        this.qty = product.qty;
    //this.productColor = product.p_colorcode;
        this.name =  product.info.name;
        this.image = product.info.image;
        this.price = product.info.price;
        //this.enableEditing(this.productSize, this.productColor);
        this.product = product;
    }

  updateProduct(product){
  	// var newqty={
  	// 	quanity:this.qty
  	// } 
    console.log("product in updateProduct",product);
  	this.selectedproduct={id:product.id,oldqty:product.qty,newqty:this.qty};
    console.log("product in updateProduct selectedproduct",this.selectedproduct);
  	this.cartService.updateProduct(this.selectedproduct).subscribe(
  		res=>{
  			// this.productQty=1;
  			this.flashMessage.show("Item Edited Suceesfully",{cssClass:'alert-success',timeout:3000});
  			this.getSelectedProducts();
  			this.getTotalAmount();
  		},
  		error=>console.log(error)
  	);
  }

  // incrementQty(prod){
  // 	prod.qty++;
  // }
  // decrementQty(prod){
  // 	prod.qty--;
  // }


  getTotalAmount() {
        this.cartService.getTotal().subscribe(
            data => this.amount = data,
            error => console.log(error),
            () => this.isLoading = false
            );
  }

    onCheckout(amount){

      //alert("clicked onCheckout"+amount);
      this.router.navigate(['/payment']);

    }
}


