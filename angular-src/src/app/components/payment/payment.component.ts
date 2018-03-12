import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  //directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PaymentComponent implements OnInit {

  constructor(private cartService:CartService,private flashMessage:FlashMessagesService) { }
  private amount = {};
  cardNumber: String;
  expiryMonth: String;
  expiryYear: String;
  cvc: String;

  message: String;

  ngOnInit() {
  	this.cartService.getTotal().subscribe(
            data => this.amount = data,
            error => console.log(error));

  }

  getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {
      if (status === 200) {
        this.message = `Success! Card token ${response.card.id}.`;
        this.flashMessage.show(`Success! Card token ${response.card.id}.`,{
    				cssClass:'alert-success',
    				timeout:3000});
      } else {
        this.message = response.error.message;
        this.flashMessage.show(response.error.message,{
    				cssClass:'alert-danger',
    				timeout:3000});
      }
    });
  }



}
