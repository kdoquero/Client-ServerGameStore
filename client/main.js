(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accessbar/accessbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/accessbar/accessbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-icons fixed-top\">\n<ul>\n    <li><i class=\"fas fa-shopping-basket\"></i></li>\n</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/accessbar/accessbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/accessbar/accessbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-icons {\n  display: flex;\n  background-color: #463939;\n  width: 100vw;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/accessbar/accessbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accessbar/accessbar.component.ts ***!
  \**************************************************/
/*! exports provided: AccessbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessbarComponent", function() { return AccessbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessbarComponent = /** @class */ (function () {
    function AccessbarComponent() {
    }
    AccessbarComponent.prototype.ngOnInit = function () {
    };
    AccessbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accessbar',
            template: __webpack_require__(/*! ./accessbar.component.html */ "./src/app/accessbar/accessbar.component.html"),
            styles: [__webpack_require__(/*! ./accessbar.component.scss */ "./src/app/accessbar/accessbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessbarComponent);
    return AccessbarComponent;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <form method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img [src]=\"client.avatar\" alt=\"placeholder\" />\n          <div class=\"file btn btn-lg btn-primary\">\n            <p class=\"photo\">Change Photo</p>\n            <input class=\"input-file\" type=\"file\" name=\"file\" (change)=\"uploadAvatar($event)\" accept=\"image/*\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h5>\n            {{client.name}}\n          </h5>\n          <h6>\n            GamerName:\n          </h6>\n          <p class=\"proile-rating\">RANKINGS : <span>20330</span></p>\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\">Timeline</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <input type=\"submit\" class=\"profile-edit-btn\" name=\"btnAddMore\" value=\"Edit Profile\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-work\">\n          <p>Links</p>\n          <a href=\"\">Favorites</a><br />\n          <a href=\"\">Wishlist</a><br />\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{client.name}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{client.email}}</p>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Experience</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Expert</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.photo {\n  pointer-events: none; }\n\n.input-file {\n  height: 100%;\n  width: 100%; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/game-store-api.service */ "./src/app/services/game-store-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(gameStoreService) {
        this.gameStoreService = gameStoreService;
        this.client = {
            name: "",
            id: 0,
            email: "",
            avatar: "../../assets/images/placeholder.png"
        };
        this.imageSrc = "../../assets/images/placeholder.png";
        if (this.gameStoreService.client) {
            this.client = this.gameStoreService.client;
        }
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
    };
    AccountComponent.prototype.uploadAvatar = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AccountComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.client.avatar = this.imageSrc;
        console.log(this.client);
        this.gameStoreService.updateClient(this.client).subscribe(function (value) {
            console.log(value);
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_game_store_api_service__WEBPACK_IMPORTED_MODULE_1__["GameStoreApiService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-accessbar></app-accessbar>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-accessbar {\n  height: 10%; }\n\napp-navbar {\n  height: 20%; }\n\napp-homepage {\n  height: 70%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CoderDeployer-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _accessbar_accessbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessbar/accessbar.component */ "./src/app/accessbar/accessbar.component.ts");
/* harmony import */ var _last_released_last_released_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./last-released/last-released.component */ "./src/app/last-released/last-released.component.ts");
/* harmony import */ var _card_group_card_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-group/card-group.component */ "./src/app/card-group/card-group.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _rss_reader_rss_reader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rss-reader/rss-reader.component */ "./src/app/rss-reader/rss-reader.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./platform/platform.component */ "./src/app/platform/platform.component.ts");
/* harmony import */ var _platform1_platform1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./platform1/platform1.component */ "./src/app/platform1/platform1.component.ts");
/* harmony import */ var _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./platform2/platform2.component */ "./src/app/platform2/platform2.component.ts");
/* harmony import */ var _platform3_platform3_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./platform3/platform3.component */ "./src/app/platform3/platform3.component.ts");
/* harmony import */ var _platform4_platform4_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./platform4/platform4.component */ "./src/app/platform4/platform4.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _card_group_platform_card_group_platform_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./card-group-platform/card-group-platform.component */ "./src/app/card-group-platform/card-group-platform.component.ts");
/* harmony import */ var _stripe_payement_stripe_payement_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stripe-payement/stripe-payement.component */ "./src/app/stripe-payement/stripe-payement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'register', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"] },
    { path: 'details/:id/:name', component: _details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"] },
    { path: 'platform/ps4', component: _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__["Platform2Component"] },
    { path: 'platform/XboxOne', component: _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__["Platform2Component"] },
    { path: 'platform/Psvita', component: _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__["Platform2Component"] },
    { path: 'platform/NSwitch', component: _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__["Platform2Component"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"] },
    { path: 'cart/:id', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"] },
    { path: 'account/:id', component: _account_account_component__WEBPACK_IMPORTED_MODULE_24__["AccountComponent"] },
    { path: 'payment', component: _stripe_payement_stripe_payement_component__WEBPACK_IMPORTED_MODULE_26__["StripePayementComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _accessbar_accessbar_component__WEBPACK_IMPORTED_MODULE_7__["AccessbarComponent"],
                _last_released_last_released_component__WEBPACK_IMPORTED_MODULE_8__["LastReleasedComponent"],
                _card_group_card_group_component__WEBPACK_IMPORTED_MODULE_9__["CardGroupComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _rss_reader_rss_reader_component__WEBPACK_IMPORTED_MODULE_11__["RssReaderComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"],
                _platform_platform_component__WEBPACK_IMPORTED_MODULE_17__["PlatformComponent"],
                _platform1_platform1_component__WEBPACK_IMPORTED_MODULE_18__["Platform1Component"],
                _platform2_platform2_component__WEBPACK_IMPORTED_MODULE_19__["Platform2Component"],
                _platform3_platform3_component__WEBPACK_IMPORTED_MODULE_20__["Platform3Component"],
                _platform4_platform4_component__WEBPACK_IMPORTED_MODULE_21__["Platform4Component"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_24__["AccountComponent"],
                _card_group_platform_card_group_platform_component__WEBPACK_IMPORTED_MODULE_25__["CardGroupPlatformComponent"],
                _stripe_payement_stripe_payement_component__WEBPACK_IMPORTED_MODULE_26__["StripePayementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_12__["UiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-group-platform/card-group-platform.component.html":
/*!************************************************************************!*\
  !*** ./src/app/card-group-platform/card-group-platform.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\n  <app-card class=\"card\" *ngFor=\"let game of lastGamesRandom; let i=index\" [game]=\"game\"></app-card>\n</div>"

/***/ }),

/***/ "./src/app/card-group-platform/card-group-platform.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/card-group-platform/card-group-platform.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-card {\n  margin: 1.2em; }\n"

/***/ }),

/***/ "./src/app/card-group-platform/card-group-platform.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/card-group-platform/card-group-platform.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardGroupPlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroupPlatformComponent", function() { return CardGroupPlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardGroupPlatformComponent = /** @class */ (function () {
    function CardGroupPlatformComponent(GameDataService, router) {
        this.GameDataService = GameDataService;
        this.router = router;
        this.idPlatform = 0;
    }
    CardGroupPlatformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GameDataService.gamePlatform.subscribe(function (value) {
            _this.lastGamesRandom = _this.shuffle(value);
            _this.lastGamesRandom = _this.lastGamesRandom.slice(Math.max(value.length - 3, 1));
            console.log(_this.lastGamesRandom);
        });
    };
    CardGroupPlatformComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    CardGroupPlatformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-group-platform',
            template: __webpack_require__(/*! ./card-group-platform.component.html */ "./src/app/card-group-platform/card-group-platform.component.html"),
            styles: [__webpack_require__(/*! ./card-group-platform.component.scss */ "./src/app/card-group-platform/card-group-platform.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CardGroupPlatformComponent);
    return CardGroupPlatformComponent;
}());



/***/ }),

/***/ "./src/app/card-group/card-group.component.html":
/*!******************************************************!*\
  !*** ./src/app/card-group/card-group.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\n  <app-card class=\"card\"  *ngFor=\"let game of lastGamesRandom; let i=index\" [game]=\"game\" ></app-card>\n</div>\n"

/***/ }),

/***/ "./src/app/card-group/card-group.component.scss":
/*!******************************************************!*\
  !*** ./src/app/card-group/card-group.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-card {\n  margin: 1.2em; }\n"

/***/ }),

/***/ "./src/app/card-group/card-group.component.ts":
/*!****************************************************!*\
  !*** ./src/app/card-group/card-group.component.ts ***!
  \****************************************************/
/*! exports provided: CardGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroupComponent", function() { return CardGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardGroupComponent = /** @class */ (function () {
    function CardGroupComponent(GamesData) {
        this.GamesData = GamesData;
    }
    CardGroupComponent.prototype.ngOnInit = function () {
        this.lastGamesRandom = this.shuffle(this.GamesData.games);
        this.lastGamesRandom = this.lastGamesRandom.slice(Math.max(this.GamesData.games.length - 3, 1));
    };
    CardGroupComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    CardGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-group',
            template: __webpack_require__(/*! ./card-group.component.html */ "./src/app/card-group/card-group.component.html"),
            styles: [__webpack_require__(/*! ./card-group.component.scss */ "./src/app/card-group/card-group.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"]])
    ], CardGroupComponent);
    return CardGroupComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"card-img-top\" [src]=\"game.image.original_url\" alt=\"Card image cap\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\">{{game.name}}</h5>\n  <p>{{game.deck}}</p>\n</div>\n<div class=\"card-footer\">\n  <div>\n    <p>\n      Price: {{this.price}} €\n    </p>\n  </div>\n  <div>\n   \n    <div>\n        <a (click)=\"goToDetails();\" class=\"btn btn-primary\">Details</a>\n      <button (click)=\"add()\" class=\"btn btn-primary\">add to Card</button>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 36%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.btn-primary {\n  color: black;\n  background-color: #ffcf0f;\n  border-color: #000000;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
/* harmony import */ var _services_cart_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart-data.service */ "./src/app/services/cart-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = /** @class */ (function () {
    function CardComponent(router, DataService, CartService) {
        this.router = router;
        this.DataService = DataService;
        this.CartService = CartService;
        this.price = this.CartService.getRandomInt(2500, 8000) / 100;
    }
    CardComponent.prototype.add = function () {
        this.game.price = this.price;
        this.CartService.addProduct(this.game, this.price);
    };
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.ngAfterViewInit = function () {
        this.game.qty = 0;
    };
    CardComponent.prototype.goToDetails = function () {
        this.game.price = this.price;
        this.DataService.game = this.game;
        this.router.navigate(['details', this.game.id, this.game.name]);
        this.DataService.price = this.price;
    };
    CardComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "game", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_games_data_service__WEBPACK_IMPORTED_MODULE_2__["GamesDataService"], _services_cart_data_service__WEBPACK_IMPORTED_MODULE_3__["CartDataService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container background\">\n    <table id=\"cart\" class=\"table table-hover table-condensed\">\n              <thead>\n              <tr>\n                <th style=\"width:50%\">Product</th>\n                <th style=\"width:10%\">Price</th>\n                <th style=\"width:8%\">Quantity</th>\n                <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n                <th style=\"width:10%\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"description\" *ngFor=\"let game of games;\">\n                <td data-th=\"Product\">\n                  <div class=\"row\">\n                    <div class=\" imgContainer col-sm-2 hidden-xs\"><img [src]=\"game.image.super_url\" alt=\"...\" class=\" imgCart img-responsive\"/></div>\n                    <div class=\"col-sm-10\">\n                      <h4 class=\"nomargin\">{{game.name}}</h4>\n                      <p>{{(game.deck && game.deck.length>128)? (game.deck | slice:0:128)+'..':(game.deck)}}</p>\n                    </div>\n                  </div>\n                </td>\n                <td data-th=\"Price\">{{game.price}}</td>\n                <td data-th=\"Quantity\">\n                  <input type=\"number\" class=\"form-control text-center\" [value]=\"game.qty\">\n                </td>\n                <td data-th=\"Subtotal\" class=\"text-center\">{{game.price * game.qty | number: '1.2-2'}}€</td>\n                <td class=\"actions\" data-th=\"\">\n                  <!--<button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>>-->\n                  <button class=\"btn btn-danger btn-sm\" (click)=\"deleteGame(game.id)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr class=\"visible-xs\">\n                <td class=\"text-center\"><strong>Total 1.99</strong></td>\n              </tr>\n              <tr>\n                <td><a href=\"#\" class=\"btn btn-light\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n                <td colspan=\"2\" class=\"hidden-xs\"></td>\n                <td class=\"hidden-xs text-center\"><strong>{{total | number: '1.2-2'}}€</strong></td>\n                <td><a  (click)=\"deleteCart()\" class=\"btn btn-danger btn-block\">Delete Cart <i class=\"fa fa-angle-right\"></i></a></td>\n                <td><a  (click)=\"addproduct()\" class=\"btn btn-success btn-block\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n              </tr>\n            </tfoot>\n          </table>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td, .table > tfoot > tr > td {\n  vertical-align: middle; }\n\n@media screen and (max-width: 600px) {\n  table#cart tbody td .form-control {\n    width: 20%;\n    display: inline !important; }\n  .actions .btn {\n    width: 36%;\n    margin: 1.5em 0; }\n  .actions .btn-info {\n    float: left; }\n  .actions .btn-danger {\n    float: right; }\n  table#cart thead {\n    display: none; }\n  table#cart tbody td {\n    display: block;\n    padding: .6rem;\n    min-width: 320px; }\n  table#cart tbody tr td:first-child {\n    background: #333;\n    color: #fff; }\n  table#cart tbody td:before {\n    content: attr(data-th);\n    font-weight: bold;\n    display: inline-block;\n    width: 8rem; }\n  table#cart tfoot td {\n    display: block; }\n  table#cart tfoot td .btn {\n    display: block; } }\n\n.imgCart {\n  height: 105px;\n  margin: 5px; }\n\n.imgContainer {\n  margin: 5px; }\n\n.description {\n  background-color: rgba(70, 57, 57, 0.9);\n  border: 2px solid;\n  padding: 8px;\n  border-radius: 7px;\n  color: #fff; }\n\n.description:hover {\n  background-color: rgba(70, 57, 57, 0.9);\n  border: 2px solid;\n  padding: 8px;\n  border-radius: 7px;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart-data.service */ "./src/app/services/cart-data.service.ts");
/* harmony import */ var _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game-store-api.service */ "./src/app/services/game-store-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(CartService, gameStoreService, Router) {
        this.CartService = CartService;
        this.gameStoreService = gameStoreService;
        this.Router = Router;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var count = function (idGame) {
            return _this.CartService.cartItems.reduce(function (a, b) {
                return Object.assign(a, (_a = {}, _a[b.id] = (a[b.id] || 0) + 1, _a));
                var _a;
            }, {});
        };
        var duplicates = function (dict) {
            return Object.keys(dict).filter(function (a) { return dict[a] > 1; });
        };
        var dup = duplicates(count(this.CartService.cartItems));
        this.CartService.cartItems.forEach(function (item) {
            dup.forEach(function (dupli) {
                if (parseInt(dupli) === item.id) {
                    item.qty++;
                }
                else {
                    item.qty = 1;
                }
            });
        });
        console.log(this.CartService.cartItems);
        this.gameStoreService.productList.subscribe(function (products) {
            _this.CartService.cartItems = products;
            var uniqueArray = products.filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            });
            console.log(uniqueArray);
            _this.games = uniqueArray;
        });
        this.CartService.isTotalPrice.subscribe(function (total) {
            _this.total = total;
        });
    };
    CartComponent.prototype.removeDuplicates = function (originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    };
    CartComponent.prototype.addproduct = function () {
        var _this = this;
        if (this.gameStoreService.client) {
            console.log(this.games);
            var addGame = this.games.filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            });
            console.log(addGame);
            addGame.forEach(function (game) {
                var newGame = {
                    idProduct: game.id,
                    image: game.image,
                    name: game.name,
                    price: game.price,
                    qty: game.qty,
                    deck: game.deck
                };
                _this.gameStoreService.addProduct(_this.CartService.cart.id, newGame).subscribe(function (value) {
                    console.log(value);
                });
            });
            this.Router.navigate(["payment"]);
        }
        else {
            this.Router.navigate(["payment"]);
            console.log("not connected");
            localStorage.setItem('itemsGameStore', JSON.stringify(this.games));
        }
    };
    CartComponent.prototype.deleteGame = function (id) {
        for (var i = 0; i < this.games.length; i++) {
            if (this.games[i].id == id) {
                this.games.splice(i, 1);
                break;
            }
        }
    };
    CartComponent.prototype.deleteCart = function () {
        var _this = this;
        this.gameStoreService.deleteCart(this.CartService.cart.id).subscribe(function (value) {
            _this.CartService.cartItems = [];
            _this.gameStoreService.setProducts([]);
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"], _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_2__["GameStoreApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"card\">\n\t\t<div class=\"container-fliud\">\n\t\t\t<div class=\"wrapper row\">\n\t\t\t\t<div class=\"preview col-md-6\">\n\n\t\t\t\t\t<div class=\"preview-pic tab-content\">\n\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"pic-0\"><img [src]=\"game.image.super_url\" /></div>\n\t\t\t\t\t\t<div class=\"tab-pane \" *ngFor=\"let image of game.images | slice:0:5; let i=index\" [attr.id]=\"'pic-'+i\"><img [src]=\"image.super_url\"/></div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"preview-thumbnail nav nav-tabs\">\n\t\t\t\t\t\t<li class=\"active\"><a data-target=\"#pic-0\" data-toggle=\"tab\"><img [src]=\"game.image.super_url\" /></a></li>\n\t\t\t\t\t\t<li  *ngFor=\"let image of game.images | slice:0:5; let i=index\" ><a [attr.data-target]=\"'#pic-'+i\" data-toggle=\"tab\"><img [src]=\"image.super_url\" /></a></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"details col-md-6\">\n\t\t\t\t\t<h3 class=\"product-title\">{{game.name}}</h3>\n\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"review-no\">{{game.number_of_user_reviews}} review</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"product-description\">{{game.deck}}</p>\n\t\t\t\t\t<h4 class=\"price\">current price: <span>{{game.price}} €</span></h4>\n\t\t\t\t\t<div class=\"action\">\n\t\t\t\t\t\t<button class=\"add-to-cart btn btn-default\" type=\"button\" (click)=\"add()\">add to cart</button>\n\t\t\t\t\t\t<button class=\"like btn btn-default\" type=\"button\"><span class=\"fa fa-heart\"></span></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  margin-top: 50px;\n  background: #eee;\n  padding: 3em;\n  min-width: 425px;\n  min-height: 425px;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title, .price, .sizes, .colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked, .price span {\n  color: #ff9f1a; }\n\n.product-title, .rating, .product-description, .price, .vote, .sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart, .like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover, .like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.like {\n  margin-left: 10px; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.orange {\n  background: #ff9f1a; }\n\n.green {\n  background: #85ad00; }\n\n.blue {\n  background: #0076ad; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/giant-bomb-api.service */ "./src/app/services/giant-bomb-api.service.ts");
/* harmony import */ var _services_cart_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart-data.service */ "./src/app/services/cart-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(DataService, route, GiantBombApi, cartService) {
        var _this = this;
        this.DataService = DataService;
        this.route = route;
        this.GiantBombApi = GiantBombApi;
        this.cartService = cartService;
        this.game = {
            aliases: "",
            api_detail_url: "",
            date_added: new Date(),
            date_last_updated: new Date(),
            deck: "",
            description: "",
            expected_release_day: "",
            expected_release_month: "",
            expected_release_quarter: "",
            expected_release_year: "",
            guid: "",
            id: 0,
            image: {},
            image_tags: [],
            images: [],
            name: "",
            number_of_user_reviews: 0,
            original_game_rating: "",
            original_release_date: new Date(),
            platforms: [],
            site_details_url: "",
            videos: []
        };
        if (this.DataService.game) {
            this.game = this.DataService.game;
        }
        else {
            this.GiantBombApi.getById(this.route.snapshot.params.id).subscribe(function (game) {
                _this.game = game.results;
            });
        }
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.add = function () {
        this.game.qty++;
        this.cartService.addProduct(this.game, this.game.price);
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_3__["GiantBombApiService"], _services_cart_data_service__WEBPACK_IMPORTED_MODULE_4__["CartDataService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/entities/password-validation.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/password-validation.ts ***!
  \*************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            //console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-video></app-video>\n  <app-last-released></app-last-released>\n</section>\n<section>\n  <app-card-group></app-card-group>\n  <app-card-group></app-card-group>\n  <app-card-group></app-card-group>\n\n</section>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  height: 100%;\n  background-image: url('wallhaven-572048.jpg');\n  background-position: center;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/giant-bomb-api.service */ "./src/app/services/giant-bomb-api.service.ts");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(giantBombApi, gamesData) {
        this.giantBombApi = giantBombApi;
        this.gamesData = gamesData;
        this.games = [];
        this.total = 0;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.games = this.gamesData.games;
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_1__["GiantBombApiService"], _services_games_data_service__WEBPACK_IMPORTED_MODULE_2__["GamesDataService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/last-released/last-released.component.html":
/*!************************************************************!*\
  !*** ./src/app/last-released/last-released.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <h3>Last Released</h3>\n  <li class=\"list-group-item\" *ngFor=\"let game of lastReleased\">{{game.name}} |\n      {{game.expected_release_month}} / {{game.expected_release_year}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/last-released/last-released.component.scss":
/*!************************************************************!*\
  !*** ./src/app/last-released/last-released.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  width: 34%; }\n"

/***/ }),

/***/ "./src/app/last-released/last-released.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/last-released/last-released.component.ts ***!
  \**********************************************************/
/*! exports provided: LastReleasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastReleasedComponent", function() { return LastReleasedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LastReleasedComponent = /** @class */ (function () {
    function LastReleasedComponent(gamesData) {
        this.gamesData = gamesData;
    }
    LastReleasedComponent.prototype.ngOnInit = function () {
        this.lastReleased = this.gamesData.lastGames;
    };
    LastReleasedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-last-released',
            template: __webpack_require__(/*! ./last-released.component.html */ "./src/app/last-released/last-released.component.html"),
            styles: [__webpack_require__(/*! ./last-released.component.scss */ "./src/app/last-released/last-released.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"]])
    ], LastReleasedComponent);
    return LastReleasedComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-light\">\n    <div>\n      <img id=\"logo\" src=\"../../assets/images/90367_2303269_199577_thumbnail.jpg\" alt=\"logo\">\n    </div>\n    <a class=\"navbar-brand\" href=\"#\">GameShop</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav nav-object-1\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/platform/ps4\">Playstation 4</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/platform/XboxOne\">Xbox One</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/platform/NSwitch\">Nintendo Switch</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Plus\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Nintendo Ds</a>\n            <a class=\"dropdown-item\" href=\"#\">PS Vita</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\" nav-item dropdown\">\n          <a *ngIf=\"!isLogged\" href=\"#\" class=\" nav-link login dropdown-toggle\" data-toggle=\"dropdown\"><b>Login</b> <span class=\"caret\"></span></a>\n          <a *ngIf=\"isLogged\" href=\"#\" (click)=\"goToAccount()\" class=\" nav-link login dropdown-toggle\" data-toggle=\"dropdown\"><b>My\n              Account</b> <span class=\"caret\"></span></a>\n          <ul id=\"login-dp\" class=\"dropdown-menu dropdown-menu-right\">\n            <li *ngIf=\"isLogged\">\n              <div class=\"bottom text-center\">\n                <h4>Hello {{name}}</h4>\n                <div class=\"form-group\">\n                  <button (click)=\"logOut()\" type=\"button\" class=\"btn btn-primary btn-block\">Log out</button>\n                </div>\n              </div>\n            </li>\n            <li *ngIf=\"!isLogged\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  Login via Email\n                  <form [formGroup]=\"formSign\" class=\"form\" role=\"form\" method=\"post\" (submit)=\"onSubmit()\"\n                    accept-charset=\"UTF-8\" id=\"login-nav\">\n                    <div class=\"form-group\">\n                      <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n                      <input type=\"email\" name=\"email\" formControlName=\"email\" [formGroup]=\"formSign\" class=\"form-control\"\n                        id=\"exampleInputEmail2\" placeholder=\"Email address\" required>\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n                      <input type=\"password\" name=\"password\" formControlName=\"password\" [formGroup]=\"formSign\" class=\"form-control\"\n                        id=\"exampleInputPassword2\" placeholder=\"Password\" required>\n                      <div class=\"help-block text-right\"><a href=\"\">Forget the password ?</a></div>\n                    </div>\n                    <div class=\"form-group\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\n                    </div>\n                    <div class=\"checkbox\">\n                      <label>\n                        <input (change)=\"checkOnline($event)\" type=\"checkbox\"> keep me logged-in\n                      </label>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"bottom text-center\">\n                  New here ? <a routerLink=\"/register\"><b>Join Us</b></a>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right nav-object-2\">\n      <li class=\"cart\">\n        <a routerLink=\"/cart\">\n          <span class=\"fa-stack fa-2x has-badge\" [attr.data-count]=\"totalItems\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n\n          </span>\n        </a>\n      </li>\n\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: white;\n  margin-top: 35px; }\n\n#logo {\n  height: 50px;\n  width: 50px; }\n\n.navbar-nav {\n  width: 85%;\n  justify-content: flex-end; }\n\n.nav-object-1 {\n  width: 100%; }\n\n.nav-object-2 {\n  width: 25%; }\n\n#login-dp {\n  min-width: 250px;\n  padding: 14px 14px 0;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.8); }\n\n#login-dp .help-block {\n  font-size: 12px; }\n\n#login-dp .bottom {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-top: 1px solid #ddd;\n  clear: both;\n  padding: 14px; }\n\n#login-dp .social-buttons {\n  margin: 12px 0; }\n\n#login-dp .social-buttons a {\n  width: 49%; }\n\n#login-dp .form-group {\n  margin-bottom: 10px; }\n\n.btn-fb {\n  color: #fff;\n  background-color: #3b5998; }\n\n.btn-fb:hover {\n  color: #fff;\n  background-color: #496ebc; }\n\n.btn-tw {\n  color: #fff;\n  background-color: #55acee; }\n\n.btn-tw:hover {\n  color: #fff;\n  background-color: #59b5fa; }\n\n.bottom {\n  width: 100%; }\n\n@media (max-width: 768px) {\n  #login-dp {\n    background-color: inherit;\n    color: #fff; }\n  #login-dp .bottom {\n    background-color: inherit;\n    border-top: 0 none; } }\n\n.navbar-text {\n  margin: 0 1.2em;\n  padding: 0; }\n\n.cart {\n  height: 30px;\n  width: 30px;\n  margin-right: 50px; }\n\n.cart {\n  margin-right: 50px; }\n\n.fa-stack[data-count]:after {\n  position: absolute;\n  right: 0%;\n  top: 0%;\n  content: attr(data-count);\n  font-size: 40%;\n  padding: .6em;\n  border-radius: 999px;\n  line-height: .75em;\n  color: black;\n  color: black;\n  text-align: center;\n  min-width: 2em;\n  font-weight: bold;\n  background: yellow;\n  border-style: solid; }\n\n.login b {\n  color: blue; }\n\n.fa-circle {\n  color: black; }\n\n.fa-2x {\n  font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart-data.service */ "./src/app/services/cart-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game-store-api.service */ "./src/app/services/game-store-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(fb, cartService, Router, gameStoreApi) {
        var _this = this;
        this.fb = fb;
        this.cartService = cartService;
        this.Router = Router;
        this.gameStoreApi = gameStoreApi;
        this.totalItems = 0;
        this.total = 0;
        this.isLogged = false;
        this.name = "";
        this.connected = false;
        this.formSign = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]]
        });
        this.cartService.isTotalItem.subscribe(function (value) {
            _this.totalItems = value;
        });
        this.cartService.isTotalPrice.subscribe(function (value) {
            _this.total = value;
        });
        this.gameStoreApi.isloggedValidator.subscribe(function (value) {
            _this.isLogged = value;
        });
        if (this.gameStoreApi.getTokenLogged()) {
            this.login(this.gameStoreApi.getTokenLogged()['userId']);
        }
    }
    ;
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goToCart = function () {
        if (this.gameStoreApi.isLogged) {
            this.Router.navigate(["cart", this.gameStoreApi.client.id]);
        }
        else {
            this.Router.navigate(["cart"]);
        }
    };
    NavbarComponent.prototype.login = function (id) {
        var _this = this;
        this.gameStoreApi.getCart(id).subscribe(function (value) {
            _this.gameStoreApi.getCartWithProducts(value["id"]).subscribe(function (cart) {
                _this.cartService.cart = cart;
                _this.gameStoreApi.client = cart.client;
                _this.name = cart.client.name;
                _this.gameStoreApi.setLogged(true);
                _this.gameStoreApi.isLogged = true;
                _this.cartService.cartItems = cart.products;
                _this.gameStoreApi.setProducts(cart.products);
                console.log(cart.products);
            });
        });
    };
    NavbarComponent.prototype.logOut = function () {
        var _this = this;
        this.gameStoreApi.logout().subscribe(function (value) {
            _this.gameStoreApi.isLogged = false;
            _this.gameStoreApi.setLogged(false);
            _this.cartService.cartItems = [];
            _this.gameStoreApi.setProducts([]);
            _this.Router.navigate(['home']);
        });
    };
    NavbarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.gameStoreApi.login(this.formSign.value).subscribe(function (client) {
            if (_this.connected === true) {
                _this.gameStoreApi.setToken(client);
            }
            else {
                _this.gameStoreApi.setTokenNoRemeber(client);
            }
            _this.login(client['userId']);
        });
    };
    NavbarComponent.prototype.checkOnline = function (e) {
        if (e.target.checked) {
            this.connected = true;
        }
        else {
            this.connected = false;
        }
    };
    NavbarComponent.prototype.goToAccount = function () {
        this.Router.navigate(["account", this.gameStoreApi.client.id]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")],
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_3__["GameStoreApiService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/platform/platform.component.html":
/*!**************************************************!*\
  !*** ./src/app/platform/platform.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Playstation 4\n</h1>\n"

/***/ }),

/***/ "./src/app/platform/platform.component.scss":
/*!**************************************************!*\
  !*** ./src/app/platform/platform.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/platform.component.ts":
/*!************************************************!*\
  !*** ./src/app/platform/platform.component.ts ***!
  \************************************************/
/*! exports provided: PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformComponent", function() { return PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlatformComponent = /** @class */ (function () {
    function PlatformComponent() {
    }
    PlatformComponent.prototype.ngOnInit = function () {
    };
    PlatformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform',
            template: __webpack_require__(/*! ./platform.component.html */ "./src/app/platform/platform.component.html"),
            styles: [__webpack_require__(/*! ./platform.component.scss */ "./src/app/platform/platform.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlatformComponent);
    return PlatformComponent;
}());



/***/ }),

/***/ "./src/app/platform1/platform1.component.html":
/*!****************************************************!*\
  !*** ./src/app/platform1/platform1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"background\">\n  <div>\n    <h2 class=\"textAlign\">Playstation 4</h2>\n  </div>\n  <app-card-group></app-card-group>\n  <app-card-group></app-card-group>\n  <app-card-group></app-card-group>\n\n</section>\n"

/***/ }),

