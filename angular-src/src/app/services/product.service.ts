import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

	constructor(private http:Http) { }

	getProducts(){
  	
  	return this.http.get('http://localhost:3000/products/getproducts')
  				.map(res=>res.json());
  }

}