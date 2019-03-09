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

/***/ "./src/app/animation/animation.component.css":
/*!***************************************************!*\
  !*** ./src/app/animation/animation.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/animation/animation.component.html":
/*!****************************************************!*\
  !*** ./src/app/animation/animation.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  animation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/animation/animation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/animation/animation.component.ts ***!
  \**************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimationComponent = /** @class */ (function () {
    function AnimationComponent() {
    }
    AnimationComponent.prototype.ngOnInit = function () {
    };
    AnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animation',
            template: __webpack_require__(/*! ./animation.component.html */ "./src/app/animation/animation.component.html"),
            styles: [__webpack_require__(/*! ./animation.component.css */ "./src/app/animation/animation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimationComponent);
    return AnimationComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/animation/animation.component.ts");





var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'animations',
        component: _animation_animation_component__WEBPACK_IMPORTED_MODULE_4__["AnimationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-container {\r\n    background-image: url('static/adafruit.png');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-color: #00a7e9;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.full-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.action-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.items-container-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.menu-action-text {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2Q0FBa0U7SUFDbEUsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vc2VydmVyL3Byb2plY3Qvc3RhdGljL2FkYWZydWl0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdlOTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5mdWxsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtcy1jb250YWluZXItcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubWVudS1hY3Rpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'neohub';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _neopixel_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./neopixel/add-neopixel-dialog/add-neopixel-dialog.component */ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.ts");
/* harmony import */ var _neopixel_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./neopixel/pixel-color-dialog/pixel-color-dialog.component */ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/animation/animation.component.ts");
/* harmony import */ var _neopixel_neopixel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./neopixel/neopixel.component */ "./src/app/neopixel/neopixel.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _neopixel_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddNeopixelDialogComponent"],
                _neopixel_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PixelColorDialogComponent"],
                _animation_animation_component__WEBPACK_IMPORTED_MODULE_14__["AnimationComponent"],
                _neopixel_neopixel_component__WEBPACK_IMPORTED_MODULE_15__["NeopixelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            entryComponents: [
                _neopixel_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddNeopixelDialogComponent"],
                _neopixel_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PixelColorDialogComponent"]
            ],
            providers: [
                src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_13__["NeopixelService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container full-container\">\r\n  <app-neopixel></app-neopixel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lb3BpeGVsL2FkZC1uZW9waXhlbC1kaWFsb2cvYWRkLW5lb3BpeGVsLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\r\n  <h1 mat-dialog-title>Add a Neopixel!</h1>\r\n  <div class=\"form-container\" mat-dialog-content>\r\n    <form [formGroup]=\"addNeopixelForm\" (ngSubmit)=\"addNeopixel()\" novalidate>\r\n      <div class=\"form-input-container\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Type\" formControlName=\"pixelType\" required>\r\n            <mat-option *ngFor=\"let type of pixelTypeOptions\" value=\"{{type}}\">{{type}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-input-container\">\r\n        <mat-form-field>\r\n          <input type=\"text\" placeholder=\"Number of pixels\" matInput formControlName=\"numPixels\" required>\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['numPixels'].hasError('required')\">This field is required.</mat-error>\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['numPixels'].hasError('min')\">Must have at least 1 pixel.</mat-error>\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['numPixels'].hasError('pattern')\">This field must be a number.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"GPIO Pin\" formControlName=\"gpioPin\" required>\r\n          <mat-option *ngFor=\"let pin of gpioPinOptions\" value=\"{{pin}}\">{{pin}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"form-input-container\">\r\n        <mat-form-field>\r\n          <input type=\"text\" placeholder=\"Brightness\" matInput formControlName=\"brightness\">\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['brightness'].hasError('min')\">Must be greater than zero.</mat-error>\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['brightness'].hasError('max')\">Cannot be greater than 255.</mat-error>\r\n          <mat-error *ngIf=\"addNeopixelForm.controls['brightness'].hasError('pattern')\">Must be a number.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"action-container\">\r\n        <button type=\"submit\" class=\"submit-button\" mat-raised-button color=\"primary\" [disabled]=\"addNeopixelForm.invalid\">Go!</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddNeopixelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNeopixelDialogComponent", function() { return AddNeopixelDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");





var numbersOnlyRegex = /^\d+$/;
var AddNeopixelDialogComponent = /** @class */ (function () {
    function AddNeopixelDialogComponent(dialogRef, neoPixelService, data) {
        this.dialogRef = dialogRef;
        this.neoPixelService = neoPixelService;
        this.data = data;
        this.pixelTypeOptions = ['Strip', 'Ring', 'Matrix'];
        this.gpioPinOptions = ['10', '12', '18', '21'];
    }
    AddNeopixelDialogComponent.prototype.ngOnInit = function () {
        this.createAddNeopixelForm();
    };
    AddNeopixelDialogComponent.prototype.createAddNeopixelForm = function () {
        this.addNeopixelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            pixelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.pixelTypeOptions[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            numPixels: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](64, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(numbersOnlyRegex)]),
            gpioPin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.gpioPinOptions[2], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(numbersOnlyRegex)]),
            brightness: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](60, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(255), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(numbersOnlyRegex)])
        });
    };
    AddNeopixelDialogComponent.prototype.addNeopixel = function () {
        var _this = this;
        this.neoPixelService.createNeopixel(this.addNeopixelForm.value)
            .subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close();
        }, function (err) {
            console.error('Error adding neopixel: ', err);
        });
    };
    AddNeopixelDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-neopixel-dialog',
            template: __webpack_require__(/*! ./add-neopixel-dialog.component.html */ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-neopixel-dialog.component.css */ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_4__["NeopixelService"], Object])
    ], AddNeopixelDialogComponent);
    return AddNeopixelDialogComponent;
}());