/***/ "./src/app/platform1/platform1.component.scss":
/*!****************************************************!*\
  !*** ./src/app/platform1/platform1.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform1/platform1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/platform1/platform1.component.ts ***!
  \**************************************************/
/*! exports provided: Platform1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform1Component", function() { return Platform1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Platform1Component = /** @class */ (function () {
    function Platform1Component() {
    }
    Platform1Component.prototype.ngOnInit = function () {
    };
    Platform1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform1',
            template: __webpack_require__(/*! ./platform1.component.html */ "./src/app/platform1/platform1.component.html"),
            styles: [__webpack_require__(/*! ./platform1.component.scss */ "./src/app/platform1/platform1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Platform1Component);
    return Platform1Component;
}());



/***/ }),

/***/ "./src/app/platform2/platform2.component.html":
/*!****************************************************!*\
  !*** ./src/app/platform2/platform2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"background\">\n  <div>\n    <h2 class=\"textAlign\">{{name}}</h2>\n  </div>\n <app-card-group-platform></app-card-group-platform>\n <app-card-group-platform></app-card-group-platform>\n <app-card-group-platform></app-card-group-platform>\n</section>\n"

/***/ }),

/***/ "./src/app/platform2/platform2.component.scss":
/*!****************************************************!*\
  !*** ./src/app/platform2/platform2.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform2/platform2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/platform2/platform2.component.ts ***!
  \**************************************************/
