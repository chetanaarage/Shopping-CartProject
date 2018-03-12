import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import {  Params } from '@angular/router';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Rx';


@Injectable()
export class CartService {
  
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

	constructor(private http:Http) { }

	addToCart(product){

	  	return this.http.post('http://localhost:3000/users/selectedproducts',JSON.stringify(product),this.options );
	  				
  	}


  getSelectedProducts() {
        return this.http.get('http://localhost:3000/users/selectedproducts').map(res => res.json());
    }  

  deleteProduct(product) {
        console.log("product in cart CartService delete",product);
        return this.http.post("http://localhost:3000/users/deleteselectedproducts", JSON.stringify(product), this.options);
    }

  updateProduct(product){
    return this.http.post("http://localhost:3000/users/updateselectedproducts",JSON.stringify(product), this.options);
  }

  getTotal(){
    return this.http.get("http://localhost:3000/users/guidePrice").map(res => res.json());
  }

}

 