/***/ }),

/***/ "./src/app/neopixel/neopixel.component.css":
/*!*************************************************!*\
  !*** ./src/app/neopixel/neopixel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-button {\r\n    width: 72px;\r\n    height: 72px;\r\n}\r\n\r\n#neopixels-container {\r\n    padding: 24px;\r\n}\r\n\r\n#neopixel-card {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n#pixel-container {\r\n    margin: 8px;\r\n}\r\n\r\n#neopixel-card-header {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#neopixel-actions {\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n}\r\n\r\n.neopixel-actions-container {\r\n    position: absolute;\r\n    right: 24px;\r\n    bottom: 24px;\r\n}\r\n\r\n.neopixel-action {\r\n    margin: 8px;\r\n}\r\n\r\n/deep/ .mat-menu-content {\r\n    background-color: #c2185b !important;\r\n}\r\n\r\n#delete-neopixel-action {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#animation-title {\r\n    margin: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVvcGl4ZWwvbmVvcGl4ZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLE1BQU07Q0FDVDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmVvcGl4ZWwvbmVvcGl4ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG59XHJcblxyXG4jbmVvcGl4ZWxzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4jbmVvcGl4ZWwtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4jcGl4ZWwtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4jbmVvcGl4ZWwtY2FyZC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jbmVvcGl4ZWwtYWN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6MDtcclxufVxyXG5cclxuLm5lb3BpeGVsLWFjdGlvbnMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ubmVvcGl4ZWwtYWN0aW9uIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4vZGVlcC8gLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jZGVsZXRlLW5lb3BpeGVsLWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2FuaW1hdGlvbi10aXRsZSB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/neopixel/neopixel.component.html":
/*!**************************************************!*\
  !*** ./src/app/neopixel/neopixel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container full-container\">\r\n  <div class=\"items-container\" id=\"neopixels-container\">\r\n    <mat-card class=\"card-container\" id=\"neopixel-card\" *ngFor=\"let neopixel of neopixels; let id = index\">\r\n      <mat-card-header id=\"neopixel-card-header\">\r\n        <div id=\"neopixel-actions\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu class=\"action-menu\" #menu=\"matMenu\" xPosition=\"before\">\r\n            <button id=\"clear-neopixel-action\" (click)=\"clearNeopixel(neopixel)\" mat-menu-item>\r\n              <mat-icon>clear_all</mat-icon>\r\n              <span class=\"menu-action-text\">Clear</span>\r\n            </button>\r\n            <button id=\"delete-neopixel-action\" (click)=\"deleteNeopixel(neopixel)\" mat-menu-item>\r\n              <mat-icon>delete</mat-icon>\r\n              <span class=\"menu-action-text\">Delete</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <mat-card-title>{{neopixel._id}}</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"items-container items-container-row\">\r\n          <div id=\"pixel-container\" *ngFor=\"let pixel of neopixel.pixels; let index = index\">\r\n            <button [ngStyle]=\"{'background-color': decimalArrayToRGB(pixel.color)}\" (click)=\"openPixelColorDialog(id, index)\" id=\"pixel\" mat-fab>\r\n              <mat-icon>color_lens</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"items-container\" id=\"animations-container\">\r\n          <mat-card class=\"card-container\" id=\"animation-container\" *ngFor=\"let anim of neopixel.animations; let index = index\">\r\n            <mat-card-content>\r\n                <button id=\"play-pause-button\" (click)=\"toggleAnimation(neopixel.id, anim, index)\" mat-fab color=\"primary\">\r\n                  <mat-icon *ngIf=\"!(selectedAnimIndex == index) || !neopixel.animating\">play_arrow</mat-icon>\r\n                  <mat-icon *ngIf=\"selectedAnimIndex == index && neopixel.animating\">pause</mat-icon>\r\n                </button>\r\n                <span id=\"animation-title\">{{anim}}</span>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"neopixel-actions-container\">\r\n    <button class=\"neopixel-action\" (click)=\"openAddNeopixelDialog()\" id=\"add-button\" mat-fab color=\"primary\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/neopixel/neopixel.component.ts":
/*!************************************************!*\
  !*** ./src/app/neopixel/neopixel.component.ts ***!
  \************************************************/