/*! exports provided: Platform2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform2Component", function() { return Platform2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/games-data.service */ "./src/app/services/games-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Platform2Component = /** @class */ (function () {
    function Platform2Component(gameDataService, router) {
        this.gameDataService = gameDataService;
        this.router = router;
        this.games = [];
        this.idPlatform = 0;
        this.name = "";
    }
    Platform2Component.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.router);
        switch (this.router.url) {
            case "/platform/ps4":
                this.name = "Playstation 4";
                this.idPlatform = 146;
                break;
            case "/platform/XboxOne":
                this.name = "Microsoft Xbox One";
                this.idPlatform = 145;
                break;
            case "/platform/NSwitch":
                this.name = "Nintendo Switch";
                this.idPlatform = 157;
                break;
            default:
                this.name = "Playstation 4";
                this.idPlatform = 146;
                break;
        }
        this.gameDataService.getgameByPlatform(this.idPlatform).subscribe(function (data) {
            var results;
            results = data;
            _this.gameDataService.gamePlatform.next(results.results);
            //this.lastGames = results.results.slice(Math.max(results.results.length - 5, 1));
            //this.gameDataService.gamePlatform = results.results;
        });
    };
    Platform2Component.prototype.ngAfterViewInit = function () {
    };
    Platform2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform2',
            template: __webpack_require__(/*! ./platform2.component.html */ "./src/app/platform2/platform2.component.html"),
            styles: [__webpack_require__(/*! ./platform2.component.scss */ "./src/app/platform2/platform2.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Platform2Component);
    return Platform2Component;
}());



