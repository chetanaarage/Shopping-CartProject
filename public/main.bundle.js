webpackJsonp([1,4],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Rx';
var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CartService.prototype.addToCart = function (product) {
        return this.http.post('http://localhost:3000/users/selectedproducts', JSON.stringify(product), this.options);
    };
    CartService.prototype.getSelectedProducts = function () {
        return this.http.get('http://localhost:3000/users/selectedproducts').map(function (res) { return res.json(); });
    };
    CartService.prototype.deleteProduct = function (product) {
        console.log("product in cart CartService delete", product);
        return this.http.post("http://localhost:3000/users/deleteselectedproducts", JSON.stringify(product), this.options);
    };
    CartService.prototype.updateProduct = function (product) {
        return this.http.post("http://localhost:3000/users/updateselectedproducts", JSON.stringify(product), this.options);
    };
    CartService.prototype.getTotal = function () {
        return this.http.get("http://localhost:3000/users/guidePrice").map(function (res) { return res.json(); });
    };
    CartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CartService);
    return CartService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/cart.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/validate.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/products/getproducts')
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/product.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(517);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(719),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cart_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_payment_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_shopping_cart_shopping_cart_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_forgotten_password_forgotten_password_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_reset_reset_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_19__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-product/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__["a" /* EditProductComponent */] },
    { path: 'forgotten-password', component: __WEBPACK_IMPORTED_MODULE_21__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_23__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__["a" /* PaymentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__["a" /* EditProductComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_forgotten_password_forgotten_password_component__["a" /* ForgottenPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__["a" /* PaymentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_16__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_17__services_payment_service__["a" /* PaymentService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/app.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    // private isLoading = true;
    // private amount = {};
    function DashboardComponent(productService, router, cartService, flashMessage) {
        this.productService = productService;
        this.router = router;
        this.cartService = cartService;
        this.flashMessage = flashMessage;
        this.selectedproduct = {};
        this.productQty = 1;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            //console.log(data);
            _this.products = data.product;
            //console.log(this.products);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.addToCart = function (product) {
        //var count=0;
        var _this = this;
        //console.log("this.productQty",this.productQty);
        this.selectedproduct = { id: product._id, qty: this.productQty };
        this.cartService.addToCart(this.selectedproduct).subscribe(function (data) {
            //console.log('in cartService component addToCart',this.productQty );
            _this.productQty = 1;
            _this.flashMessage.show("Book added to cart", { cssClass: 'alert-success', timeout: 3000 });
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
        }, function (error) { return console.log(error); });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(720),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
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
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProductComponent = (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(721),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditProductComponent);
    return EditProductComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/edit-product.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgottenPasswordComponent = (function () {
    function ForgottenPasswordComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ForgottenPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgottenPasswordComponent.prototype.onResetLinkSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        this.authService.forgottenPasswordUser(user).subscribe(function (data) {
            console.log("data in forgotten-password", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to send  reset link', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    ForgottenPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotten-password',
            template: __webpack_require__(722),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ForgottenPasswordComponent);
    return ForgottenPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/forgotten-password.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(723),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/home.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in successfully', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(724),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/login.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(725),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = (function () {
    function PaymentComponent(cartService, flashMessage) {
        this.cartService = cartService;
        this.flashMessage = flashMessage;
        this.amount = {};
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getTotal().subscribe(function (data) { return _this.amount = data; }, function (error) { return console.log(error); });
    };
    PaymentComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            if (status === 200) {
                _this.message = "Success! Card token " + response.card.id + ".";
                _this.flashMessage.show("Success! Card token " + response.card.id + ".", {
                    cssClass: 'alert-success',
                    timeout: 3000 });
            }
            else {
                _this.message = response.error.message;
                _this.flashMessage.show(response.error.message, {
                    cssClass: 'alert-danger',
                    timeout: 3000 });
            }
        });
    };
    PaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(726),
            styles: [__webpack_require__(714)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], PaymentComponent);
    return PaymentComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/payment.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(727),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/profile.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please enter a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Registered successfully,,!! You can login now..", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong..!!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(728),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/register.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = (function () {
    function ResetComponent(validateService, flashMessage, authService, route, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ResetComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //    this.token = params['token']; // --> Name must match wanted parameter
        //  });
        this.token = this.route.snapshot.params["token"];
    };
    ResetComponent.prototype.onResetPassword = function () {
        //  console.log(this.token);
        var _this = this;
        // console.log("access_token",resetToken);
        var user = {
            password: this.password,
            confirm: this.confirm,
            token: this.token
        };
        console.log("in reset component user", user);
        this.authService.resetPassword(user).subscribe(function (data) {
            console.log("data in reset resetPassword", data);
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.password = "";
                _this.confirm = "";
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unable to change password', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
                _this.router.navigate(['/forgotten-password']);
            }
        });
    };
    ResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(729),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/reset.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(http, cartService, flashMessage, router) {
        this.http = http;
        this.cartService = cartService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.selectedproducts = [];
        this.isDataLoading = true;
        this.isLoading = true;
        this.selectedproduct = {};
        this.productQty = 1;
        this.amount = {};
        this.product = {};
        this.name = "";
        this.image = "";
        this.price = "";
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.isDataLoading = true;
        //this.isLoading = true;
        this.selectedproducts = [];
        this.getSelectedProducts();
        this.getTotalAmount();
    };
    ShoppingCartComponent.prototype.getSelectedProducts = function () {
        var _this = this;
        this.cartService.getSelectedProducts().subscribe(function (data) {
            _this.selectedproducts = data;
            _this.getTotalAmount();
            //console.log("data in cart",this.selectedproducts)
        }, function (error) { return console.log(error); }, function () { return _this.isDataLoading = false; });
    };
    ShoppingCartComponent.prototype.deleteProduct = function (prod) {
        var _this = this;
        if (window.confirm("Are you sure you want to permanently delete this item?")) {
            this.selectedproduct = { id: prod.id, qty: prod.qty };
            this.cartService.deleteProduct(this.selectedproduct).subscribe(function (res) {
                _this.flashMessage.show("Item deleted Suceesfully", { cssClass: 'alert-success', timeout: 3000 });
                _this.getSelectedProducts();
                _this.getTotalAmount();
            }, function (error) { return console.log(error); });
        }
    };
    ShoppingCartComponent.prototype.loadProduct = function (product) {
        //this.productSize = product.p_sizecode;
        this.qty = product.qty;
        //this.productColor = product.p_colorcode;
        this.name = product.info.name;
        this.image = product.info.image;
        this.price = product.info.price;
        //this.enableEditing(this.productSize, this.productColor);
        this.product = product;
    };
    ShoppingCartComponent.prototype.updateProduct = function (product) {
        var _this = this;
        // var newqty={
        // 	quanity:this.qty
        // } 
        console.log("product in updateProduct", product);
        this.selectedproduct = { id: product.id, oldqty: product.qty, newqty: this.qty };
        console.log("product in updateProduct selectedproduct", this.selectedproduct);
        this.cartService.updateProduct(this.selectedproduct).subscribe(function (res) {
            // this.productQty=1;
            _this.flashMessage.show("Item Edited Suceesfully", { cssClass: 'alert-success', timeout: 3000 });
            _this.getSelectedProducts();
            _this.getTotalAmount();
        }, function (error) { return console.log(error); });
    };
    // incrementQty(prod){
    // 	prod.qty++;
    // }
    // decrementQty(prod){
    // 	prod.qty--;
    // }
    ShoppingCartComponent.prototype.getTotalAmount = function () {
        var _this = this;
        this.cartService.getTotal().subscribe(function (data) { return _this.amount = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ShoppingCartComponent.prototype.onCheckout = function (amount) {
        //alert("clicked onCheckout"+amount);
        this.router.navigate(['/payment']);
    };
    ShoppingCartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(730),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/shopping-cart.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentService = (function () {
    function PaymentService() {
    }
    PaymentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], PaymentService);
    return PaymentService;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/payment.service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgottenPasswordUser = function (user) {
        console.log('in AuthService forgotten forgottenPassword', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/forgottenPassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // resetUser(token){
    //   //console.log('in AuthService frsetuser',token);
    //   let headers=new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.get('http://localhost:3000/reset/:token',{headers:headers});
    //               .map(res=>res.json());
    // }
    AuthService.prototype.resetPassword = function (user) {
        console.log("in resetPassword service ", user.token);
        // let token=user.token;
        // console.log("user.token",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        //let body = JSON.stringify(user);
        //console.log("body.token",body.token);
        return this.http.post('http://localhost:3000/reset/' + user.token, user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/vagrant/projects/mean2/angular-src/src/auth.service.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ".rowCover{\n   padding:20px\n}\n\n.rowBorder{\n    border-bottom: 5px solid #e1e1e1;\n    padding-bottom: 30px;\n}"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "input {\n  width: 250px;\n}\n\n.payment-message {\n  display: block;\n  height: 20px;\n}\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Trebuchet MS\";\n}\n\np{\n    padding: 50px;\n    font-size: 32px;\n    font-weight: bold;\n    text-align: center;\n    background: #dbdfe5;\n}\n\n.vspace{\n    margin-top:25px;\n}\n\n\n.odd{\n \n\n}\n.even{\n   \n}\n\n.rowCover{\n   padding:20px\n}\n\n.rowBorder{\n    border-bottom: 5px solid #e1e1e1;\n    padding-bottom: 30px;\n}\n\n\n.rowBorder-alt{\n    border-bottom: 3px solid #e1e1e1;\n    padding-bottom: 15px;\n    margin-left:10px;\n}\n\n.shopping-head\n{\n    color: #a7a7a7;\n    font-family: \"Trebuchet MS\";\n    font-size: 48px;\n    font-style: normal;\n    font-weight: normal;\n    margin-bottom: 20px;\n    padding: 27px 0 10px 30px;\n\n}\n\n.border_text{\n    border:1px solid solid;\n}\n\n.header-border{\n    border-bottom: 5px solid #e1e1e1;\n    border-top: 2px solid #e1e1e1;\n    color: #a1a1a1;\n    font-size: 14px;\n    height: 60px;\n    margin-bottom: 15px;    \n    padding: 12px 40px 0 9px;\n}\n\n.header-border-alt{\n    border-bottom: 5px solid #e1e1e1;\n    color: #a1a1a1;\n    font-size: 14px;\n    height: 60px;\n    margin-bottom: 15px;    \n    padding: 12px 40px 0 9px;\n    margin-left:10px;\n    margin-right:2px;\n}\n\n.cell-size{\n    \n}\n\n.cell-qty{\n    \n}\n\n.prod-name{\n    color: #808080;\n    font-size: 14px;\n    font-weight: 700;\n    margin-left: -14px;\n}\n\n.prod-name-alt{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 500;\n    \n}\n\n\n.prod-info{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 300;\n    \n}\n\n.prod-style{\n    color: #808080;\n    font-size: 13px;\n    font-weight: 500;\n    margin-left: -14px;\n}\n\n\n.prod-action{\n    color: #60767c;\n    font-size: 13px;\n    font-weight: normal;\n    margin-left: -34px;\n    margin-top: 60px;\n}\n\n\n.prod-action-alt{\n    text-align:center;\n    color: #60767c;\n    font-size: 12px;\n    font-weight: normal;\n    margin-left: -5px;\n}\n\n\n.input-qty{\n    width:28px;\n    padding:1px 2px 3px 4px;\n    padding: 0 0 2px 10px;\n    width: 34px;\n    color: #808080;\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.prod-size{\n    color: #808080;\n    font-size: 13px;\n    font-weight: 600;\n    padding: 2px 0 0 19px;\n}\n\n\n.prod-qty{\n    padding: 0;\n}\n\n\n.prod-qty-alt{\n        padding: 6px 0px 0px 16px;\n        color: #808080;\n        font-size: 13px;\n        font-weight: 400;\n}\n\n.price-value{\n    padding: 0;\n    vertical-align: text-bottom;\n}\n\n.price-text-alt{\n   color: #808080;\n    font-size: 21px;\n    font-weight: 500;\n    margin-left: 8px;\n    padding: 3px 0px 15px 5px;\n}\n\n.prod-currency{\n     color: #808080;\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: -6px;\n    vertical-align: text-top;\n}\n.prod-currency-alt{\n     color: #808080;\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: -6px;\n    vertical-align: text-top;\n}\n.side-text-1{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 600;\n    padding: 0px 0px 20px 0px;\n    margin-top: 30px;\n}\n\n.side-text-2{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 300;\n    padding: 0px 0px 20px 0px;\n}\n\n.side-text-3{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 300;\n    text-decoration:underline;\n    padding: 0px 0px 20px 0px;\n}\n\n.btnApply{\n    width:35%;\n    background-color:white;\n    color: #808080;\n    font-size: 12px;\n    font-weight: 500;\n}\n\n.txtPromotion{\n    width:60%;\n     color: #808080;\n    font-size: 12px;\n    font-weight: 500;\n}\n\n.bold-text{\n    color: #808080;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: \"Trebuchet MS\"\n}\n\n\n.bolder-text{\n    color: #808080;\n    font-size: 16px;\n    font-weight: 900;\n    font-family: \"Trebuchet MS\"\n}\n\n\n.light-text{\n    color: #808080;\n    font-size: 11px;\n    font-weight: 400;\n}\n\n\n\n.lbl-amount{\n    text-align:right;\n}\n\n.price-row{\n    margin-top:35px;\n}\n\n\n\n\n.top-border{\n    border-top: 3px solid #e1e1e1;\n}\n\n\n.align-center{\n    text-align:center;\n    color: #808080;\n    font-size: 12px;\n    font-weight: 400;\n}\n\n@media (min-width: 768px) {\n\n    \n.link{\n    padding: 0 20px;\n    cursor:pointer;\n}\n\n.price-row-3{\n    margin-top:30px;\n    border-bottom: 5px solid #e1e1e1;\n    border-top: 2px solid #e1e1e1;\n    padding-top:10px;\n}\n\n    \n    .dvPromotion{\n        border-bottom: 5px solid #e1e1e1;\n        margin-top:30px;\n        height:73px;\n    }\n\n    .price-text-bold{\n       color: #808080;\n        font-size: 25px;\n        font-weight: bold;\n        margin-left: -13px;\n        padding: 0 0 0 5px;\n    }\n    .price-margin{\n        margin-right:60px;\n    }\n\n    .continue-shopping{\n        text-align:right;\n        padding-top:10px;\n        text-decoration:underline;\n    }\n\n    .align-right{\n      text-align:right;\n  }\n    .bottom-text{\n        margin-top:4px;\n        text-align:right;\n    }\n\n    .price-row-2{\n    margin-top:30px;\n    }\n\n    \n    .price-text{\n       color: #808080;\n        font-size: 21px;\n        font-weight: 500;\n        margin-left: -13px;\n        padding: 0 0 0 5px;\n    }\n\n    .free{\n        text-align:right;padding-right:80px;\n    }\n}\n\n@media (max-width: 767px) {\n    /* CSS goes here */\n    .free{\n        text-align:right;padding-right:40px;\n    }\n    \n.link{\n    padding: 0 13px;\n    cursor:pointer;\n}\n\n    \n.price-row-3{\n    margin-top:30px;\n    border-bottom: 5px solid #e1e1e1;\n    border-top: 2px solid #e1e1e1;\n    padding-top:10px;\n    margin-left:2px;\n    margin-right:4px;\n}\n\n    \n    .dvPromotion{\n        border-bottom: 5px solid #e1e1e1;\n        margin-top:30px;\n        height:73px;\n        margin-left:12px;\n    }\n    \n    .price-text-bold{\n       color: #808080;\n        font-size: 21px;\n        font-weight: bold;\n        margin-left: -13px;\n        margin-top: -13px;\n        padding: 0 0 0 5px;\n    }\n    .price-text{\n       color: #808080;\n        font-size: 19px;\n        font-weight: 500;\n        margin-left: -13px;\n        margin-top: -14px;\n        padding: 0 0 0 5px;\n    }\n    \n    .price-margin{\n        margin-right:5px;\n    }    \n    .centered{\n        text-align:center!important;\n    }\n\n    .broad{\n        width:90%;\n    }\n\n    .top-margin{\n        margin-top: 5px;\n    }\n\n    .row-swap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column\n  }\n  .row-swap > div:first-of-type {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n\n  \n.price-row-2{\n    margin-top:10px;\n    \n}\n\n.extra-pad{\n    padding:0px 45px 0px 45px;\n    margin-left:10px;\n    margin-right:10px;\n}\n  \n}"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-md-12 rowCover\" *ngFor=\"let product of products\">\n  <div class=\"row rowBorder\">\n  <div class=\"col-md-3\"><img src=\"{{product.image}}\" style=\"width : 150px; height: 125pt;\" /></div>\n  <div class=\"col-md-4\"><h3> {{product.name}}</h3></div>\n  <div class=\"col-md-3\"><h5> {{product.description}}</h5></div>\n  <div class=\"col-md-2\"><button class=\"btn btn-primary\" (click)=\"addToCart(product)\">\n        Add to Cart </button></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"row hidden-xs-down\">\n    <h1 class=\"shopping-head\"> Edit Product Quanity </h1>\n</div>\n\n<div class=\"input-group\">\n      <span class=\"input-group-btn\">\n             <button type=\"button\" class=\"btn btn-primary\"  data-type=\"minus\" \n              \t\t\t\t\t(click)=\"decrementQty()\">\n                \t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\"></span>\n           \t</button>\n       </span>\n          \t<input type=\"text\" style=\"width:50px\"\n          \t\t\t\t\t       class=\"form-control input-number\" min=\"1\" max=\"100\"/>\n          \t\t\t\t\t    \n          \t<button type=\"button\" class=\"btn btn-primary\"  data-type=\"plus\" \n          \t\t\t\t\t    (click)=\"incrementQty()\">\n                \t<span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n             <button type=\"button\" class=\"btn btn-primary pull right\"  style=\"margin-left:7pt;\" (click)=\"updateProduct()\">Add</button>\n\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Forgotten Password</h2>\n<p>Enter the email address you use to sign in to your Tesco.com account and we'll send you a link to reset your password.</p>\n<form (submit)=\"onResetLinkSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" \n\t\tplaceholder=\"ename@example.com\">\n\t</div>\n\t\n\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Get reset link\"/>\n</form>"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1> MEAN</h1>\n\t<p class=\"lead\"> Welcome..!! Built in angular 2,node js</p>\n\t<div>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register </a>\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\"> Login </a>\n\t</div>\n</div>\t\n\n<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<h3> Express Backend </h3>\n\t\t<p>later will give exlanation</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3> Angular-Cli </h3>\n\t\t<p>later will give exlanation</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3> JWT Tokens </h3>\n\t\t<p>later will give exlanation</p>\n\t</div>\n\n</div>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\"> \n\t<div class=\"form-group\" >\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<a [routerLink]=\"['/forgotten-password']\">\n\t\t<span>I've forgotten my password</span>\n\t</a>\t\n\t<br/>\n\t<br/>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n<div>\n\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href='#'>MEAN</a>\n\t\t\n\t    </div>\n\t    <div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav navbar-left\">\n      \t\t    <li><a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" \n      \t\t    \t[routerLink]=\"['/']\">Home </a></li>\n      \t\t</ul>\n      \t\t<ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n            [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/dashboard']\">Dashboard </a></li>\n              <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">Profile </a></li>\n              <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/shopping-cart']\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Shopping Cart<!-- <span class=\"badge\">{{session.cart.totalQty}}</span> --> </a></li> \n              <!-- <a routerLink=\"/order\" class=\"nav-item nav-link\" routerLinkActive=\"active\">\n            <i class=\"fa fa-shopping-cart\"></i> <span class=\"hidden-xs-down\"> Shopping Cart </span>\n        </a> -->\n      \t\t\t<li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/login']\">Login </a></li>\n      \t\t\t<li><a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n              [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register </a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout </a></li>\n      \t\t</ul>\n      \t</div>\n      \n \t</div>\n </nav>\n\n      <!-- <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Link</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n      </div> -->\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  payment works! {{amount.amount}}\n</p> -->\n<!-- Payment Amount need to be paid {{amount.amount}} Rs -->\n\n <form action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\">\n  <span class=\"payment-message\">{{message}}</span>\n\n  <div class=\"form-row\">\n    <label>\n      <span>Card Number</span>\n      <input [(ngModel)]=\"cardNumber\" name=\"card-number\" type=\"text\" size=\"20\" data-stripe=\"number\">\n    </label>\n  </div>\n  <br/>\n  <div class=\"form-row\">\n    <label>\n      <span>Expiration (MM/YY)</span>\n      <input [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" type=\"text\" size=\"2\" data-stripe=\"exp_month\">\n    </label>\n    <span> / </span>\n    <input [(ngModel)]=\"expiryYear\" name=\"expiry-year\" type=\"text\" size=\"2\" data-stripe=\"exp_year\">\n  </div>\n<br/>\n  <div class=\"form-row\">\n    <label>\n      <span>CVC</span>\n      <input [(ngModel)]=\"cvc\" name=\"cvc\" type=\"text\" size=\"4\" data-stripe=\"cvc\">\n    </label>\n  </div>\n  <br/>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit Payment\">\n</form>\n\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"> Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\"> Email : {{user.email}}</li>\n\n\t</ul>\n</div>"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\"> \n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>UserName</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Reset Password</h2>\n<form (submit)=\"onResetPassword()\"> \n\t<div class=\"form-group\">\n\t\t<label>New Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" \n\t\tplaceholder=\"New Password\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Confirm Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"confirm\" name=\"confirm\" class=\"form-control\" \n\t\tplaceholder=\"Confirm Password\">\n\t</div>\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Update Password\"/>\n</form>"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isDataLoading==true\">\n    <h4 class=\"card-header\">Loading...</h4>\n    <div class=\"card-block text-xs-center\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n    </div>\n</div>\n\n<div class=\"row hidden-xs-down\">\n    <h1 class=\"shopping-head\"> Your Items in Cart </h1>\n</div>\n\n<div *ngIf=\"isDataLoading==false && selectedproducts.length==0\" class=\"row center prod-name\" style=\"text-align:center\"> You have no item in your Bag. Please select products from the <a routerlink=\"/\" href=\"/dashboard\"> dashboard</a>.</div>\n\n<div class=\"row vspace\" *ngIf=\"isDataLoading==false && selectedproducts.length>0\">\n\n\t<div class=\"col-md-12 col-xs-12 header-border hidden-xs-down\">\n\t\t<div class=\" row\">\n            <div class=\"col-md-3\"> {{selectedproducts.length}} ITEMS</div>\n            <div class=\"col-md-9\">\n            \t<div class=\"col-md-6\"> </div>\n                <!-- <div class=\"col-md-2 cell-size\"> SIZE </div> -->\n                <div class=\"col-md-3 cell-qty\"> QTY </div>\n                <div class=\"col-md-3\"> PRICE </div>\n            </div>\n         </div> \n\t</div>\n\t<!-- <div class=\"col-xs-12 header-border-alt hidden-md-up\">\n        <div class=\"row\">\n            <div class=\"col-xs-9 bold-text\" style=\"text-align:left;padding-left:36px;font-size:18px;\">\n                Your Items in Cart\n            </div>\n            <div class=\"col-xs-3\" style=\"text-align:right\"> {{selectedproducts.length}} ITEMS</div>\n        </div>\n    \n\t</div> -->\n\t<div class=\"col-md-12 col-xs-12 rowCover\" *ngFor=\"let product of selectedproducts; let index=index; let odd=odd; let even=even;\" [ngClass]=\"{ odd: odd, even: even }\">\n\t\t<div class=\"row rowBorder hidden-xs-down\" *ngIf=\"product.info\">\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<img src=\"{{product.info.image}}\" style=\"width : 150px; height: 125pt;\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 prod-name\">  {{product.info.name | uppercase}} </div>\n                        <div class=\"col-md-4 prod-name\">  {{product.qty }} </div>\n                        <!-- <div class=\"col-md-2 prod-size\"> {{product.p_sizecode | uppercase}} </div> -->\n                        <!-- prod-qty -->\n                        <!-- <div class=\"col-md-4\">\n                        \t<div class=\"input-group\" >\n          \t\t\t\t\t\t<span class=\"input-group-btn\">\n              \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\"  data-type=\"minus\" \n              \t\t\t\t\t(click)=\"decrementQty(product)\">\n                \t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\"></span>\n              \t\t\t\t\t</button>\n          \t\t\t\t\t\t</span>\n          \t\t\t\t\t\t\t<input type=\"text\" [value]=\"product.qty\" style=\"width:50px\"\n          \t\t\t\t\t       class=\"form-control input-number\" min=\"1\" max=\"100\">\n          \t\t\t\t\t    \n          \t\t\t\t\t    <button type=\"button\" class=\"btn btn-primary\"  data-type=\"plus\" \n          \t\t\t\t\t    (click)=\"incrementQty(product)\">\n                \t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n              \t\t\t\t\t</button>\n              \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull right\"  style=\"margin-left:7pt;\" (click)=\"updateProduct(product)\">Add</button>\n\n      \t\t\t\t\t\t</div>\n                        </div> -->\n\n                        <div class=\"col-md-2 price-text\"> \n                        \t<span class=\"price-value\">{{product.info.price}}</span>\n              \t\t\t</div>\n              \t\t\t\n              \t\t\t<!-- <div class=\"col-md-1\">\n              \t\t\t\t<button type=\"button\" (click)=\"deleteProduct(product)\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n              \t\t\t</div> -->\n                    </div>\n                \n                    \n                </div>\n\n            </div>\n            <div class=\"row\">\n            <!-- <a [routerLinkActive]=\"['active']\" \n                [routerLink]=\"['/edit-product',product.info._id]\" (click)=\"modal.open();\">Edit</a> -->\n            <a (click)=\"modal.open();loadProduct(product)\">Edit</a>\n                <!-- <a  (click)=\"modal.open();\">EditP</a> -->\n                | <a  (click)=\"deleteProduct(product)\">Remove</a> \n            </div>        \n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"row\" *ngIf=\"isDataLoading==false && selectedproducts.length>0\">\n\t<div class=\"row price-row\">\n            <div class=\"col-md-7 col-xs-7 bold-text\"> SUBTOTAL </div>\n            <div class=\"col-md-5 col-xs-5  lbl-amount price-text\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.Total}}</span>\n            </div>\n    </div>\n   <!--  <div class=\"row price-row-2\" *ngIf=\"amount.enableDiscount\">\n            <div class=\"col-md-7 bold-text col-xs-7\"> PROMOTION CODE <b>JF10</b> APPLIED </div>\n            <div class=\"col-md-5 col-xs-5 lbl-amount price-text\">\n                <span> - </span>\n                <span class=\"prod-currency\">$</span>\n                <span class=\"price-value price-margin\">{{amount.discount}}</span>\n            </div>\n    </div> -->\n    <div class=\"row price-row-2\">\n            <div class=\"col-md-7 col-xs-7\">\n                <span class=\"bold-text\">Delivery Charge </span><br />\n                <span class=\"light-text\" *ngIf=\"amount.enableFreeDelivery\">\n                    You qualify for free shipping <br />\n                    because your order is over 2000 Rs\n                </span>\n            </div>\n            <div class=\"col-md-5 col-xs-5 lbl-amount price-text\" *ngIf=\"!amount.enableFreeDelivery\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.shippingPrice}}</span>\n            </div>\n            <div class=\"col-md-5 col-xs-5 free\" *ngIf=\"amount.enableFreeDelivery\">\n                <span class=\"bold-text\">FREE</span>\n            </div>\n    </div>\n    <div class=\"row price-row-3\">\n            <div class=\"col-md-7 col-xs-7\">\n                <span class=\"bolder-text\">Total Amount to Pay </span> <br />\n            </div>\n            <div class=\"col-md-5 col-xs-5 lbl-amount price-text-bold\">\n                <span class=\"prod-currency\">Rs </span>\n                <span class=\"price-value price-margin\">{{amount.amount}}</span>\n            </div>\n    </div> \n\t<!-- <div class=\"col-md-5 col-xs-5 lbl-amount price-text-bold\">\n                <span class=\"prod-currency\">$</span>\n                <span class=\"price-value price-margin\">{{amount.amount}}</span>\n    </div> -->\n\n    <div class=\"row price-row-2 row-swap\">\n        <div class=\"col-md-10 continue-shopping col-xs-12 centered top-margin\"> \n        \t<a [routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\" > CONTINUE SHOPPING</a> </div>\n        <div class=\"col-md-2 col-xs-12 centered\"> \n        \t<button class=\"btn-primary btn broad\" (click)=\"onCheckout(amount.amount)\"> CHECKOUT</button> \n        </div>\n\t</div>\n\n</div>\n\n\n\n\n<modal #modal>\n    <modal-header></modal-header>\n    <modal-body>\n\n        <table class=\"modal-table\">\n            <tr>\n                <td>                        \n                <div class=\"modal-prod-name\"> \n                    <span class=\"modal-name\">{{ name | uppercase }}\n                </span>\n                </div>\n                           \n                <div class=\"modal-price-text\">\n                    <span class=\"modal-prod-currency\"> Rs</span> \n                    <span class=\"modal-price-value\"> {{ price }}</span> \n                </div>\n            \n                <div class=\"modal-center\">\n                    Quantity:\n                        <select [(ngModel)]=\"qty\">\n                            <option *ngFor=\"let qty of [1,2,3,4,5]\" value={{qty}}>{{qty}}</option>\n                        </select>\n                </div>\n                <div class=\"modal-center\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"modal.close();updateProduct(product)\">Edit</button>\n                </div>\n                            \n                         <!-- [disabled]=\"!isEditing\"       \n -->\n                </td>\n            </tr>\n        </table>\n        \n    </modal-body>\n\n\n</modal>\n\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ })

},[757]);
//# sourceMappingURL=main.bundle.map