/*! exports provided: NeopixelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeopixelComponent", function() { return NeopixelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-neopixel-dialog/add-neopixel-dialog.component */ "./src/app/neopixel/add-neopixel-dialog/add-neopixel-dialog.component.ts");
/* harmony import */ var _pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pixel-color-dialog/pixel-color-dialog.component */ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");
/* harmony import */ var _services_animation_animation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/animation/animation.service */ "./src/app/services/animation/animation.service.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/neopixel/neopixel-data-source */ "./src/app/services/neopixel/neopixel-data-source.ts");
/* harmony import */ var _services_neopixel_pixel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/neopixel/pixel */ "./src/app/services/neopixel/pixel.ts");









var NeopixelComponent = /** @class */ (function () {
    function NeopixelComponent(addNeopixelDialog, pixelColorDialog, neopixelService, animationService) {
        this.addNeopixelDialog = addNeopixelDialog;
        this.pixelColorDialog = pixelColorDialog;
        this.neopixelService = neopixelService;
        this.animationService = animationService;
        this.selectedAnimIndex = 0;
    }
    NeopixelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neopixelDataSource = new src_app_services_neopixel_neopixel_data_source__WEBPACK_IMPORTED_MODULE_7__["NeopixelDataSource"](this.neopixelService);
        this.neopixelDataSource.connect().subscribe(function (neopixels) {
            _this.neopixels = neopixels;
            console.log(_this.neopixels);
        });
        this.neopixelDataSource.loadNeopixels();
    };
    NeopixelComponent.prototype.toggleAnimation = function (neopixelId, animation, animIndex) {
        var _this = this;
        this.animationService.toggleAnimation(neopixelId, animation).subscribe(function (data) {
            console.log(data);
            _this.selectedAnimIndex = animIndex;
            _this.neopixels[neopixelId].animating = !_this.neopixels[neopixelId].animating;
        }, function (err) {
            console.error(err);
        });
    };
    NeopixelComponent.prototype.openAddNeopixelDialog = function () {
        var _this = this;
        var dialogRef = this.addNeopixelDialog.open(_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddNeopixelDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (data) {
            _this.neopixelDataSource.loadNeopixels();
        });
    };
    NeopixelComponent.prototype.openPixelColorDialog = function (neopixelId, pixelIndex) {
        var dialogRef = this.pixelColorDialog.open(_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PixelColorDialogComponent"], {
            data: {
                pixelRef: this.neopixels[neopixelId].pixels[pixelIndex],
            }
        });
    };
    NeopixelComponent.prototype.deleteNeopixel = function (neopixel) {
        var _this = this;
        this.neopixelService.deleteNeopixel(neopixel._id).subscribe(function (data) {
            console.log(data);
            _this.neopixelDataSource.loadNeopixels();
            _this.spliceNeopixel(neopixel);
        }, function (err) {
            console.error(err);
        });
    };
    NeopixelComponent.prototype.spliceNeopixel = function (neopixel) {
        var index = this.neopixels.indexOf(neopixel);
        if (index !== -1) {
            this.neopixels.splice(index, 1);
        }
    };
    NeopixelComponent.prototype.decimalArrayToRGB = function (colors) {
        return "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
    };
    NeopixelComponent.prototype.clearNeopixel = function (neopixel) {
        var _this = this;
        this.neopixelService.updatePixels(neopixel._id, 0, neopixel.pixels.length - 1, _services_neopixel_pixel__WEBPACK_IMPORTED_MODULE_8__["BLACK"]).subscribe(function (data) {
            console.log(data);
            _this.fillNeopixel(neopixel, _services_neopixel_pixel__WEBPACK_IMPORTED_MODULE_8__["BLACK"]);
        }, function (err) {
            console.error(err);
        });
    };
    NeopixelComponent.prototype.fillNeopixel = function (neopixel, color) {
        for (var _i = 0, _a = neopixel.pixels; _i < _a.length; _i++) {
            var pixel = _a[_i];
            pixel.color = color;
        }
    };
    NeopixelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neopixel',
            template: __webpack_require__(/*! ./neopixel.component.html */ "./src/app/neopixel/neopixel.component.html"),
            styles: [__webpack_require__(/*! ./neopixel.component.css */ "./src/app/neopixel/neopixel.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_5__["NeopixelService"],
            _services_animation_animation_service__WEBPACK_IMPORTED_MODULE_6__["AnimationService"]])
    ], NeopixelComponent);
    return NeopixelComponent;
}());