/***/ }),

/***/ "./src/app/platform3/platform3.component.html":
/*!****************************************************!*\
  !*** ./src/app/platform3/platform3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"background\">\n  <div>\n    <h2 class=\"textAlign\">Nintendo Switch</h2>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/platform3/platform3.component.scss":
/*!****************************************************!*\
  !*** ./src/app/platform3/platform3.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform3/platform3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/platform3/platform3.component.ts ***!
  \**************************************************/
/*! exports provided: Platform3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform3Component", function() { return Platform3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Platform3Component = /** @class */ (function () {
    function Platform3Component() {
    }
    Platform3Component.prototype.ngOnInit = function () {
    };
    Platform3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform3',
            template: __webpack_require__(/*! ./platform3.component.html */ "./src/app/platform3/platform3.component.html"),
            styles: [__webpack_require__(/*! ./platform3.component.scss */ "./src/app/platform3/platform3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Platform3Component);
    return Platform3Component;
}());



/***/ }),

/***/ "./src/app/platform4/platform4.component.html":
/*!****************************************************!*\
  !*** ./src/app/platform4/platform4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"background\">\n  <div>\n    <h2 class=\"textAlign\">Nintendo Switch</h2>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/platform4/platform4.component.scss":
/*!****************************************************!*\
  !*** ./src/app/platform4/platform4.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform4/platform4.component.ts":
/*!**************************************************!*\
  !*** ./src/app/platform4/platform4.component.ts ***!
  \**************************************************/
