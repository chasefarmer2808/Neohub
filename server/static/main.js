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




var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
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

module.exports = "#app-container {\r\n    background-image: url('static/adafruit.png');\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-color: #00a7e9;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.full-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.action-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.items-container-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkNBQTBEO0lBQzFELDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9zZXJ2ZXIvc3RhdGljL2FkYWZydWl0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdlOTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5mdWxsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtcy1jb250YWluZXItcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_modules_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/color-picker/color-picker.module */ "./src/app/modules/color-picker/color-picker.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/add-neopixel-dialog/add-neopixel-dialog.component */ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.ts");
/* harmony import */ var _dashboard_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/pixel-color-dialog/pixel-color-dialog.component */ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _dashboard_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddNeopixelDialogComponent"],
                _dashboard_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PixelColorDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                src_app_modules_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_7__["ColorPickerModule"]
            ],
            entryComponents: [
                _dashboard_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddNeopixelDialogComponent"],
                _dashboard_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PixelColorDialogComponent"]
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

/***/ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvYWRkLW5lb3BpeGVsLWRpYWxvZy9hZGQtbmVvcGl4ZWwtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <h1 mat-dialog-title>Add a Neopixel!</h1>\n  <div class=\"form-container\" mat-dialog-content>\n    <form [formGroup]=\"addNeopixelForm\" (ngSubmit)=\"addNeopixel()\" novalidate>\n      <div class=\"form-input-container\">\n        <mat-form-field>\n          <mat-select placeholder=\"Type\" formControlName=\"pixelType\" required>\n            <mat-option *ngFor=\"let type of pixelTypeOptions\" value=\"{{type}}\">{{type}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"form-input-container\">\n        <mat-form-field>\n          <input type=\"text\" placeholder=\"Number of pixels\" matInput formControlName=\"numPixels\" required>\n          <mat-error *ngIf=\"addNeopixelForm.controls['numPixels'].hasError('required')\">This field is required.</mat-error>\n          <mat-error *ngIf=\"addNeopixelForm.controls['numPixels'].hasError('min')\">Must have at least 1 pixel.</mat-error>\n        </mat-form-field>\n      </div>\n      <mat-form-field>\n        <mat-select placeholder=\"GPIO Pin\" formControlName=\"gpioPin\" required>\n          <mat-option *ngFor=\"let pin of gpioPinOptions\" value=\"{{pin}}\">{{pin}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"action-container\">\n        <button type=\"submit\" class=\"submit-button\" mat-raised-button color=\"primary\" [disabled]=\"addNeopixelForm.invalid\">Go!</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.ts ***!
  \********************************************************************************/
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
            numPixels: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](64, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]),
            gpioPin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.gpioPinOptions[2], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]) // GPIO 18 is standard per the Circuit Python docs.
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
            template: __webpack_require__(/*! ./add-neopixel-dialog.component.html */ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-neopixel-dialog.component.css */ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_4__["NeopixelService"], Object])
    ], AddNeopixelDialogComponent);
    return AddNeopixelDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-button {\r\n    position: absolute;\r\n    width: 72px;\r\n    height: 72px;\r\n    right: 24px;\r\n    bottom: 24px;\r\n}\r\n\r\n#neopixels-container {\r\n    padding: 24px;\r\n}\r\n\r\n#neopixel-card {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n#pixel-container {\r\n    margin: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWRkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4jbmVvcGl4ZWxzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4jbmVvcGl4ZWwtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4jcGl4ZWwtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container full-container\">\r\n  <div class=\"items-container\" id=\"neopixels-container\">\r\n    <mat-card class=\"card-container\" id=\"neopixel-card\" *ngFor=\"let neopixel of neopixels\">\r\n      <mat-card-header>\r\n        {{neopixel.id}}\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"items-container items-container-row\">\r\n          <div id=\"pixel-container\" *ngFor=\"let pixel of neopixel.pixels\">\r\n            <button (click)=\"openPixelColorDialog()\" id=\"pixel\" mat-fab>\r\n              <mat-icon>color_lens</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <button (click)=\"openAddNeopixelDialog()\" id=\"add-button\" mat-fab color=\"primary\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-neopixel-dialog/add-neopixel-dialog.component */ "./src/app/dashboard/add-neopixel-dialog/add-neopixel-dialog.component.ts");