/***/ }),

/***/ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25lb3BpeGVsL3BpeGVsLWNvbG9yLWRpYWxvZy9waXhlbC1jb2xvci1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\" id=\"color-picker-container\">\r\n  <span \r\n    [cpToggle]=\"true\"\r\n    [cpDialogDisplay]=\"'inline'\"\r\n    [cpOKButton]=\"true\"\r\n    [cpOKButtonClass]=\"'mat-raised-button'\"\r\n    [cpCancelButton]=\"true\"\r\n    [cpCancelButtonClass]=\"'mat-raised-button'\"\r\n    [cpAlphaChannel]=\"'disabled'\"\r\n    [cpOutputFormat]=\"'rgba'\"\r\n    [(colorPicker)]=\"color\"\r\n    (colorPickerSelect)=\"updatePixel($event)\">\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PixelColorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelColorDialogComponent", function() { return PixelColorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");




var PixelColorDialogComponent = /** @class */ (function () {
    function PixelColorDialogComponent(neoPixelService, data) {
        this.neoPixelService = neoPixelService;
        this.data = data;
    }
    PixelColorDialogComponent.prototype.ngOnInit = function () {
        console.log('DATA: ', this.data);
        this.selectedPixel = this.data.pixelRef;
        this.color = this.decimalArrayToRGB(this.selectedPixel.color);
    };
    PixelColorDialogComponent.prototype.updatePixel = function (evt) {
        var _this = this;
        var rgb = this.rgbToDecimalArray(evt);
        this.neoPixelService.updatePixel(this.selectedPixel, rgb).subscribe(function (data) {
            _this.selectedPixel.color = rgb;
            console.log(data);
        }, function (err) {
            console.error(err);
        });
    };
    PixelColorDialogComponent.prototype.rgbToDecimalArray = function (rgbColor) {
        // TODO: Replace with regex. 
        var rgbVals = rgbColor.replace(/\s/g, "").replace(/rgb\(/g, "").replace(/\)/g, "").split(',');
        var res = rgbVals.map(function (val) {
            return parseInt(val);
        });
        return res;
    };
    PixelColorDialogComponent.prototype.decimalArrayToRGB = function (colors) {
        return "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
    };
    PixelColorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pixel-color-dialog',
            template: __webpack_require__(/*! ./pixel-color-dialog.component.html */ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.html"),
            styles: [__webpack_require__(/*! ./pixel-color-dialog.component.css */ "./src/app/neopixel/pixel-color-dialog/pixel-color-dialog.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_3__["NeopixelService"], Object])
    ], PixelColorDialogComponent);
    return PixelColorDialogComponent;
}());



/***/ }),