/*! exports provided: Platform4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform4Component", function() { return Platform4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Platform4Component = /** @class */ (function () {
    function Platform4Component() {
    }
    Platform4Component.prototype.ngOnInit = function () {
    };
    Platform4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-platform4',
            template: __webpack_require__(/*! ./platform4.component.html */ "./src/app/platform4/platform4.component.html"),
            styles: [__webpack_require__(/*! ./platform4.component.scss */ "./src/app/platform4/platform4.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Platform4Component);
    return Platform4Component;
}());



/***/ }),

/***/ "./src/app/rss-reader/rss-reader.component.html":
/*!******************************************************!*\
  !*** ./src/app/rss-reader/rss-reader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rss-reader/rss-reader.component.scss":
/*!******************************************************!*\
  !*** ./src/app/rss-reader/rss-reader.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rss-reader/rss-reader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rss-reader/rss-reader.component.ts ***!
  \****************************************************/
/*! exports provided: RssReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssReaderComponent", function() { return RssReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RssReaderComponent = /** @class */ (function () {
    function RssReaderComponent() {
    }
    RssReaderComponent.prototype.ngOnInit = function () {
    };
    RssReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rss-reader',
            template: __webpack_require__(/*! ./rss-reader.component.html */ "./src/app/rss-reader/rss-reader.component.html"),
            styles: [__webpack_require__(/*! ./rss-reader.component.scss */ "./src/app/rss-reader/rss-reader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RssReaderComponent);
    return RssReaderComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/cart-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart-data.service.ts ***!
  \***********************************************/
/*! exports provided: CartDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDataService", function() { return CartDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _games_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games-data.service */ "./src/app/services/games-data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _game_store_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-store-api.service */ "./src/app/services/game-store-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartDataService = /** @class */ (function () {
    function CartDataService(GameData, GameStoreApiService) {
        this.GameData = GameData;
        this.GameStoreApiService = GameStoreApiService;
        this.cartItems = [];
        this.totalItems = 0;
        this.total = 0;
        this.isTotalItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.isTotalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.games = this.GameData.games;
    }
    CartDataService.prototype.add = function (game) {
        this.cartItems.push(game);
        this.GameStoreApiService.setProducts(this.cartItems);
        console.log("qty:", this.totalItems, "total:", this.total, "items:", this.cartItems);
    };
    CartDataService.prototype.totalPrice = function () {
        this.total += this.getRandomInt(2500, 8000);
    };
    CartDataService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    CartDataService.prototype.upTotalItems = function (item) {
        this.isTotalItem.next(item);
    };
    CartDataService.prototype.uptotalPrice = function (price) {
        this.isTotalPrice.next(price);
    };
    CartDataService.prototype.addProduct = function (game, price) {
        this.add(game);
        this.total += price;
        this.totalItems++;
        this.uptotalPrice(this.total);
        this.upTotalItems(this.totalItems);
    };
    CartDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_games_data_service__WEBPACK_IMPORTED_MODULE_1__["GamesDataService"], _game_store_api_service__WEBPACK_IMPORTED_MODULE_3__["GameStoreApiService"]])
    ], CartDataService);
    return CartDataService;
}());



