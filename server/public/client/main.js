(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\codegym\newFinalModule\homeEstate\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ "88DV");
/* harmony import */ var _estates_list_estates_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estates-list/estates-list.component */ "mFGa");
/* harmony import */ var _shared_components_highlights_blogs_highlights_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/highlights-blogs/highlights-blogs.component */ "xaqy");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-estates-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-highlights-blogs");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _estates_list_estates_list_component__WEBPACK_IMPORTED_MODULE_2__["EstatesListComponent"], _shared_components_highlights_blogs_highlights_blogs_component__WEBPACK_IMPORTED_MODULE_3__["HighlightsBlogsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "88DV":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 11, vars: 0, consts: [[1, "banner-wrapper"], ["id", "banner"], ["src", "assets/images/homebanner1.jpg", "alt", "", 1, "banner-img"], [1, "banner", "banner__info"], [1, "banner-title"], [1, "banner-search"], ["action", "#"], ["type", "text", "placeholder", "Search for City...", "name", "search"], ["type", "submit"], [1, "fa", "fa-search"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discover a place you'll love to live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#banner[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin-top: 12vh;\n}\n#banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 7px;\n  opacity: 0.7;\n}\n#banner[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 1.5px 3px rgba(31, 72, 105, 0.7);\n  font-size: 3.5rem;\n  font-weight: bolder;\n  letter-spacing: 0.1rem;\n}\n#banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n#banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 4.5rem;\n  width: 4.5rem;\n  border-radius: 0 8px 8px 0;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: #e03232;\n}\n#banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 1.4rem;\n}\n#banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 4.5rem;\n  width: 38rem;\n  border-radius: 8px 0 0 8px;\n  border: 2px solid white;\n  outline: none;\n}\n#banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  padding: 3rem 0 0 1rem;\n  font-size: 2rem;\n  letter-spacing: 2px;\n}\n.banner-wrapper[_ngcontent-%COMP%] {\n  background-color: #000000;\n  border-radius: 7px;\n}\n@media screen and (max-width: 1200px) {\n  #banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    font-weight: bolder;\n    letter-spacing: 0.1rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 4rem;\n    width: 4rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: bolder;\n    font-size: 1.1rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 4rem;\n    width: 23rem;\n    border: 2px solid white;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n  }\n}\n@media screen and (max-width: 1065px) {\n  #banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 3.5rem;\n    width: 3.5rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 3.5rem;\n    width: 20rem;\n    border: 2px solid white;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    font-size: 1rem;\n    letter-spacing: 2px;\n  }\n}\n@media screen and (max-width: 905px) {\n  #banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: bolder;\n    font-size: 1.1rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 2.5rem;\n    width: 18rem;\n    border: 2px solid white;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    font-size: 0.8rem;\n    letter-spacing: 2px;\n  }\n}\n@media screen and (max-width: 747px) {\n  #banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 2rem;\n    width: 2rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: bolder;\n    font-size: 1rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 2rem;\n    width: 15rem;\n    border: 2px solid white;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    font-size: 0.8rem;\n    letter-spacing: 2px;\n  }\n}\n@media screen and (max-width: 588px) {\n  #banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 1.8rem;\n    width: 1.8rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: bolder;\n    font-size: 0.8rem;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 1.8rem;\n    width: 13rem;\n    border: 2px solid white;\n  }\n  #banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    font-size: 0.7rem;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7QUFGSjtBQU1FO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBTEo7QUFRRTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBVUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUVBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7QUFWTjtBQVlNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQVZSO0FBZUk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUVBLDBCQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0FBZk47QUFpQk07RUFDRSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQXVCQTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7QUFyQkY7QUF5QkE7RUFHSztJQUNDLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VBeEJKO0VBOEJJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUE1Qk47RUErQk07SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VBN0JSO0VBa0NJO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQWhDTjtFQW1DTTtJQUVFLGlCQUFBO0lBQ0EsbUJBQUE7RUFsQ1I7QUFDRjtBQXdDQTtFQUdJO0lBQ0UsaUJBQUE7RUF4Q0o7RUE4Q0k7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQTVDTjtFQStDTTtJQUNFLGVBQUE7RUE3Q1I7RUFrREk7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBaEROO0VBbURNO0lBRUUsZUFBQTtJQUNBLG1CQUFBO0VBbERSO0FBQ0Y7QUF5REE7RUFHSTtJQUNFLGVBQUE7RUF6REo7RUErREk7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQTdETjtFQWdFTTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUE5RFI7RUFtRUk7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBakVOO0VBb0VNO0lBRUUsaUJBQUE7SUFDQSxtQkFBQTtFQW5FUjtBQUNGO0FBMEVBO0VBR0k7SUFDRSxpQkFBQTtFQTFFSjtFQWdGSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBOUVOO0VBZ0ZNO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBOUVSO0VBbUZJO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQWpGTjtFQXFGTTtJQUVFLGlCQUFBO0lBQ0EsbUJBQUE7RUFwRlI7QUFDRjtBQTBGQTtFQUdJO0lBQ0UsaUJBQUE7RUExRko7RUFnR0k7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQTlGTjtFQWdHTTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUE5RlI7RUFtR0k7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBakdOO0VBbUdNO0lBRUUsaUJBQUE7SUFDQSxtQkFBQTtFQWxHUjtBQUNGIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEydmg7XHJcblxyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcblxyXG4gIH1cclxuXHJcbiAgJiAuYmFubmVyIHtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuXHJcbiAgJiAuYmFubmVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAzcHggcmdiYSgzMSw3MiwxMDUsIDAuNyk7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG5cclxuICB9XHJcblxyXG4gICYgLmJhbm5lci1zZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgICB3aWR0aDogNC41cmVtO1xyXG5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwMzIzMjtcclxuXHJcbiAgICAgICYgaSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmIGlucHV0IHtcclxuICAgICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICAgIHdpZHRoOiAzOHJlbTtcclxuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMXJlbTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYmFubmVyLXdyYXBwZXIge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAjYmFubmVyIHtcclxuICAgICAuYmFubmVyLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgLmJhbm5lci1zZWFyY2gge1xyXG5cclxuICAgICAgJiBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICB3aWR0aDogNHJlbTtcclxuXHJcblxyXG4gICAgICAgICYgaSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgJiBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIHdpZHRoOiAyM3JlbTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuXHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDY1cHgpIHtcclxuXHJcbiAgI2Jhbm5lciB7XHJcbiAgICAuYmFubmVyLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItc2VhcmNoIHtcclxuXHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICB3aWR0aDogMy41cmVtO1xyXG5cclxuXHJcbiAgICAgICAgJiBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAmIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblxyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcblxyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDVweCkge1xyXG5cclxuICAjYmFubmVyIHtcclxuICAgIC5iYW5uZXItdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItc2VhcmNoIHtcclxuXHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICB3aWR0aDogMi41cmVtO1xyXG5cclxuXHJcbiAgICAgICAgJiBpIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAmIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblxyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcblxyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0N3B4KSB7XHJcblxyXG4gICNiYW5uZXIge1xyXG4gICAgLmJhbm5lci10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyLXNlYXJjaCB7XHJcblxyXG4gICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAmIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuXHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODhweCkge1xyXG5cclxuICAjYmFubmVyIHtcclxuICAgIC5iYW5uZXItdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lci1zZWFyY2gge1xyXG5cclxuICAgICAgJiBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XHJcblxyXG4gICAgICAgICYgaSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAmIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuXHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL1xyXG4vL0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNHB4KSB7XHJcbi8vXHJcbi8vICAjYmFubmVyIHtcclxuLy8gICAgLmJhbm5lci10aXRsZSB7XHJcbi8vICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbi8vXHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy99XHJcbi8vXHJcbi8vXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk0cHgpIHtcclxuLy9cclxuLy8gICNiYW5uZXIge1xyXG4vLyAgICAuYmFubmVyLXRpdGxlIHtcclxuLy8gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuLy9cclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vL31cclxuXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuLy9cclxuLy8gICNiYW5uZXIge1xyXG4vLyAgICAuYmFubmVyLXRpdGxlIHtcclxuLy8gICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vXHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgLmJhbm5lci1zZWFyY2gge1xyXG4vLyAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuLy9cclxuLy8gICAgICAmIGJ1dHRvbiB7XHJcbi8vICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuLy8gICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbi8vXHJcbi8vICAgICAgICAmIGkge1xyXG4vLyAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICYgaW5wdXQge1xyXG4vLyAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbi8vICAgICAgICB3aWR0aDogMTJyZW07XHJcbi8vICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuLy9cclxuLy8gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbi8vICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcbi8vICB9XHJcbi8vXHJcbi8vfVxyXG4vL1xyXG4vL1xyXG4vL0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyOXB4KSB7XHJcbi8vXHJcbi8vICAjYmFubmVyIHtcclxuLy8gICAgLmJhbm5lci10aXRsZSB7XHJcbi8vICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH1cclxuLy99XHJcbi8vXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcclxuLy9cclxuLy8gICNiYW5uZXIge1xyXG4vLyAgICAuYmFubmVyLXRpdGxlIHtcclxuLy8gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuLy9cclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICAuYmFubmVyLXNlYXJjaCB7XHJcbi8vXHJcbi8vICAgICAgJiBidXR0b24ge1xyXG4vLyAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4vLyAgICAgICAgd2lkdGg6IDFyZW07XHJcbi8vXHJcbi8vICAgICAgICAmIGkge1xyXG4vLyAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgJiBpbnB1dCB7XHJcbi8vICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbi8vICAgICAgICB3aWR0aDogOXJlbTtcclxuLy8gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4vL1xyXG4vLyAgICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICB9XHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy9cclxuLy99XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "BX34":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_awesome_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/awesome.service */ "xf6g");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "rj1t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "oZhZ");















function NavComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx_r4.open(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign up or Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_21_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_21_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r1.ownerName$), "");
} }
function NavComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_ng_template_22_Template_span_click_4_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavComponent_ng_template_22_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "bfv-messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_ng_template_22_Template_span_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.goToRegisterPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Register here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.error, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.formLogin.valid);
} }
class NavComponent {
    constructor(modalService, formBuilder, Awesome, Token, router, Auth) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.Awesome = Awesome;
        this.Token = Token;
        this.router = router;
        this.Auth = Auth;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.closeResult = '';
        this.token = '';
        this.error = null;
    }
    ngOnInit() {
        this.token = localStorage.getItem('token');
        this.Auth.authStatus.subscribe(value => this.loggedIn = value);
        this.formLogin = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    get ownerName$() {
        return this.Auth.owner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('name'));
    }
    ngAfterViewInit() {
        if (this.loggedIn) {
            this.prepareDropDown();
        }
    }
    // tslint:disable-next-line:typedef
    toggle() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.header .header__nav-bar .header__nav-list ul');
        const bar = document.querySelector('.bar');
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        bar.classList.toggle('active');
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    submitLogin() {
        const { email, password } = this.formLogin.value;
        this.Auth.login(email, password).subscribe(data => {
            this.handleLogInSuccess(data);
            document.getElementById('clsBtn').click();
        }, error => this.handleError(error));
    }
    goProfile() {
        this.Awesome.goProfile(this.token).subscribe(data => {
            this.owner = data;
            this.router.navigateByUrl('profile');
        });
    }
    handleLogInSuccess(data) {
        this.Token.handle(data.token);
        this.Auth.changeAuthStatus(true);
        localStorage.setItem('loggedUser', data.owner.name);
        localStorage.setItem('owner', JSON.stringify(data.owner));
        this.prepareDropDown();
    }
    handleError(error) {
        this.error = error.error.error;
    }
    logout(event) {
        event.preventDefault();
        this.Token.remove();
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('owner');
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('');
    }
    goToRegisterPage() {
        document.getElementById('clsBtn').click();
        this.router.navigateByUrl('signup');
    }
    prepareDropDown() {
        setTimeout(() => {
            document.querySelector('.submenu').addEventListener('mouseover', () => {
                document.querySelector('.dropdown__content').classList.add('show');
            });
            document.querySelector('.submenu').addEventListener('mouseout', () => {
                document.querySelector('.dropdown__content').classList.remove('show');
            });
        }, 0);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_awesome_service__WEBPACK_IMPORTED_MODULE_5__["AwesomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 24, vars: 2, consts: [["id", "header"], [1, "header", "header-container"], [1, "header__nav-bar"], [1, "header__brand"], ["href", "#hero"], ["src", "assets/images/homeLogo.png", "alt", ""], [1, "header__nav-list"], [1, "hamburger", 3, "click"], [1, "bar"], ["routerLink", "", "data-after", "Home"], ["routerLink", "estatesList", "data-after", "Home"], ["routerLink", "estateDetail", "data-after", "Blogs"], [2, "cursor", "pointer"], ["id", "loginLogout", "data-after", "Clients", 3, "click", 4, "ngIf"], ["class", "submenu", 4, "ngIf"], ["content", ""], ["id", "loginLogout", "data-after", "Clients", 3, "click"], [1, "submenu"], [1, "dropdown__btn"], [3, "icon"], [1, "dropdown__content"], [1, "dropdown__item", 3, "click"], [1, "modal-wrapper"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["id", "clsBtn", "aria-hidden", "true", 1, "modalCloseBtn", 3, "click"], [1, "modal-body"], [1, "login_form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Email", "name", "email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "required", "", 1, "form-control"], [1, "text-danger", 3, "hidden"], ["type", "submit", 1, "loginBtn", 3, "disabled"], [1, "modal-footer"], [1, "regisLink"], [3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_div_click_7_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buy a Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavComponent_a_20_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavComponent_div_21_Template, 10, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavComponent_ng_template_22_Template, 26, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["FormValidationDirective"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["FormGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["#header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: auto;\n}\n#header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  min-height: 8vh;\n  background-color: white;\n  transition: 0.5s ease background-color;\n}\n#header[_ngcontent-%COMP%]   .header__brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-left: 4rem;\n}\n#header[_ngcontent-%COMP%]   .header__nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  max-width: 1300px;\n  padding: 0 10px;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  position: absolute;\n  background-color: rgba(145, 145, 145, 0.8);\n  width: 100vw;\n  height: 100vh;\n  left: 100%;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  overflow-x: hidden;\n  transition: 0.5s ease left;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #loginLogout[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e2e2;\n  border-radius: 10px;\n  padding: 7px;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #loginLogout[_ngcontent-%COMP%]:hover {\n  background-color: #e2e2e2;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%] {\n  left: 0;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 7px;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  text-decoration: none;\n  color: black;\n  display: block;\n  padding: 6px 20px;\n}\n#header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e2e2e2;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  border: 3px solid black;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  cursor: pointer;\n  transform: scale(0.8);\n  margin-right: 20px;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 3px solid black;\n  animation: hamburger_puls 1s ease infinite;\n}\n#header[_ngcontent-%COMP%]   .hamburger.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  bottom: 0;\n}\n#header[_ngcontent-%COMP%]   .hamburger.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after {\n  top: 0;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 30px;\n  position: relative;\n  background-color: black;\n  z-index: -1;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  background-color: black;\n  transition: 0.3s ease;\n  transition-property: top, bottom;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  background-color: black;\n  transition: 0.3s ease;\n  transition-property: top, bottom;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after {\n  top: 8px;\n}\n#header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  bottom: 8px;\n}\n@media screen and (min-width: 1200px) {\n  #header[_ngcontent-%COMP%]   .dropdown__content[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    left: 82%;\n    text-align: left;\n    border-radius: 3px;\n  }\n  #header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: initial;\n    display: block;\n    height: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    background-color: transparent;\n    color: black;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding: 7px 15px 8px 15px;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.dropdown__item):hover {\n    color: white;\n    border-radius: 10px;\n    background-color: #409598;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #loginLogout[_ngcontent-%COMP%] {\n    color: black;\n    cursor: pointer;\n  }\n  #header[_ngcontent-%COMP%]   .header__nav-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@keyframes hamburger_puls {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n.modal-wrapper[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.modalCloseBtn[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: white;\n  cursor: pointer;\n  padding: 3px 6px;\n  border-radius: 50%;\n  background-color: #D0D9D9;\n}\n.modalCloseBtn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin-left: 35%;\n}\n.loginBtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 15%;\n  padding: 7px 120px;\n  background-color: #007882;\n  color: white;\n  border-radius: 5px;\n}\n.loginBtn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #007882;\n  border: 0.5px solid #007882;\n}\n.regisLink[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.regisLink[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #3F9CEC;\n}\n.dropdown__content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: rgba(145, 145, 145, 0.1);\n  z-index: 999;\n  min-width: 200px;\n  left: 40%;\n  text-align: center;\n}\n.show[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 10px;\n}\n.dropdown__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxlQUFBO0VBQ0EsYUFBQTtFQUVBLE9BQUE7RUFDQSxNQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7QUFIRjtBQU1FO0VBQ0UsZUFBQTtFQUVBLHVCQUFBO0VBRUEsc0NBQUE7QUFOSjtBQVNNO0VBQ0UsWUFBQTtFQUVBLGlCQUFBO0FBUlI7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFaTjtBQWlCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtFQUNBLE1BQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFuQlI7QUFxQlE7RUFDRSwyQkFBQTtFQUVBLG1CQUFBO0VBRUEsWUFBQTtBQXJCVjtBQXVCVTtFQUNFLHlCQUFBO0FBckJaO0FBeUJRO0VBQ0UsT0FBQTtBQXZCVjtBQTBCUTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQXpCVjtBQTBCVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtBQTFCWjtBQTRCVTtFQUNFLHlCQUFBO0FBMUJaO0FBa0NFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFHQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXBDSjtBQXNDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0FBdENOO0FBMENNO0VBQ0UsU0FBQTtBQXhDUjtBQTJDTTtFQUNFLE1BQUE7QUF6Q1I7QUE2Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0FBN0NOO0FBK0NNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBL0NSO0FBa0RNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBbERSO0FBcURNO0VBQ0UsUUFBQTtBQW5EUjtBQXNETTtFQUNFLFdBQUE7QUFwRFI7QUEyREU7RUFFRTtJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwrQ0FBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBMURKO0VBOERHO0lBQ0MsYUFBQTtFQTVESjtFQWlFSTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSw2QkFBQTtJQUVBLFlBQUE7RUFoRU47RUFrRU07SUFDRSxxQkFBQTtFQWhFUjtFQWtFUTtJQUNFLGVBQUE7SUFDQSwwQkFBQTtFQWhFVjtFQW1FUTtJQUNFLFlBQUE7SUFFQSxtQkFBQTtJQUNBLHlCQUFBO0VBbEVWO0VBcUVRO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUFuRVY7RUF1RU87SUFDQyxhQUFBO0VBckVSO0FBQ0Y7QUE0RUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQXpFRjtFQTJFQTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQXpFRjtBQUNGO0FBNEVBO0VBQ0UsYUFBQTtBQTFFRjtBQTZFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQTNFRjtBQTRFSTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQTFFTjtBQThFQTtFQUNFLGdCQUFBO0FBM0VGO0FBOEVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTNFRjtBQTRFRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBMUVKO0FBK0VBO0VBQ0UsaUJBQUE7QUE1RUY7QUE2RUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTNFSjtBQWdGQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBN0VGO0FBK0VBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBNUVGO0FBK0VBO0VBQ0UsY0FBQTtBQTVFRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2hlYWRlciB7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogOHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlIGJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgJl9fYnJhbmQge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19uYXYtYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICZfX25hdi1saXN0IHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC44KTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UgbGVmdDtcclxuXHJcbiAgICAgICAgbGkgI2xvZ2luTG9nb3V0IHtcclxuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgI2UyZTJlMjtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuaGFtYnVyZ2VyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBhbmltYXRpb246IGhhbWJ1cmdlcl9wdWxzIDFzIGVhc2UgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAmIC5iYXI6OmJlZm9yZSB7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmIC5iYXI6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFyIHtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG5cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgICAuZHJvcGRvd25fX2NvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgbGVmdDogODIlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIC5oZWFkZXIge1xyXG4gICAgICAmX19uYXYtbGlzdCB1bCB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDE1cHggOHB4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpub3QoLmRyb3Bkb3duX19pdGVtKTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDk1OTg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2xvZ2luTG9nb3V0IHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhhbWJ1cmdlcl9wdWxzIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi5tb2RhbENsb3NlQnRuIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QwRDlEOTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcbi5sb2dpbkJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgcGFkZGluZzogN3B4IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjAsIDEzMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYigwLCAxMjAsIDEzMCk7XHJcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDAsIDEyMCwgMTMwKSA7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnJlZ2lzTGluayB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzNGOUNFQztcclxuICB9XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd25fX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC4xKTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBsZWZ0OiA0MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaG93IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd25fX2NvbnRlbnQgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_awesome_service__WEBPACK_IMPORTED_MODULE_5__["AwesomeService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "KOYL":
/*!********************************************!*\
  !*** ./src/app/services/estate.service.ts ***!
  \********************************************/
/*! exports provided: EstateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateService", function() { return EstateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const API = "http://127.0.0.1/api/estate/";
class EstateService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${API}listEstate`);
    }
}
EstateService.ɵfac = function EstateService_Factory(t) { return new (t || EstateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EstateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EstateService, factory: EstateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NuOl":
/*!****************************************************************!*\
  !*** ./src/app/pages/estate-detail/estate-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: EstateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateDetailComponent", function() { return EstateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "oZhZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function EstateDetailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function EstateDetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
function EstateDetailComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function EstateDetailComponent_app_read_more_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-read-more", 26);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", item_r4)("limit", 120)("completeWords", true);
} }
class EstateDetailComponent {
    constructor(config) {
        this.items = ['By proceeding, you consent to receive calls and texts at the number you provided, including marketing by autodialer and prerecorded and artificial voice, and email, from realtor.com and others about your inquiry and other home-related matters, but not as a condition of any purchase; this applies regardless of whether you check, or leave un-checked, any box above. You also agree to our Terms of Use, and to our Privacy Policy regarding the information relating to you. Msg/data rates may apply. This consent applies even if you are on a corporate, state or national Do Not Call list.'];
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
}
EstateDetailComponent.ɵfac = function EstateDetailComponent_Factory(t) { return new (t || EstateDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
EstateDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstateDetailComponent, selectors: [["app-estate-detail"]], decls: 54, vars: 1, consts: [["id", "estatesDetail"], [1, "row"], [1, "col-12", "col-sm-8", "slideEstate"], ["ngbSlide", ""], [1, "col-12", "col-sm-4", "formEstate"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "id", "name", "placeholder", "Full Name", "required", "", 1, "form-control"], [1, "fas", "fa-envelope"], ["type", "email", "id", "email", "placeholder", "Email", "required", "", 1, "form-control"], [1, "fas", "fa-phone"], ["type", "text", "id", "phone", "placeholder", "Phone", "required", "", 1, "form-control"], ["aria-label", "With textarea", "placeholder", "I am interested in this house...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [3, "content", "limit", "completeWords", 4, "ngFor", "ngForOf"], [1, "row", "estate-info"], [1, "col-5", "estate-text"], [1, "estate-price"], [1, "estate-address"], [1, "col-5", "estate-map"], ["src", "./assets/images/homecover1.jpg", "alt", "Delhi Metro"], ["src", "./assets/images/homecover1.jpg", "alt", "Bangalore Metro"], ["src", "./assets/images/homecover1.jpg", "alt", "Channai Metro"], [3, "content", "limit", "completeWords"]], template: function EstateDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EstateDetailComponent_ng_template_4_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EstateDetailComponent_ng_template_5_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EstateDetailComponent_ng_template_6_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "More about this property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EstateDetailComponent_app_read_more_33_Template, 1, 3, "app-read-more", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "$ 1,098,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Bath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "3.555 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "sqft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "447 Girard St, San Francisco, CA, 94134");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " sasasa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__["FormGroupComponent"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#estatesDetail[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n#estatesDetail[_ngcontent-%COMP%]   .slideEstate[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n#estatesDetail[_ngcontent-%COMP%]   .slideEstate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%] {\n  background-color: #dfe6e9;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  line-height: 2rem;\n  text-align: center;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 1.3rem;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 1.3rem;\n}\n#estatesDetail[_ngcontent-%COMP%]   .formEstate[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #cd3333;\n  border-radius: 18px;\n  border: none;\n  padding: 0.7rem 5rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.estate-info[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.estate-info[_ngcontent-%COMP%]   .estate-text[_ngcontent-%COMP%]   .estate-price[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: bolder;\n}\n.estate-info[_ngcontent-%COMP%]   .estate-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  padding-right: 2rem;\n}\n.estate-info[_ngcontent-%COMP%]   .estate-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.estate-info[_ngcontent-%COMP%]   .estate-text[_ngcontent-%COMP%]   .estate-address[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlc3RhdGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNJLGdCQUFBO0FBQU47QUFDTTtFQUNFLFdBQUE7QUFDUjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFJTTtFQUNFLGVBQUE7QUFGUjtBQUtNO0VBQ0UsaUJBQUE7QUFIUjtBQU1NO0VBQ0UsaUJBQUE7QUFKUjtBQVFNO0VBQ0UseUJBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQWtCQTtFQUNFLGtCQUFBO0FBZkY7QUFpQks7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBZlA7QUFrQks7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBaEJQO0FBa0JRO0VBQ0UsbUJBQUE7QUFoQlY7QUFvQks7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQlAiLCJmaWxlIjoiZXN0YXRlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlc3RhdGVzRGV0YWlsIHtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG5cclxuICAuc2xpZGVFc3RhdGUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybUVzdGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU5O1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtZ3JvdXAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2QzMzMzO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDVyZW07XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLy89PT09PT09PT09PT0gRVNUQVRFIElORk9STUFUSU9OXHJcblxyXG4uZXN0YXRlLWluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgLmVzdGF0ZS10ZXh0IHtcclxuICAgICAuZXN0YXRlLXByaWNlIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICB9XHJcblxyXG4gICAgIHNwYW4ge1xyXG4gICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICAuZXN0YXRlLWFkZHJlc3Mge1xyXG4gICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICB9XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstateDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estate-detail',
                templateUrl: './estate-detail.component.html',
                styleUrls: ['./estate-detail.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav/nav.component */ "BX34");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");





class AppComponent {
    constructor() {
        this.title = 'Hello App';
        console.log('reload');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[2, "margin", "1rem 2rem 0 2rem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProfileComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.auth.owner$.subscribe(owner => this.owner = owner);
        console.log(this.owner);
    }
    backToHome() {
        this.router.navigateByUrl('');
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 24, vars: 3, consts: [["id", "profile"], [1, "profile"], [1, "profile__header"], [1, "profile__body"], [1, "profile__info"], [1, "profile__tag"], [1, "profile__detail"], [1, "profile__backBtn"], [1, "backBtn", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_22_listener() { return ctx.backToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.owner.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.owner.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.owner.address);
    } }, styles: ["#profile[_ngcontent-%COMP%] {\n  margin-top: 25vh;\n  padding: 20px 30px;\n}\n\n.profile__header[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #E1E4E5;\n}\n\n.profile__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #3b4144;\n}\n\n.profile__body[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-bottom: 0.5px solid #E1E4E5;\n}\n\n.profile__info[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.profile__tag[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  opacity: 0.6;\n}\n\n.profile__backBtn[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: right;\n}\n\na.backBtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: white;\n  padding: 10px 15px;\n  background-color: #ff7857;\n  border: #ff7857;\n  border-radius: 5px;\n}\n\na.backBtn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: white;\n}\n\n@media screen and (min-width: 960px) {\n  .profile__info[_ngcontent-%COMP%] {\n    flex-direction: row;\n    margin-left: 25%;\n  }\n  .profile__detail[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    margin-top: -3.5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdFO0VBQ0Usa0NBQUE7QUFBSjs7QUFDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUVJO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQUhKO0VBTUU7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBSko7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUge1xyXG4gIG1hcmdpbi10b3A6IDI1dmg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4ICA7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAmX19oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjRTFFNEU1O1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGNvbG9yOiAjM2I0MTQ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkICNFMUU0RTU7XHJcbiAgfVxyXG4gICZfX2luZm97XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgJl9fdGFnIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZV9fYmFja0J0biB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbn1cclxuXHJcbmEuYmFja0J0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzg1NztcclxuICBib3JkZXI6ICNmZjc4NTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgLnByb2ZpbGUge1xyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcblxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zLjVweDtcclxuICAgIH1cclxuICAgICZfX3RhZyB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/nav/nav.component */ "BX34");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _pages_estate_detail_estate_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/estate-detail/estate-detail.component */ "NuOl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "oZhZ");
/* harmony import */ var _services_awesome_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/awesome.service */ "xf6g");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/token.service */ "rj1t");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");







// tslint:disable-next-line:import-spacing












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_awesome_service__WEBPACK_IMPORTED_MODULE_12__["AwesomeService"], _services_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"].forRoot(),
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_estate_detail_estate_detail_component__WEBPACK_IMPORTED_MODULE_6__["EstateDetailComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _pages_estate_detail_estate_detail_component__WEBPACK_IMPORTED_MODULE_6__["EstateDetailComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"].forRoot(),
                    ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_11__["NgBootstrapFormValidationModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
                ],
                providers: [_services_awesome_service__WEBPACK_IMPORTED_MODULE_12__["AwesomeService"], _services_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "social"], [1, "logoHome"], ["src", "assets/images/homeLogo.png", "alt", ""], [1, "social-icon"], ["href", "#"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "fab", "fa-pinterest"], [1, "intro"], [1, "intro_company"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "THS Group Limited trading as The House Shop is an appointed representative of ITC Compliance Limited which is authorised and regulated by the Financial Conduct Authority (their registration number is 313486) and which is permitted to advise on and arrange general insurance contracts and acting as a credit broker not a lender. We can introduce you to a limited number of finance providers and may receive differing levels of commission from each of them for the introduction. All finance applications are subject to status, terms and conditions apply, UK residents only, 18\u2019s or over, Guarantees may be required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Copyright \u00A9 2018 THS Group LTD Registered in England and Wales - 09952974, VAT 234015745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Privacy Policy | Terms & Conditions | Cookie Policy | Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  padding: 1rem 1rem 0 1rem;\n  background-color: #efecec;\n  display: flex;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .logoHome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-right: 4rem;\n  color: black;\n}\nfooter[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .intro_company[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  font-weight: 400;\n}\nfooter[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n  margin: 2rem 0;\n}\nfooter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background-color: #9b5555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLHlCQUFBO0VBRUEseUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUlJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlPO0VBQ0UsWUFBQTtBQUZUO0FBS1E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtBQUpWO0FBVU07RUFDRSxnQkFBQTtFQUVBLGdCQUFBO0FBVFI7QUFXTTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxjQUFBO0FBWFI7QUFlRTtFQUNFLHlCQUFBO0FBYkoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG5cclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlY2VjO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAubG9nb0hvbWUgaW1nIHtcclxuICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFsLWljb24gYXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG5cclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAuaW50cm8ge1xyXG4gICAgICAuaW50cm9fY29tcGFueSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI1NTU1O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






const URI = 'http://localhost:8000/api/auth';
class AuthService {
    constructor(Token, http) {
        this.Token = Token;
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.Token.loggedIn());
        this.owner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.authStatus = this.loggedIn.asObservable();
        // Fetch Owner Data From Local Storage While Service initial
        this.fetchOwnerFromLS();
    }
    get owner$() {
        return this.owner;
    }
    changeAuthStatus(value) {
        this.loggedIn.next(value);
    }
    fetchOwnerFromLS() {
        const ownerStr = localStorage.getItem('owner');
        const owner = ownerStr ? JSON.parse(ownerStr) : null;
        this.owner.next(owner);
    }
    login(email, password) {
        const body = {
            email,
            password
        };
        return this.http.post(`${URI}/login`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            this.owner.next(res.owner);
        }));
    }
    signUp(signUpData) {
        return this.http.post(`${URI}/register`, signUpData);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mFGa":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/estates-list/estates-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EstatesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatesListComponent", function() { return EstatesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_estate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/estate.service */ "KOYL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EstatesListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " bed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " bath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " sqft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estate_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estate_r1.bedroom_nums);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estate_r1.bathroom_nums);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estate_r1.floor_space);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estate_r1.address);
} }
class EstatesListComponent {
    constructor(estateService) {
        this.estateService = estateService;
        this.estatesList = [];
    }
    ngOnInit() {
        this.estateService.getAll().subscribe(res => {
            this.estatesList = res;
        });
    }
}
EstatesListComponent.ɵfac = function EstatesListComponent_Factory(t) { return new (t || EstatesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_estate_service__WEBPACK_IMPORTED_MODULE_1__["EstateService"])); };
EstatesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstatesListComponent, selectors: [["app-estates-list"]], decls: 7, vars: 5, consts: [["id", "estateList"], ["href", "#"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "card"], [1, "imgEstate"], ["src", "https://ap.rdcpix.com/24bd4fa02b71e594f938ec149ade1700l-m3307468014od-w1024_h768.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "estatesPrice"], [1, "card-body"], [1, "card-text"], [1, "info"], [1, "number"]], template: function EstatesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Listings in San Francisco, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View All 310 New Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EstatesListComponent_div_5_Template, 24, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 1, ctx.estatesList, 0, 3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["#estateList[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n#estateList[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n#estateList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n#estateList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n#estateList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-top: none;\n}\n#estateList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n#estateList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n#estateList[_ngcontent-%COMP%]   .imgEstate[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  background-color: #000000;\n  border-radius: 7px 7px 0 0;\n  overflow: hidden;\n}\n#estateList[_ngcontent-%COMP%]   .imgEstate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n#estateList[_ngcontent-%COMP%]   .imgEstate[_ngcontent-%COMP%]   .estatesPrice[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  color: white;\n  font-size: 2.5rem;\n  font-weight: bolder;\n  letter-spacing: 1px;\n}\n#estateList[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n@media screen and (max-width: 767px) {\n  .col-12[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  .col-12[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n    width: 60%;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXN0YXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7QUFETjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQUlNO0VBQ0UsZ0JBQUE7QUFGUjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBUUk7RUFDRSxZQUFBO0FBTk47QUFXSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0FBWE47QUFlRTtFQUNFLDRDQUFBO0FBYko7QUFpQkE7RUFFRTtJQUNFLG1CQUFBO0VBZkY7QUFDRjtBQW1CQTtFQUNFO0lBQ0UsZUFBQTtJQUVBLFVBQUE7SUFFQSxtQkFBQTtFQW5CRjtBQUNGIiwiZmlsZSI6ImVzdGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlc3RhdGVMaXN0IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG5cclxuICAmIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAmIC5yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAmIC5jYXJkIHtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmIC5jYXJkLXRleHQgLmluZm8ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAmIC5udW1iZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWdFc3RhdGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblxyXG4gICAgJiBpbWcge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJiAuZXN0YXRlc1ByaWNlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDhweDtcclxuICAgICAgbGVmdDogMTZweDtcclxuXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jb2wtMTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jb2wtMTIge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstatesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estates-list',
                templateUrl: './estates-list.component.html',
                styleUrls: ['./estates-list.component.scss']
            }]
    }], function () { return [{ type: _services_estate_service__WEBPACK_IMPORTED_MODULE_1__["EstateService"] }]; }, null); })();


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "rj1t");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "oZhZ");