/* harmony import */ var _pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pixel-color-dialog/pixel-color-dialog.component */ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/neopixel/neopixel.service */ "./src/app/services/neopixel/neopixel.service.ts");
/* harmony import */ var src_app_services_neopixel_neopixel_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/neopixel/neopixel-data-source */ "./src/app/services/neopixel/neopixel-data-source.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(addNeopixelDialog, pixelColorDialog, neopixelService) {
        this.addNeopixelDialog = addNeopixelDialog;
        this.pixelColorDialog = pixelColorDialog;
        this.neopixelService = neopixelService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.neopixelDataSource = new src_app_services_neopixel_neopixel_data_source__WEBPACK_IMPORTED_MODULE_6__["NeopixelDataSource"](this.neopixelService);
        this.neopixelDataSource.connect().subscribe(function (neopixels) {
            _this.neopixels = neopixels;
            console.log(_this.neopixels);
        });
        this.neopixelDataSource.loadNeopixels();
    };
    DashboardComponent.prototype.openAddNeopixelDialog = function () {
        var _this = this;
        var dialogRef = this.addNeopixelDialog.open(_add_neopixel_dialog_add_neopixel_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddNeopixelDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (data) {
            _this.neopixelDataSource.loadNeopixels();
        });
    };
    DashboardComponent.prototype.openPixelColorDialog = function () {
        var dialogRef = this.pixelColorDialog.open(_pixel_color_dialog_pixel_color_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PixelColorDialogComponent"]);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_services_neopixel_neopixel_service__WEBPACK_IMPORTED_MODULE_5__["NeopixelService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#color-picker-container {\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9waXhlbC1jb2xvci1kaWFsb2cvcGl4ZWwtY29sb3ItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMiLCJmaWxlIjoiZGFzaGJvYXJkL3BpeGVsLWNvbG9yLWRpYWxvZy9waXhlbC1jb2xvci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2xvci1waWNrZXItY29udGFpbmVyIHtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\" id=\"color-picker-container\">\n  <app-color-picker></app-color-picker>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: PixelColorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelColorDialogComponent", function() { return PixelColorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PixelColorDialogComponent = /** @class */ (function () {
    function PixelColorDialogComponent() {
    }
    PixelColorDialogComponent.prototype.ngOnInit = function () {
    };
    PixelColorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pixel-color-dialog',
            template: __webpack_require__(/*! ./pixel-color-dialog.component.html */ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.html"),
            styles: [__webpack_require__(/*! ./pixel-color-dialog.component.css */ "./src/app/dashboard/pixel-color-dialog/pixel-color-dialog.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PixelColorDialogComponent);
    return PixelColorDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/color-picker/color-palette/color-palette.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-palette/color-palette.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-palette:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n:host {\r\n    width: 250px;\r\n    height: 250px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29sb3ItcGlja2VyL2NvbG9yLXBhbGV0dGUvY29sb3ItcGFsZXR0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0NBQ2xCIiwiZmlsZSI6Im1vZHVsZXMvY29sb3ItcGlja2VyL2NvbG9yLXBhbGV0dGUvY29sb3ItcGFsZXR0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBhbGV0dGU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/color-picker/color-palette/color-palette.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-palette/color-palette.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas\n  #canvas\n  class=\"color-palette\"\n  width=\"250\"\n  height=\"250\"\n  (mousedown)=\"onMouseDown($event)\"\n  (mousemove)=\"onMouseMove($event)\">\n</canvas>\n"

/***/ }),

/***/ "./src/app/modules/color-picker/color-palette/color-palette.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-palette/color-palette.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ColorPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPaletteComponent", function() { return ColorPaletteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorPaletteComponent = /** @class */ (function () {
    function ColorPaletteComponent() {
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.mousedown = false;
    }
    ColorPaletteComponent.prototype.ngOnInit = function () {
    };
    ColorPaletteComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    ColorPaletteComponent.prototype.ngOnChanges = function (changes) {
        if (changes['hue']) {
            this.draw();
            var pos = this.selectedPosition;
            if (pos) {
                this.color.emit(this.getColorAtPosition(pos.x, pos.y));
            }
        }
    };
    ColorPaletteComponent.prototype.draw = function () {
        if (!this.ctx) {
            this.ctx = this.canvas.nativeElement.getContext('2d');
        }
        var width = this.canvas.nativeElement.width;
        var height = this.canvas.nativeElement.height;
        this.ctx.fillStyle = this.hue || 'rgba(255, 255, 255, 1)';
        this.ctx.fillRect(0, 0, width, height);
        var whiteGrad = this.ctx.createLinearGradient(0, 0, width, 0);
        whiteGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        whiteGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = whiteGrad;
        this.ctx.fillRect(0, 0, width, height);
        var blackGrad = this.ctx.createLinearGradient(0, 0, 0, height);
        blackGrad.addColorStop(0, 'rgba(0,0,0,0)');
        blackGrad.addColorStop(1, 'rgba(0,0,0,1)');
        this.ctx.fillStyle = blackGrad;
        this.ctx.fillRect(0, 0, width, height);
        if (this.selectedPosition) {
            this.ctx.strokeStyle = 'white';
            this.ctx.fillStyle = 'white';
            this.ctx.beginPath();
            this.ctx.arc(this.selectedPosition.x, this.selectedPosition.y, 10, 0, 2 * Math.PI);
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
    };
    ColorPaletteComponent.prototype.onMouseUp = function (evt) {
        this.mousedown = false;
    };
    ColorPaletteComponent.prototype.onMouseDown = function (evt) {
        this.mousedown = true;
        this.selectedPosition = { x: evt.offsetX, y: evt.offsetY };
        this.draw();
        this.color.emit(this.getColorAtPosition(evt.offsetX, evt.offsetY));
    };
    ColorPaletteComponent.prototype.onMouseMove = function (evt) {
        if (this.mousedown) {
            this.selectedPosition = { x: evt.offsetX, y: evt.offsetY };
            this.draw();
            this.emitColor(evt.offsetX, evt.offsetY);
        }
    };
    ColorPaletteComponent.prototype.emitColor = function (x, y) {
        var rgbaColor = this.getColorAtPosition(x, y);
        this.color.emit(rgbaColor);
    };
    ColorPaletteComponent.prototype.getColorAtPosition = function (x, y) {
        var imageData = this.ctx.getImageData(x, y, 1, 1).data;
        return "rgba(" + imageData[0] + ", " + imageData[1] + ", " + imageData[2] + ", 1)";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPaletteComponent.prototype, "hue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorPaletteComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ColorPaletteComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorPaletteComponent.prototype, "onMouseUp", null);
    ColorPaletteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-palette',
            template: __webpack_require__(/*! ./color-palette.component.html */ "./src/app/modules/color-picker/color-palette/color-palette.component.html"),
            styles: [__webpack_require__(/*! ./color-palette.component.css */ "./src/app/modules/color-picker/color-palette/color-palette.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPaletteComponent);
    return ColorPaletteComponent;
}());



/***/ }),

/***/ "./src/app/modules/color-picker/color-picker.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/color-picker/color-picker.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.color-wrapper {\r\n    display: flex;\r\n    height: 250px;\r\n}\r\n.input-wrapper {\r\n    margin-top: 16px;\r\n    display: flex;\r\n    border-radius: 1px;\r\n    border: 1px solid rgb(220, 220, 220);\r\n    padding: 8px;\r\n    height: 32px;\r\n    justify-content: center;\r\n}\r\n.color-div {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 50%;\r\n    border: 1px solid rgb(220, 220, 220);\r\n}\r\n.text {\r\n    flex: 1;\r\n    font-family: 'Helvetica';\r\n    line-height: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztJQUNkLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0NBQ3hDO0FBRUQ7SUFDSSxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJtb2R1bGVzL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbG9yLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvci1kaXYge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/color-picker/color-picker.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/color-picker/color-picker.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-wrapper\">\n  <app-color-palette [hue]=\"hue\" (color)=\"color = $event\"></app-color-palette>\n  <app-color-slider (color)=\"hue=$event\" style=\"margin-left: 16px\"></app-color-slider>\n</div>\n<div class=\"input-wrapper\">\n  <span class=\"text\">{{color}}</span>\n  <div class=\"color-div\" [ngStyle]=\"{'background-color': color || 'white'}\"></div>\n</div>"

/***/ }),

/***/ "./src/app/modules/color-picker/color-picker.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/color-picker/color-picker.component.ts ***!
  \****************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
    };
    ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/modules/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.css */ "./src/app/modules/color-picker/color-picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/modules/color-picker/color-picker.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/color-picker/color-picker.module.ts ***!
  \*************************************************************/
/*! exports provided: ColorPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-picker.component */ "./src/app/modules/color-picker/color-picker.component.ts");
/* harmony import */ var _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-slider/color-slider.component */ "./src/app/modules/color-picker/color-slider/color-slider.component.ts");
/* harmony import */ var _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-palette/color-palette.component */ "./src/app/modules/color-picker/color-palette/color-palette.component.ts");






var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_color_picker_component__WEBPACK_IMPORTED_MODULE_3__["ColorPickerComponent"], _color_slider_color_slider_component__WEBPACK_IMPORTED_MODULE_4__["ColorSliderComponent"], _color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_5__["ColorPaletteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _color_picker_component__WEBPACK_IMPORTED_MODULE_3__["ColorPickerComponent"]
            ]
        })
    ], ColorPickerModule);
    return ColorPickerModule;
}());