/***/ }),

/***/ "./src/app/services/game-store-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/game-store-api.service.ts ***!
  \****************************************************/
/*! exports provided: GameStoreApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStoreApiService", function() { return GameStoreApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameStoreApiService = /** @class */ (function () {
    function GameStoreApiService(http) {
        this.http = http;
        //apiDomain: string = "http://localhost:80/api/"
        this.apiDomain = "http://51.75.141.128:80/api/";
        this.isLogged = false;
        this.isloggedValidator = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.productList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    GameStoreApiService.prototype.getToken = function () {
        return this.token;
    };
    GameStoreApiService.prototype.setToken = function (token) {
        localStorage.setItem('tokenGameStore', JSON.stringify(token));
        this.token = token["id"];
    };
    GameStoreApiService.prototype.setProducts = function (products) {
        this.productList.next(products);
    };
    GameStoreApiService.prototype.setTokenNoRemeber = function (token) {
        this.token = token["id"];
    };
    GameStoreApiService.prototype.getTokenLogged = function () {
        var client = JSON.parse(localStorage.getItem("tokenGameStore"));
        if (client) {
            this.token = client['id'];
        }
        return client;
    };
    GameStoreApiService.prototype.setLogged = function (value) {
        this.isloggedValidator.next(value);
    };
    GameStoreApiService.prototype.newClient = function (client) {
        return this.http.post(this.apiDomain + "clients", client);
    };
    GameStoreApiService.prototype.login = function (client) {
        return this.http.post(this.apiDomain + "clients/login", client);
    };
    GameStoreApiService.prototype.updateClient = function (clientData) {
        var id = clientData.id;
        var beforePost = clientData;
        delete beforePost.id;
        return this.http.patch(this.apiDomain + "clients/" + id + "?access_token=" + this.getToken(), beforePost);
    };
    GameStoreApiService.prototype.logout = function () {
        var _this = this;
        this.getToken();
        return this.http.post(this.apiDomain + "clients/logout?access_token=" + this.getToken(), this.responseLoginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
            localStorage.removeItem('tokenGameStore');
            console.log("logout");
            _this.token = null;
        }));
    };
    GameStoreApiService.prototype.getCart = function (clientId) {
        return this.http.get(this.apiDomain + "clients/" + clientId + "/shoppingCarts?&access_token=" + this.getToken());
    };
    GameStoreApiService.prototype.getCartWithProducts = function (clientId) {
        return this.http.get(this.apiDomain + "shoppingCarts/" + clientId + "?filter={\"include\":[\"products\",\"client\"]}&access_token=" + this.getToken());
    };
    GameStoreApiService.prototype.createCart = function (clientId) {
        return this.http.get(this.apiDomain + "clients/" + clientId + "/shoppingCarts?access_token=" + this.getToken());
    };
    GameStoreApiService.prototype.addProduct = function (id, product) {
        return this.http.post(this.apiDomain + "shoppingCarts/" + id + "/products?access_token=" + this.getToken(), product);
    };
    GameStoreApiService.prototype.deleteProduct = function (idCart, idProduct) {
        return this.http.delete(this.apiDomain + "shoppingCarts/" + idCart + "/products/" + idProduct + "?access_token=" + this.getToken());
    };
    GameStoreApiService.prototype.deleteCart = function (idCart) {
        return this.http.delete(this.apiDomain + "shoppingCarts/" + idCart + "/products?access_token=" + this.getToken());
    };
    GameStoreApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameStoreApiService);
    return GameStoreApiService;
}());



