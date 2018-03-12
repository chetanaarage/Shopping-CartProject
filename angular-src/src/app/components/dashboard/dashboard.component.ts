import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  //products:[];
    products: Object;
    private selectedproduct={};
    private productQty = 1;
    // private isLoading = true;
    // private amount = {};

  constructor(private productService:ProductService,
  			  private router:Router,private cartService:CartService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {

  	this.productService.getProducts().subscribe(data=>{
  		//console.log(data);
  		this.products=data.product;
  		//console.log(this.products);
  	},
  	err=>{
  		console.log(err);
  		return false;
  	});

  }

  addToCart(product){
    //var count=0;
 
    //console.log("this.productQty",this.productQty);
    this.selectedproduct = { id: product._id, qty: this.productQty };

    this.cartService.addToCart(this.selectedproduct).subscribe(data=>{
      //console.log('in cartService component addToCart',this.productQty );
      this.productQty = 1;
      this.flashMessage.show("Book added to cart",{cssClass:'alert-success',timeout:3000});
      //this.CartService.getTotal();
      //this.getTotalAmount();
      // console.log("data.cart.items.item._id",data.cart.items.item._id);
      // var arr=[];
      // if(data.cart.items.item._id){
      //   var res => {

            //     this.productSize = "";
            //     this.productColor = "";
            //     this.productQty = 1;
            //     this.toast.setMessage("item added successfully.", "success");
            // },
            // error => console.log(error)
            // );
      // }
      // if(data.success){      
      //   //console.log('count component in service ',data.success);
      //   //console.log('count component in service ',data.book);
      //   this.flashMessage.show("Book added to cart",{cssClass:'alert-success',timeout:3000});
      //   //book.qty=1;
      //   //console.log('count component in service ',count);
      //   //this.router.navigate(['/cart']);
      // }else{
      //   this.flashMessage.show("Not able to add",{cssClass:'alert-danger',timeout:3000});
      //   //this.router.navigate(['/register']);      
      // }
    },error=>console.log(error));

  }

  // getTotalAmount() {
  //       this.cartService.getTotal().subscribe(
  //           data => this.amount = data,
  //           error => console.log(error),
  //           () => this.isLoading = false
  //           );
  //   }


}





// addProduct(prod) {
     
//         this.selectedproduct = { p_id: prod.p_id, p_sizecode: this.productSize, p_colorcode: this.productColor, p_quantity: this.productQty };

//         this.dataService.addProduct(this.selectedproduct).subscribe(
//             res => {

//                 this.productSize = "";
//                 this.productColor = "";
//                 this.productQty = 1;
//                 this.toast.setMessage("item added successfully.", "success");
//             },
//             error => console.log(error)
//             );
//     }