/***/ }),

/***/ "./src/app/modules/color-picker/color-slider/color-slider.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-slider/color-slider.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-palette:hover {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29sb3ItcGlja2VyL2NvbG9yLXNsaWRlci9jb2xvci1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJtb2R1bGVzL2NvbG9yLXBpY2tlci9jb2xvci1zbGlkZXIvY29sb3Itc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItcGFsZXR0ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/color-picker/color-slider/color-slider.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-slider/color-slider.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas \n        class=\"color-slider\" \n        width=\"50\" \n        height=\"250\"\n        (mousedown)=\"onMouseDown($event)\"\n        (mousemove)=\"onMouseMove($event)\"></canvas>"

/***/ }),

/***/ "./src/app/modules/color-picker/color-slider/color-slider.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/color-picker/color-slider/color-slider.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ColorSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSliderComponent", function() { return ColorSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorSliderComponent = /** @class */ (function () {
    function ColorSliderComponent() {
        this.color = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mousedown = false;
    }
    ColorSliderComponent.prototype.ngOnInit = function () {
    };
    ColorSliderComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    ColorSliderComponent.prototype.draw = function () {
        if (!this.ctx) {
            this.ctx = this.canvas.nativeElement.getContext('2d');
        }
        var width = this.canvas.nativeElement.width;
        var height = this.canvas.nativeElement.height;
        this.ctx.clearRect(0, 0, width, height);
        var gradient = this.ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
        gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
        gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
        gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
        gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
        gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');
        this.ctx.beginPath();
        this.ctx.rect(0, 0, width, height);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.closePath();
        if (this.selectedHeight) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'white';
            this.ctx.lineWidth = 5;
            this.ctx.rect(0, this.selectedHeight - 5, width, 10);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    };
    ColorSliderComponent.prototype.onMouseDown = function (evt) {
        this.mousedown = true;
        this.selectedHeight = evt.offsetY;
        this.draw();
        this.emitColor(evt.offsetX, evt.offsetY);
    };
    ColorSliderComponent.prototype.onMouseMove = function (evt) {
        if (this.mousedown) {
            this.selectedHeight = evt.offsetY;
            this.draw();
            this.emitColor(evt.offsetX, evt.offsetY);
        }
    };
    ColorSliderComponent.prototype.onmouseup = function (evt) {
        this.mousedown = false;
    };
    ColorSliderComponent.prototype.emitColor = function (x, y) {
        var rgbaColor = this.getColorAtPosition(x, y);
        this.color.emit(rgbaColor);
    };
    ColorSliderComponent.prototype.getColorAtPosition = function (x, y) {
        var imageData = this.ctx.getImageData(x, y, 1, 1).data;
        return "rgba(" + imageData[0] + ", " + imageData[1] + ", " + imageData[2] + ", 1)";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ColorSliderComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorSliderComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorSliderComponent.prototype, "onmouseup", null);
    ColorSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-slider',
            template: __webpack_require__(/*! ./color-slider.component.html */ "./src/app/modules/color-picker/color-slider/color-slider.component.html"),
            styles: [__webpack_require__(/*! ./color-slider.component.css */ "./src/app/modules/color-picker/color-slider/color-slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorSliderComponent);
    return ColorSliderComponent;
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





var NeopixelService = /** @class */ (function () {
    function NeopixelService(http) {
        this.http = http;
    }
    NeopixelService.prototype.createNeopixel = function (newNeoPixel) {
        return this.http
            .post("http://192.168.0.106:5000/api/strip?pin=" + newNeoPixel.gpioPin + "&num_pixels=" + newNeoPixel.numPixels, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleObservableError));
    };
    NeopixelService.prototype.getNeopixels = function () {
        return this.http
            .get('http://192.168.0.106:5000/api/strip')
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
var environment = {
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