/***/ }),

/***/ "./src/app/services/games-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/games-data.service.ts ***!
  \************************************************/
/*! exports provided: GamesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesDataService", function() { return GamesDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giant-bomb-api.service */ "./src/app/services/giant-bomb-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesDataService = /** @class */ (function () {
    function GamesDataService(giantBombApi) {
        var _this = this;
        this.giantBombApi = giantBombApi;
        this.gamePlatform = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        console.log('test');
        var gamesReleased = localStorage.getItem('gamesreleased');
        if (gamesReleased) {
            var results = JSON.parse(gamesReleased);
            this.lastGames = results.slice(Math.max(results.length - 5, 1));
            this.games = results;
        }
        else {
            this.giantBombApi.getLastExpectedReleasePerPlatform(146).subscribe(function (data) {
                var results;
                results = data;
                _this.lastGames = results.results.slice(Math.max(results.results.length - 5, 1));
                _this.games = results.results;
                console.log(_this.games);
            });
        }
    }
    GamesDataService.prototype.getgameByPlatform = function (idPlatform) {
        return this.giantBombApi.getLastExpectedReleasePerPlatform(idPlatform).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
        }));
    };
    GamesDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_giant_bomb_api_service__WEBPACK_IMPORTED_MODULE_1__["GiantBombApiService"]])
    ], GamesDataService);
    return GamesDataService;
}());



/***/ }),

/***/ "./src/app/services/giant-bomb-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/giant-bomb-api.service.ts ***!
  \****************************************************/
/*! exports provided: GiantBombApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiantBombApiService", function() { return GiantBombApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiantBombApiService = /** @class */ (function () {
    function GiantBombApiService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.httpParams = {};
        this.url = "https://www.giantbomb.com/api/";
        this.apiKey = "393b6596b4dc77b7c17ae66bd42cefe0b52c106f";
        this.format = "jsonp";
        this.year = "2018";
        this.filterRelease = "field:2018-01-01|2018-31-12&sort=original_release_date:desc";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN",
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set("api_key", this.apiKey)
                .set('format', this.format)
        };
    }
    GiantBombApiService.prototype.getAll = function () {
        var games = localStorage.getItem('games');
        if (games) {
            return games;
        }
        else {
            return this.http.jsonp(this.url + "games/?api_key=" + this.apiKey + "&format=jsonp", "json_callback").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
                localStorage.setItem('games', JSON.stringify(value));
                console.log(value);
            }));
        }
    };
    GiantBombApiService.prototype.getById = function (id) {
        return this.http.jsonp(this.url + "game/" + id + "/?api_key=" + this.apiKey + "&format=jsonp", "json_callback");
    };
    GiantBombApiService.prototype.getVideo = function (id) {
        return this.http.jsonp(this.url + "game/" + id + "/?api_key=" + this.apiKey + "&format=jsonp", "json_callback");
    };
    GiantBombApiService.prototype.getLastExpectedReleasePerPlatform = function (platform) {
        return this.http.jsonp(this.url + "games/?api_key=" + this.apiKey + "&platforms=" + platform + "&filter=" + this.filterRelease + ",platforms:" + platform + "&sort=original_release_date:desc&format=jsonp", "json_callback").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
            var results;
            results = value.results;
            localStorage.setItem('gamesreleased', JSON.stringify(results));
        }));
    };
    GiantBombApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientJsonpModule"]])
    ], GiantBombApiService);
    return GiantBombApiService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container background\">\n  <form [formGroup]=\"form\" class=\"form-horizontal\" (submit)=\"onSubmit()\" role=\"form\" method=\"POST\" action=\"/register\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <h2>Register New User</h2>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"name\">Name</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n            <input type=\"text\" name=\"name\" formControlName=\"name\" [formGroup]=\"form\" class=\"form-control\" id=\"name\"\n              placeholder=\"Name\" required autofocus>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n          <span class=\"text-danger align-middle\">\n            <!-- Put name validation error messages here -->\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"email\">E-Mail Address</label>\n      </div>\n      <div class=\"col-md-6 email\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n            <input type=\"text\" name=\"email\" formControlName=\"email\" [formGroup]=\"form\" class=\"form-control\" id=\"email\"\n              placeholder=\"you@example.com\" required autofocus>\n\n          </div>\n          <span *ngIf=\"invalidCredentials\" class=\"text-danger email-span align-middle\">\n            <i class=\"fa fa-close\">Already registered email</i>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n          <span class=\"text-danger align-middle\">\n            <!-- Put e-mail validation error messages here -->\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Password</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group has-danger\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n            <input type=\"password\" name=\"password\" formControlName=\"password\" [formGroup]=\"form\" class=\"form-control\"\n              id=\"password\" placeholder=\"Password\" required>\n          </div>\n          <div *ngIf=\"form.controls.password.minLength && !form.controls.password.errors.required\" class=\"alert alert-danger\">\n            <span>Password should contain 6 characters</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-control-feedback\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Confirm Password</label>\n      </div>\n      <div class=\"col-md-6 email\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-repeat\"></i>\n            </div>\n            <input type=\"password\" name=\"password-confirmation\" formControlName=\"confirmPassword\" [formGroup]=\"form\"\n              class=\"form-control\" id=\"password-confirm\" placeholder=\"Password\" required>\n\n\n          </div>\n          <span *ngIf=\"form.controls.confirmPassword.errors?.MatchPassword\" class=\"text-white description  email-span align-middle\">\n            <i class=\"fa fa-close\">Passwords do not\n              match</i>\n          </span>\n          <span *ngIf=\"validEmail ==true\" class=\"text-white description  email-span align-middle\">\n              <i class=\"fa fa-close\">Email send, click on the link to confirm your inscription</i>\n            </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Register</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  .field-label-responsive {\n    padding-top: .5rem;\n    text-align: right; } }\n\n.email {\n  height: 70px; }\n\n.email-span {\n  margin-left: 43px; }\n\nh2 {\n  text-align: center; }\n\n.description {\n  background-color: rgba(70, 57, 57, 0.9);\n  border: 2px solid;\n  padding: 8px;\n  border-radius: 7px;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entities_password_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/password-validation */ "./src/app/entities/password-validation.ts");