/***/ "./src/app/services/animation/animation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/animation/animation.service.ts ***!
  \*********************************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AnimationService = /** @class */ (function () {
    function AnimationService(http) {
        this.http = http;
    }
    AnimationService.prototype.toggleAnimation = function (neopixelId, animation) {
        return this.http
            .put("http://192.168.0.106:5000/api/animation?id=" + neopixelId + "&animation_name=" + animation, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    AnimationService.prototype.handleObservableError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
    };
    AnimationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnimationService);
    return AnimationService;
}());



/***/ }),

/***/ "./src/app/services/neopixel/neopixel-data-source.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/neopixel/neopixel-data-source.ts ***!
  \***********************************************************/
/*! exports provided: NeopixelDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeopixelDataSource", function() { return NeopixelDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var NeopixelDataSource = /** @class */ (function () {
    function NeopixelDataSource(neopixelService) {
        this.neopixelService = neopixelService;
        this.neopixelSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    NeopixelDataSource.prototype.connect = function () {
        return this.neopixelSubject.asObservable();
    };
    NeopixelDataSource.prototype.disconnect = function () {
        this.neopixelSubject.complete();
        this.loadingSubject.complete();
    };
    NeopixelDataSource.prototype.loadNeopixels = function () {
        var _this = this;
        this.loadingSubject.next(true);
        this.neopixelService.getNeopixels()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (neopixels) {
            _this.neopixelSubject.next(neopixels);
        });
    };
    NeopixelDataSource.prototype.getNeopixels = function () {
        return this.neopixelSubject.getValue();
    };
    return NeopixelDataSource;
}());



/***/ }),

/***/ "./src/app/services/neopixel/neopixel.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/neopixel/neopixel.service.ts ***!
  \*******************************************************/
/*! exports provided: NeopixelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeopixelService", function() { return NeopixelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var NeopixelService = /** @class */ (function () {
    function NeopixelService(http) {
        this.http = http;
    }
    NeopixelService.prototype.getNeopixels = function () {
        return this.http
            .get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].neopixelUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (neopixels) {
            neopixels.map(function (neopixel) {
                var i = 0;
                neopixel.pixels.forEach(function (pixel) {
                    pixel.neopixelId = neopixel._id;
                    pixel.index = i;
                    i++;
                });
            });
            return neopixels;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.createNeopixel = function (newNeoPixel) {
        var data = {
            pin: newNeoPixel.gpioPin,
            num_pixels: newNeoPixel.numPixels,
            brightness: 60
        };
        return this.http
            .post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].neopixelUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.updatePixel = function (pixel, color) {
        var data = {
            _id: pixel.neopixelId,
            index_start: pixel.index,
            index_end: pixel.index,
            r: color[0],
            g: color[1],
            b: color[2]
        };
        return this.http
            .put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].neopixelUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.updatePixels = function (neopixelId, indexStart, indexEnd, color) {
        var data = {
            _id: neopixelId,
            index_start: indexStart,
            index_end: indexEnd,
            r: color[0],
            g: color[1],
            b: color[2]
        };
        return this.http
            .put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].neopixelUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.deleteNeopixel = function (neopixelId) {
        return this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].neopixelUrl + "?id=" + neopixelId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.handleObservableError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
    };
    NeopixelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NeopixelService);
    return NeopixelService;
}());



/***/ }),

/***/ "./src/app/services/neopixel/pixel.ts":
/*!********************************************!*\
  !*** ./src/app/services/neopixel/pixel.ts ***!
  \********************************************/
/*! exports provided: BLACK, Pixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACK", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pixel", function() { return Pixel; });
var BLACK = [0, 0, 0];
var Pixel = /** @class */ (function () {
    function Pixel(color) {
        this.color = color;
    }
    return Pixel;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var RPI_IP = '192.168.0.106';
var RPI_PORT = '5000';
var environment = {
    production: false,
    neopixelUrl: "http://" + RPI_IP + ":" + RPI_PORT + "/api/strip"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chase\OneDrive\Documents\Github\Neohub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map