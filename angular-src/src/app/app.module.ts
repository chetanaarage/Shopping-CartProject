import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
//import { ModalModule } from 'ng2-bs4-modal/lib/ng2-bs4-modal.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FlashMessagesModule} from 'angular2-flash-messages';


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {PaymentService} from './services/payment.service';
import {AuthGuard} from './guards/auth.guard';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ResetComponent } from './components/reset/reset.component';
import { PaymentComponent } from './components/payment/payment.component';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGuard]},
  {path:'edit-product/:id',component:EditProductComponent},
  {path:'forgotten-password',component:ForgottenPasswordComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'payment',component:PaymentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,   
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ShoppingCartComponent,
    EditProductComponent,
    ForgottenPasswordComponent,
   
    ResetComponent,
   
    PaymentComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2Bs3ModalModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
 
  ],
  providers: [ValidateService,AuthService,ProductService,CartService,PaymentService,AuthGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