/* harmony import */ var _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game-store-api.service */ "./src/app/services/game-store-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, gameStoreApi) {
        this.fb = fb;
        this.gameStoreApi = gameStoreApi;
        this.invalidCredentials = false;
        this.validEmail = false;
        this.form = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        }, {
            validator: _entities_password_validation__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        delete this.form.value["confirmPassword"];
        console.log(this.form.value);
        this.gameStoreApi.newClient(this.form.value).subscribe(function (newClient) {
            console.log(newClient);
            _this.validEmail = true;
        }, function (error) {
            _this.invalidCredentials = true;
            //console.log(form);
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")],
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_game_store_api_service__WEBPACK_IMPORTED_MODULE_3__["GameStoreApiService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/stripe-payement/stripe-payement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stripe-payement/stripe-payement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"background\">\n  <div style=\"margin-top :50px;\">\n      <form #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\" class=\"checkout\">\n          <div class=\"form-row\">\n            <label for=\"card-info\">Card Info</label>\n            <div id=\"card-info\" #cardInfo></div>\n        \n            <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\n          </div>\n        \n          <button type=\"submit\">{{total | number: '1.2-2'}}€</button>\n      </form>\n  </div>\n   \n</section>\n"

/***/ }),

/***/ "./src/app/stripe-payement/stripe-payement.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/stripe-payement/stripe-payement.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.checkout {\n  max-width: 500px;\n  margin: 2rem auto;\n  text-align: center;\n  border: 2px solid #eee;\n  border-radius: 8px;\n  padding: 1rem 2rem;\n  background: white;\n  font-family: monospace;\n  color: #525252;\n  font-size: 1.1rem; }\n\nform.checkout button {\n  padding: 0.5rem 1rem;\n  color: white;\n  background: coral;\n  border: none;\n  border-radius: 4px;\n  margin-top: 1rem; }\n\nform.checkout button:active {\n  background: #a54c2b; }\n\n.StripeElement {\n  margin: 1rem 0 1rem;\n  background-color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease; }\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df; }\n\n.StripeElement--invalid {\n  border-color: #fa755a; }\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important; }\n"

/***/ }),

/***/ "./src/app/stripe-payement/stripe-payement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stripe-payement/stripe-payement.component.ts ***!
  \**************************************************************/
/*! exports provided: StripePayementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePayementComponent", function() { return StripePayementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart-data.service */ "./src/app/services/cart-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StripePayementComponent = /** @class */ (function () {
    function StripePayementComponent(cd, cartService) {
        this.cd = cd;
        this.cartService = cartService;
        this.cardHandler = this.onChange.bind(this);
    }
    StripePayementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.isTotalPrice.subscribe(function (value) {
            _this.total = value;
        });
    };
    StripePayementComponent.prototype.ngAfterViewInit = function () {
        var stripe = Stripe('pk_test_9pF6IgWVPFnh5ZowHn7HaBuH'); // use your test publishable key
        var elements = stripe.elements();
        var style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'purple'
                }
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
    };
    StripePayementComponent.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    StripePayementComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    StripePayementComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                        }
                        else {
                            console.log('Success!', token);
                            // ...send the token to the your backend to process the charge
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardInfo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StripePayementComponent.prototype, "cardInfo", void 0);
    StripePayementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stripe-payement',
            template: __webpack_require__(/*! ./stripe-payement.component.html */ "./src/app/stripe-payement/stripe-payement.component.html"),
            styles: [__webpack_require__(/*! ./stripe-payement.component.scss */ "./src/app/stripe-payement/stripe-payement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_cart_data_service__WEBPACK_IMPORTED_MODULE_1__["CartDataService"]])
    ], StripePayementComponent);
    return StripePayementComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/video/video.component.html":
/*!********************************************!*\
  !*** ./src/app/video/video.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"max-width-1024\">\n  <div class=\"embed-responsive embed-responsive-16by9\" id=\"player\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-width-1024 {\n  max-width: 1024px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var reframe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reframe.js */ "./node_modules/reframe.js/dist/reframe.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
        this.reframed = false;
    }
    VideoComponent.prototype.init = function () {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.random = Math.floor(Math.random() * 250) + 1;
        this.video = "Kx13BVEtKQk"; //video id
        window['onYouTubeIframeAPIReady'] = function (e) {
            _this.YT = window['YT'];
            _this.reframed = false;
            _this.player = new window['YT'].Player('player', {
                playerVars: {
                    listType: 'playlist',
                    list: 'LLKy1dAqELo0zrOtPkf0eTMw',
                    index: _this.random,
                },
                events: {
                    'onStateChange': _this.onPlayerStateChange.bind(_this),
                    'onError': _this.onPlayerError.bind(_this),
                    'onReady': function (e) {
                        if (!_this.reframed) {
                            _this.reframed = true;
                            Object(reframe_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.a);
                        }
                        setTimeout(function () {
                            e.target.setShuffle({ 'shufflePlaylist': true });
                        }, 1000);
                    }
                }
            });
        };
    };
    VideoComponent.prototype.onPlayerStateChange = function (event) {
        console.log(event);
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                if (this.cleanTime() == 0) {
                    console.log('started ' + this.cleanTime());
                }
                else {
                    console.log('playing ' + this.cleanTime());
                }
                ;
                break;
            case window['YT'].PlayerState.PAUSED:
                if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                    console.log('paused' + ' @ ' + this.cleanTime());
                }
                ;
                break;
            case window['YT'].PlayerState.ENDED:
                console.log('ended ');
                break;
        }
        ;
    };
    ;
    VideoComponent.prototype.onPlayerReady = function (event) {
        event.target.mute();
        setTimeout(function () {
            event.target.setShuffle(true);
            event.target.setLoop(true);
        }, 2000);
    };
    //utility
    VideoComponent.prototype.cleanTime = function () {
        return Math.round(this.player.getCurrentTime());
    };
    ;
    VideoComponent.prototype.onPlayerError = function (event) {
        switch (event.data) {
            case 2:
                console.log('' + this.video);
                break;
            case 100:
                break;
            case 101 || 150:
                break;
        }
        ;
    };
    ;
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kevin/code/certification/CoderDeployer-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map