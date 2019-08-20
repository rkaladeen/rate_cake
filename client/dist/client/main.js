(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-cake/add-cake.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-cake/add-cake.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron p-3 bg-dark text-white shadow\">\n  <h4>{{ subtitle }}</h4>\n  <form class=\"\" (submit)=\"submitCake()\">\n    <div class=\"form-group\">\n      <label for=\"bakerName\">Baker</label>\n      <input class=\"form-control\" type=\"text\" id=\"bakerName\" name=\"bakerName\" [(ngModel)]=\"newCake.bakerName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imgUrl\">Image URL</label>\n      <input class=\"form-control\" type=\"text\" id=\"imgUrl\" name=\"imgUrl\" [(ngModel)]=\"newCake.imgUrl\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/all-cakes/all-cakes.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-cakes/all-cakes.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n  <div class=\"row jumbotron p-2 mb-2 shadow-sm\" *ngFor=\"let cake of cakes; index as i\">\n    <button class=\"col-sm-6 btn\"><img class=\"w-100\" src=\"{{ cakes[i].img_url }}\" alt=\"{{ cakes[i].img_url }}\" (click)=viewCake(cakes[i]._id)></button>\n    <div class=\"col-sm-6 mt-5\">\n        <a class=\"d-inline fas fa-star text-warning\"></a>\n        <a class=\"d-inline fas fa-star text-warning\"></a>\n        <a class=\"d-inline fas fa-star text-warning\"></a>\n        <a class=\"d-inline fas fa-star text-warning\"></a>\n        <a class=\"d-inline fas fa-star text-warning\"></a>\n        \n\n      <form>\n        <select class=\"custom-select\" \n                >\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n          <option value=\"4\">Four</option>\n          <option value=\"5\">Five</option>\n        </select>\n        <textarea class=\"form-control\" \n\n                  rows=\"3\" \n                  placeholder=\"Type you comment here\" \n                 ></textarea>\n        <button type=\"submit\" class=\"btn btn-outline-secondary\">Rate!</button>\n      </form>\n    </div>\n  </div> <!--End of cake list-->\n</div>\n\n<!-- (submit)=\"submitReview(cakes[i]._id)\" -->\n\n<!-- name=\"review.ratings\" [(ngModel)]=\"review.ratings\"\n\nname=\"review.comment\"  [(ngModel)]=\"review.comment\" -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron py-3\"><h1>{{ title }}</h1></div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <add-cake></add-cake>\n    </div>\n    <div class=\"col-md-8\">\n      <all-cakes></all-cakes>\n    </div>\n  </div>\n  <view-cake></view-cake>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-cake/view-cake.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-cake/view-cake.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron p-3 shadow row\">\n  <!-- <h2>Baked by {{ cake.baker }}</h2> -->\n  <div class=\"row\">\n    <!-- <div class=\"col-md-6\"><img src=\"{{ cake.img_url }}\" alt=\"{{ cake.img_url }}\"></div> -->\n    <div class=\"col-md-6\">\n      <p>Average Rating: </p>\n      <!-- <div class=\"jumbotron m-2\" *ngFor=\"let review of cake['reviews']\">\n        <p>{{ review.comment }}</p>\n        <p>{{ review.ratings }} Stars</p>\n      </div> -->\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/add-cake/add-cake.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-cake/add-cake.component.ts ***!
  \************************************************/
/*! exports provided: AddCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCakeComponent", function() { return AddCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddCakeComponent = class AddCakeComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    ngOnInit() {
        this.newCake = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'baker': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'img_url': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    submitCake() {
        let cake = {
            "baker": this.newCake['bakerName'],
            "img_url": this.newCake['imgUrl']
        };
        let cakeObservable = this._httpService.createCake(cake);
        cakeObservable.subscribe(data => {
            console.log(data);
            this.router.navigate(['/']);
        });
    }
};
AddCakeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-cake',
        template: __webpack_require__(/*! raw-loader!./add-cake.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-cake/add-cake.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], AddCakeComponent);



/***/ }),

/***/ "./src/app/all-cakes/all-cakes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-cakes/all-cakes.component.ts ***!
  \**************************************************/
/*! exports provided: AllCakesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCakesComponent", function() { return AllCakesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let AllCakesComponent = class AllCakesComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
        let observable = this._httpService.getAll();
        observable.subscribe(data => {
            console.log(data);
            this.cakes = data;
        });
    }
    submitReview(cake_id) {
        console.log("Review Submitted");
    }
    viewCake(cake_id) {
        console.log("View Cake Clicked");
    }
};
AllCakesComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AllCakesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'all-cakes',
        template: __webpack_require__(/*! raw-loader!./all-cakes.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-cakes/all-cakes.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], AllCakesComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.component */ "./src/app/app.component.ts");




const routes = [
    { path: '', component: _app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Welcome to Rate myCakes';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_cake_add_cake_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-cake/add-cake.component */ "./src/app/add-cake/add-cake.component.ts");
/* harmony import */ var _view_cake_view_cake_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-cake/view-cake.component */ "./src/app/view-cake/view-cake.component.ts");
/* harmony import */ var _all_cakes_all_cakes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-cakes/all-cakes.component */ "./src/app/all-cakes/all-cakes.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _add_cake_add_cake_component__WEBPACK_IMPORTED_MODULE_8__["AddCakeComponent"],
            _view_cake_view_cake_component__WEBPACK_IMPORTED_MODULE_9__["ViewCakeComponent"],
            _all_cakes_all_cakes_component__WEBPACK_IMPORTED_MODULE_10__["AllCakesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAll() {
        return this._http.get("/cakes");
    }
    getOne(cake_id) {
        return this._http.get(`/cakes/${cake_id}`);
    }
    createCake(newCake) {
        return this._http.post("/cakes", newCake);
    }
    updateCake(updateCake) {
        return this._http.put(`/cakes/${updateCake['_id']}`, updateCake);
    }
    deleteCake(deleteCake) {
        return this._http.delete(`/cakes/${deleteCake}`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/view-cake/view-cake.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-cake/view-cake.component.ts ***!
  \**************************************************/
/*! exports provided: ViewCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCakeComponent", function() { return ViewCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let ViewCakeComponent = class ViewCakeComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        let observable = this._httpService.getOne("gbg");
        observable.subscribe(data => {
            this.cake = data;
        });
    }
    ngOnInit() {
    }
};
ViewCakeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ViewCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'view-cake',
        template: __webpack_require__(/*! raw-loader!./view-cake.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-cake/view-cake.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], ViewCakeComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rkala\Dropbox\mean_stack\rate_cake\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map