class SignupComponent {
    constructor(formBuilder, router, Token, Auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.Token = Token;
        this.Auth = Auth;
        this.error = null;
        this.token = '';
    }
    ngOnInit() {
        this.formSignUp = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password_confirmation: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    submitSignUp() {
        this.Auth.signUp(this.formSignUp.value).subscribe(data => {
            this.loginFromSignup();
            alert('Signup successfully');
            this.router.navigateByUrl('');
        }, error => {
            const errors = error.error;
            // console.log(errors);
            const errorMessage = errors.reduce((mes, errObj) => mes + Object.values(errObj).reduce((itemMes, errList) => itemMes + errList.join(''), ''), '');
            // console.log(errorMessage);
            this.error = errorMessage;
        });
    }
    loginFromSignup() {
        const { email, password } = this.formSignUp.value;
        this.Auth.login(email, password).subscribe(data => {
            this.handleLogInSuccess(data);
        });
    }
    handleLogInSuccess(data) {
        this.Token.handle(data.token);
        this.Auth.changeAuthStatus(true);
        localStorage.setItem('loggedUser', data.owner.name);
        localStorage.setItem('owner', JSON.stringify(data.owner));
        this.prepareDropDown();
    }
    prepareDropDown() {
        setTimeout(() => {
            document.querySelector('.submenu').addEventListener('mouseover', () => {
                document.querySelector('.dropdown__content').classList.add('show');
            });
            document.querySelector('.submenu').addEventListener('mouseout', () => {
                document.querySelector('.dropdown__content').classList.remove('show');
            });
        }, 0);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 40, vars: 4, consts: [["id", "signup"], [1, "signup"], [3, "formGroup", "ngSubmit"], [1, "signup__block"], [1, "signup__title1"], [1, "signup__title2"], [1, "signup__line"], [1, "form-group", "signup__formGroup"], ["type", "text", "placeholder", "Name", "name", "name", "formControlName", "name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Email", "name", "email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Confirm password", "name", "password_confirmation", "formControlName", "password_confirmation", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Address", "name", "address", "formControlName", "address", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Phone number", "name", "phone", "formControlName", "phone", "required", "", 1, "form-control"], [1, "text-danger", 3, "hidden"], [1, "signup__submit"], ["type", "submit", 1, "signup__btn", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() { return ctx.submitSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign up for more benefits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All fields required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formSignUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formSignUp.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidationDirective"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["#signup[_ngcontent-%COMP%] {\n  background-color: #e2e0e0;\n  margin-bottom: 10px;\n}\n\n.signup__block[_ngcontent-%COMP%] {\n  top: 13vh;\n  left: 4%;\n  width: 91%;\n  padding: 20px 10px;\n  border: white;\n  border-radius: 4px;\n  background-color: #F6F6F6;\n}\n\n.signup__title1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n\n.signup__title2[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 400;\n  opacity: 0.8;\n}\n\n.signup__line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.signup__formGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.signup__formGroup__label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.signup__formGroup__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #C1BDBD;\n  height: 3rem;\n  width: 99%;\n  border-radius: 2px;\n}\n\n.signup__submit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.signup__btn[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  padding: 8px 60px;\n  background-color: #ffb200;\n  color: #595349;\n  border-radius: 4px;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n\n.signup__btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n@media screen and (min-width: 768px) {\n  .signup__block[_ngcontent-%COMP%] {\n    width: 700px;\n    left: 10%;\n  }\n\n  .signup__line[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .signup__formGroup[_ngcontent-%COMP%] {\n    flex-basis: 48%;\n    margin-right: 2%;\n  }\n\n  .signup__formGroup__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n@media screen and (min-width: 960px) {\n  .signup__block[_ngcontent-%COMP%] {\n    left: 20%;\n  }\n}\n\n@media screen and (min-width: 1026px) {\n  .signup__block[_ngcontent-%COMP%] {\n    left: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0FBQUY7O0FBTUU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTko7O0FBU0U7RUFDRSxnQkFBQTtBQVBKOztBQVFJO0VBQ0UsZ0JBQUE7QUFOTjs7QUFTTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVBSOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVdFO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQVlJO0VBQ0UsWUFBQTtBQVZOOztBQWVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsU0FBQTtFQVpGOztFQWNBO0lBQ0UsbUJBQUE7RUFYRjs7RUFhQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQVZGOztFQVlBO0lBQ0UsVUFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLFNBQUE7RUFWRjtBQUNGOztBQWFBO0VBQ0U7SUFDRSxTQUFBO0VBWEY7QUFDRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbnVwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMGUwO1xyXG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4uc2lnbnVwIHtcclxuXHJcbiAgJl9fYmxvY2sge1xyXG4gICAgdG9wOiAxM3ZoO1xyXG4gICAgbGVmdDogNCU7XHJcbiAgICB3aWR0aDogOTElO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgJl9fdGl0bGUyIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gIH1cclxuXHJcbiAgJl9fbGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICZfX2Zvcm1Hcm91cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgJl9fbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgJl9faW5wdXQge1xyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MxQkRCRDtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fc3VibWl0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gICZfX2J0biB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nOiA4cHggNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIyMDA7XHJcbiAgICBjb2xvcjogIzU5NTM0OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2lnbnVwX19ibG9jayB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5zaWdudXBfX2xpbmUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLnNpZ251cF9fZm9ybUdyb3VwIHtcclxuICAgIGZsZXgtYmFzaXM6IDQ4JTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgfVxyXG4gIC5zaWdudXBfX2Zvcm1Hcm91cF9faW5wdXQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAuc2lnbnVwX19ibG9jayB7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDEwMjZweCkge1xyXG4gIC5zaWdudXBfX2Jsb2NrIHtcclxuICAgIGxlZnQ6IDIyJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "rj1t":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenService {
    constructor() {
        this.iss = {
            login: 'http://localhost:8000/api/auth/login',
            signup: 'http://localhost:8000/api/auth/register'
        };
    }
    handle(token) {
        this.set(token);
    }
    set(token) {
        localStorage.setItem('token', token);
    }
    get() {
        return localStorage.getItem('token');
    }
    remove() {
        localStorage.removeItem('token');
    }
    isValid() {
        const token = this.get();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    }
    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }
    decode(payload) {
        return JSON.parse(atob(payload));
    }
    loggedIn() {
        return this.isValid();
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_estate_detail_estate_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/estate-detail/estate-detail.component */ "NuOl");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");









const ROUTES = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'estatesList',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-estates-estates-module */ "pages-estates-estates-module").then(__webpack_require__.bind(null, /*! ./pages/estates/estates.module */ "XHjk")).then(m => m.EstatesModule)
    },
    {
        path: 'estateDetail',
        component: _pages_estate_detail_estate_detail_component__WEBPACK_IMPORTED_MODULE_4__["EstateDetailComponent"]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xaqy":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/highlights-blogs/highlights-blogs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HighlightsBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightsBlogsComponent", function() { return HighlightsBlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HighlightsBlogsComponent {
    constructor() { }
    ngOnInit() {
    }
}
HighlightsBlogsComponent.ɵfac = function HighlightsBlogsComponent_Factory(t) { return new (t || HighlightsBlogsComponent)(); };
HighlightsBlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightsBlogsComponent, selectors: [["app-highlights-blogs"]], decls: 86, vars: 0, consts: [["id", "highlightBlogs"], [1, "row"], [1, "col"], [1, "number"], [1, "info"], [1, "blog"], ["src", "https://rdcnewscdn.realtor.com/wp-content/uploads/2015/12/pelicans-padre-island-tx-cover-2-16.jpg", "alt", ""], [1, "blog_info"], ["href", "#"], ["id", "blogList"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "card"], [1, "imgBlog"], ["src", "https://rdcnewscdn.realtor.com/wp-content/uploads/2017/11/VA-loan-big-move-436x236.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-blog"], ["id", "twoBlogs"], [1, "col-12", "col-sm-6", "blog-img"], ["src", "https://static.rdc.moveaws.com/images/hero/hp-hero-mortgage-desktop.jpg", "alt", ""], [1, "col-12", "col-sm-6", "blog-info"], [1, "header"], [1, "discoveringBtn"], [1, "w-100", "d-none", "d-md-block"], [1, "col-12", "col-sm-6", "order-last", "blog-img"]], template: function HighlightsBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What's happening in San Francisco, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1.782");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Homes for sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Open houses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3.784");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recently sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "161");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Price reduced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Most Affordable (and Warm) Places to WFH This Winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 5 Things You Didn\u2019t Know a VA Loan Could Do for You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 5 Things You Didn\u2019t Know a VA Loan Could Do for You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 5 Things You Didn\u2019t Know a VA Loan Could Do for You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 5 Things You Didn\u2019t Know a VA Loan Could Do for You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Need a home loan? Get pre-approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Find a lender who can offer competitive mortgage rates and help you with pre-approval.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Discovering Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Need a home loan? Get pre-approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Find a lender who can offer competitive mortgage rates and help you with pre-approval.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Discovering Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#highlightBlogs[_ngcontent-%COMP%] {\n  margin: 6rem 0 5rem 0;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  font-size: 3rem;\n  color: blue;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: gray;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  position: relative;\n  text-align: center;\n  background-color: #000000;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 0.6;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  margin-bottom: 3rem;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5rem;\n  margin-bottom: 4rem;\n}\n#highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 500;\n  border: 1.5px solid white;\n  border-radius: 20px;\n  padding: 8px;\n}\n@media screen and (max-width: 767px) {\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 1.5rem;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 576px) {\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@media screen and (max-width: 446px) {\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 0;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n  #highlightBlogs[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog_info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px;\n  }\n}\n#blogList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n#blogList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-top: none;\n}\n#blogList[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card-blog[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#blogList[_ngcontent-%COMP%]   .imgBlog[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  background-color: #000000;\n  border-radius: 7px 7px 0 0;\n  overflow: hidden;\n}\n#blogList[_ngcontent-%COMP%]   .imgBlog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n#blogList[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n@media screen and (max-width: 767px) {\n  .col-12[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  .col-12[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n    width: 60%;\n    margin-bottom: 2rem;\n  }\n}\n#twoBlogs[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-top: 25%;\n  padding-left: 2rem;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bolder;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n#twoBlogs[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .discoveringBtn[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bolder;\n  border: 1px solid #c41818;\n  border-radius: 20px;\n  background-color: #c41818;\n  color: white;\n  padding: 10px 20px;\n  line-height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlnaGxpZ2h0cy1ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7QUFBTjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBSko7QUFNSTtFQUNFLFdBQUE7RUFFQSxZQUFBO0FBTE47QUFTSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVBOO0FBU007RUFDRSxZQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUFUUjtBQVlNO0VBQ0UsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWNNO0VBQ0UsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQWZSO0FBdUJBO0VBTU07SUFDRSxlQUFBO0VBekJOO0VBNEJJO0lBQ0UsZUFBQTtJQUVBLHFCQUFBO0VBM0JOO0VBK0JJO0lBQ0UsZUFBQTtFQTdCTjtBQUNGO0FBbUNBO0VBTU07SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUF0Q047RUEwQ0k7SUFDRSxpQkFBQTtJQUVBLG1CQUFBO0VBekNOO0VBNkNJO0lBQ0UsaUJBQUE7RUEzQ047QUFDRjtBQWlEQTtFQU1NO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQXBETjtFQXdESTtJQUNFLGVBQUE7SUFFQSxtQkFBQTtFQXZETjtFQTJESTtJQUNFLGlCQUFBO0lBRUEsWUFBQTtFQTFETjtBQUNGO0FBbUVFO0VBQ0UsZ0JBQUE7QUFqRUo7QUFtRUk7RUFDRSxnQkFBQTtBQWpFTjtBQXFFSTtFQUNFLGlCQUFBO0FBbkVOO0FBdUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQXJFSjtBQXVFSTtFQUNFLFlBQUE7QUFyRU47QUF5RUU7RUFDRSw0Q0FBQTtBQXZFSjtBQTJFQTtFQUVFO0lBQ0UsbUJBQUE7RUF6RUY7QUFDRjtBQTZFQTtFQUNFO0lBQ0UsZUFBQTtJQUVBLFVBQUE7SUFFQSxtQkFBQTtFQTdFRjtBQUNGO0FBa0ZBO0VBQ0UsZ0JBQUE7QUFoRkY7QUFrRkU7RUFDRSxVQUFBO0FBaEZKO0FBa0ZJO0VBQ0UsV0FBQTtBQWhGTjtBQXNGTTtFQUNDLGVBQUE7RUFFQyxrQkFBQTtBQXJGUjtBQXVGUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQXJGWjtBQXdGUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUF0RlY7QUF5RlE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUEzRlYiLCJmaWxlIjoiaGlnaGxpZ2h0cy1ibG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoaWdobGlnaHRCbG9ncyB7XHJcbiAgbWFyZ2luOiA2cmVtIDAgNXJlbSAwO1xyXG5cclxuICAuY29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmIC5udW1iZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcblxyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmIC5pbmZvIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJsb2cge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgICYgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYgLmJsb2dfaW5mbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAmIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgaDMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICNoaWdobGlnaHRCbG9ncyB7XHJcblxyXG4gICAgLmJsb2cge1xyXG5cclxuICAgICAgJiAuYmxvZ19pbmZvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiAuYmxvZ19pbmZvIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgLmJsb2dfaW5mbyBhIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cclxuICAjaGlnaGxpZ2h0QmxvZ3Mge1xyXG5cclxuICAgIC5ibG9nIHtcclxuXHJcbiAgICAgICYgLmJsb2dfaW5mbyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgJiAuYmxvZ19pbmZvIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgLmJsb2dfaW5mbyBhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0NnB4KSB7XHJcblxyXG4gICNoaWdobGlnaHRCbG9ncyB7XHJcblxyXG4gICAgLmJsb2cge1xyXG5cclxuICAgICAgJiAuYmxvZ19pbmZvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmIC5ibG9nX2luZm8gaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgLmJsb2dfaW5mbyBhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PUJMT0cgTElTVD09PT09PT09PT09PT09PT09PT09XHJcbiNibG9nTGlzdCB7XHJcblxyXG4gICYgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgICYgLmNhcmQge1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmIC5jYXJkLWJsb2cge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWdCbG9nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDAgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jb2wtMTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jb2wtMTIge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PSBUV08gQkxPR1MgPT09PT09PT09PT09PT09XHJcblxyXG4jdHdvQmxvZ3Mge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG4gIC5ibG9nLWltZyB7XHJcbiAgICBwYWRkaW5nOiAwIDtcclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIC5ibG9nLWluZm8ge1xyXG5cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcblxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXNjb3ZlcmluZ0J0biB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0MTgxODtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MTgxODtcclxuXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightsBlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-highlights-blogs',
                templateUrl: './highlights-blogs.component.html',
                styleUrls: ['./highlights-blogs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xf6g":
/*!*********************************************!*\
  !*** ./src/app/services/awesome.service.ts ***!
  \*********************************************/
/*! exports provided: AwesomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwesomeService", function() { return AwesomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AwesomeService {
    constructor(http) {
        this.http = http;
        this.URI = 'http://localhost:8000/api/auth';
    }
    login(data) {
    }
    signup(data) {
    }
    goProfile(token) {
        return this.http.get(`${this.URI}/profile?token=${token}`);
    }
}
AwesomeService.ɵfac = function AwesomeService_Factory(t) { return new (t || AwesomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AwesomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AwesomeService, factory: AwesomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwesomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map