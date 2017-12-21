webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/all-surveys/all-surveys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".survey {\n  padding: 10px;\n  border: solid 1px black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-surveys/all-surveys.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let survey of all_surveys' class='survey'>\n  <h2><a [routerLink]=\"[ survey._id ]\">{{ survey.question }}</a></h2>\n  <p>Created at: {{ survey.createdAt | date }}</p>\n  <p>Made by: {{ survey.user.first_name }}</p>\n  <button *ngIf='survey.user._id == _userService.logged_in_user._id' (click)='delete(survey)'>Delete!</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-surveys/all-surveys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllSurveysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllSurveysComponent = (function () {
    function AllSurveysComponent(_surveyService, _userService) {
        this._surveyService = _surveyService;
        this._userService = _userService;
        this.all_surveys = [];
    }
    AllSurveysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._surveyService.getAll()
            .subscribe(function (surveys) { return _this.all_surveys = surveys; }, function (error) { return console.log(error); });
    };
    AllSurveysComponent.prototype.delete = function (survey) {
        var _this = this;
        this._surveyService.deleteSurvey(survey._id)
            .subscribe(function (removedSurvey) {
            _this.all_surveys.splice(_this.all_surveys.indexOf(survey), 1);
        }, function (error) { return console.log(error); });
    };
    AllSurveysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-surveys',
            template: __webpack_require__("../../../../../src/app/all-surveys/all-surveys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-surveys/all-surveys.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], AllSurveysComponent);
    return AllSurveysComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_survey_new_survey_component__ = __webpack_require__("../../../../../src/app/new-survey/new-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_surveys_all_surveys_component__ = __webpack_require__("../../../../../src/app/all-surveys/all-surveys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_survey_single_survey_component__ = __webpack_require__("../../../../../src/app/single-survey/single-survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'new',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__new_survey_new_survey_component__["a" /* NewSurveyComponent */]
    },
    {
        path: 'surveys',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__all_surveys_all_surveys_component__["a" /* AllSurveysComponent */]
    },
    {
        path: 'surveys/:id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__single_survey_single_survey_component__["a" /* SingleSurveyComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n    <a *ngIf='!_userService.logged_in_user._id' [routerLink]=\"['']\">Login</a>\n    <a *ngIf='_userService.logged_in_user._id' (click)='logout()' [routerLink]=\"['']\">Log Out</a>\n    <a [routerLink]=\"['new']\">New Survey</a>\n    <a [routerLink]=\"['surveys']\">Surveys</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
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
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this._userService.logged_in_user._id) {
            this._userService.getUserStored()
                .subscribe(function (user) { return console.log('USER', user); }, function (error) { return console.log(error); });
        }
    };
    AppComponent.prototype.logout = function () {
        this._userService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_survey_new_survey_component__ = __webpack_require__("../../../../../src/app/new-survey/new-survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_surveys_all_surveys_component__ = __webpack_require__("../../../../../src/app/all-surveys/all-surveys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__single_survey_single_survey_component__ = __webpack_require__("../../../../../src/app/single-survey/single-survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_survey_new_survey_component__["a" /* NewSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__all_surveys_all_surveys_component__["a" /* AllSurveysComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__single_survey_single_survey_component__["a" /* SingleSurveyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__survey_service__["a" /* SurveyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}\n\n#login_form{\n    width: 30%;\n    display: inline-block;\n    vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='login_form'>\n    <h2>Login</h2>\n    <div *ngIf='_userService.logged_in_user._id'>\n        <p>{{ _userService.logged_in_user.first_name }} {{ _userService.logged_in_user.last_name }} is already logged in, want to log out?</p>\n        <button (click)='logout($event)'>Log Out</button>\n    </div>\n    <form *ngIf='!_userService.logged_in_user._id' (submit)='login_attempt($event)' #loginForm='ngForm'>\n        <p *ngIf='error' class='error'>{{ error.error }}</p>\n        <p>Email</p>\n        <input type=\"text\" name=\"user.email\" [(ngModel)]='user.email' required>\n        <p>Password</p>\n        <input type=\"password\" name=\"user.password\" [(ngModel)]='user.password' required>\n        <br />\n        <input type=\"submit\" [disabled]='!loginForm.valid'>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
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
    function LoginComponent(_userService) {
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login_attempt = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('login attempt');
        this._userService.login_attempt(this.user)
            .subscribe(function (user) { return _this._userService.login(user); }, function (errorResponse) { return _this.error = errorResponse.json(); });
    };
    LoginComponent.prototype.logout = function (event) {
        event.preventDefault();
        console.log('log out');
        this._userService.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='_userService.logged_in_user._id'>\n  <form (submit)='newSurvey($event)' #surveyForm='ngForm'>\n    <p>Question</p>\n    <div class='error' *ngIf='question.errors'>\n        <p *ngIf='question.errors.required'>Required</p>\n        <p *ngIf='question.errors.minlength'>Needs to be at least 8 Characters.</p>\n    </div>\n    <input type=\"text\" name=\"question\" [(ngModel)]='survey.question' #question='ngModel' required minlength='8'>\n    <p>Option A</p>\n    <div class='error' *ngIf='option_a.errors'>\n        <p *ngIf='option_a.errors.required'>Required</p>\n        <p *ngIf='option_a.errors.minlength'>Needs to be at least 3 Characters.</p>\n    </div>\n    <input type=\"text\" name=\"option_a\" [(ngModel)]='survey.options[0].option' #option_a='ngModel' required minlength='3'>\n    <p>Option B</p>\n    <div class='error' *ngIf='option_b.errors'>\n        <p *ngIf='option_b.errors.required'>Required</p>\n        <p *ngIf='option_b.errors.minlength'>Needs to be at least 3 Characters.</p>\n    </div>\n    <input type=\"text\" name=\"option_b\" [(ngModel)]='survey.options[1].option' #option_b='ngModel' required minlength='3'>\n    <p>Option C</p>\n    <div class='error' *ngIf='option_c.errors'>\n        <p *ngIf='option_c.errors.required'>Required</p>\n        <p *ngIf='option_c.errors.minlength'>Needs to be at least 3 Characters.</p>\n    </div>\n    <input type=\"text\" name=\"option_c\" [(ngModel)]='survey.options[2].option' #option_c='ngModel' required minlength='3'>\n    <p>Option D</p>\n    <div class='error' *ngIf='option_d.errors'>\n        <p *ngIf='option_d.errors.required'>Required</p>\n        <p *ngIf='option_d.errors.minlength'>Needs to be at least 3 Characters.</p>\n    </div>\n    <input type=\"text\" name=\"option_d\" [(ngModel)]='survey.options[3].option' #option_d='ngModel' required minlength='3'>\n    <input type='submit' [disabled]='!surveyForm.form.valid'/>\n  </form>\n</div>\n<div *ngIf='!_userService.logged_in_user._id'>\n  <p>Log in to add a survey!</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-survey/new-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey__ = __webpack_require__("../../../../../src/app/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewSurveyComponent = (function () {
    function NewSurveyComponent(_surveyService, _userService) {
        this._surveyService = _surveyService;
        this._userService = _userService;
        this.survey = new __WEBPACK_IMPORTED_MODULE_1__survey__["a" /* Survey */]();
    }
    NewSurveyComponent.prototype.ngOnInit = function () {
    };
    NewSurveyComponent.prototype.newSurvey = function (event) {
        event.preventDefault();
        console.log('newSurvey');
        console.log('user', this._userService.logged_in_user._id);
        this.survey.user = this._userService.logged_in_user;
        console.log('about to send', this.survey);
        this._surveyService.createSurvey(this.survey)
            .subscribe(function (survey) { return console.log('new survey', survey); }, function (error) { return console.log(error); });
        this.survey = new __WEBPACK_IMPORTED_MODULE_1__survey__["a" /* Survey */]();
    };
    NewSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-survey',
            template: __webpack_require__("../../../../../src/app/new-survey/new-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-survey/new-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], NewSurveyComponent);
    return NewSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option() {
    }
    return Option;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}\n\n#reg_form{\n    width:30%;\n    display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='reg_form'>\n    <h2>Register</h2>\n    <form (submit)='register($event)' #regForm='ngForm' >\n        <p>First Name</p>\n        <div class='error' *ngIf='first_name.errors'>\n            <p *ngIf='first_name.errors.required'>Required</p>\n            <p *ngIf='first_name.errors.minlength'>Needs to be at least 3 Characters.</p>\n        </div>\n        <input type=\"text\" name=\"user.first_name\" [(ngModel)]=\"user.first_name\" #first_name='ngModel' required minlength='3' />\n        <p>Last Name</p>\n        <div class='error' *ngIf='last_name.errors'>\n            <p *ngIf='last_name.errors.required'>Required</p>\n            <p *ngIf='last_name.errors.minlength'>Needs to be at least 3 Characters.</p>\n        </div>\n        <input type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\" #last_name='ngModel' required minlength='3' />\n        <p>Email</p>\n        <div class='error' *ngIf='email.errors'>\n            <p *ngIf='email.errors.required'>Required</p>\n            <p *ngIf='email.errors.minlength'>Needs to be at least 3 Characters.</p>\n            <p *ngIf='email.errors.pattern'>Please enter valid email.</p>\n        </div>\n        <p class='error' *ngIf='emailError'>{{ emailError.error }}</p>\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email='ngModel' required minlength='3' pattern='^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'/>\n        <p>Password</p>\n        <div class='error' *ngIf='pw.errors'>\n            <p *ngIf='pw.errors.required'>Required</p>\n            <p *ngIf='pw.errors.minlength'>Needs to be at least 8 Characters.</p>\n            <p *ngIf='pw.errors.pattern'>Please include a capital letter, number and symbol.</p>\n        </div>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" #pw='ngModel' required minlength='8' pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,32}'/>\n        <p>Confirm Password</p>\n        <div class='error' *ngIf='confirm.errors || confirm_password != password'>\n            <p *ngIf='confirm.errors && confirm.errors.required'>Required</p>\n            <p *ngIf='confirm.errors && confirm.errors.minlength'>Needs to be at least 3 Characters.</p>\n            <p *ngIf='confirm_password != password'>Needs to match.</p>\n        </div>\n        <input type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" #confirm='ngModel' required />\n        <br />\n        <input type='submit' [disabled]='!regForm.form.valid || confirm_password != password'/>\n    </form>\n</div>\n<app-login></app-login>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
    function RegisterComponent(_userService) {
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.users = [];
        this.emailError = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //this._userService.getAllUsers();
    };
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('register', this.user);
        this.user.password = this.password;
        this._userService.register(this.user).subscribe(function (user) {
            console.log('in subscribe user');
            _this._userService.login(user);
        }, function (errorResponse) {
            console.log('in subscribe email');
            _this.emailError = errorResponse.json();
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/single-survey/single-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".option {\n  padding: 10px;\n  border: solid black 1px;\n  display: inline-block;\n  width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-survey/single-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ survey.question }}</h2>\n<div *ngFor='let option of survey.options, let idx = index' class='option'>\n  <h4>{{ option.option }}</h4>\n  <p>Votes: {{ option.votes }}</p>\n  <button (click)='vote(idx)'>Vote!</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single-survey/single-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__("../../../../../src/app/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleSurveyComponent = (function () {
    function SingleSurveyComponent(router, route, _surveyService, _userService) {
        this.router = router;
        this.route = route;
        this._surveyService = _surveyService;
        this._userService = _userService;
        this.survey = new __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* Survey */]();
    }
    SingleSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (params) {
            console.log('getting param');
            return _this._surveyService.getByID(params.get('id'));
        })
            .subscribe(function (survey) {
            console.log('getting survey');
            _this.survey = survey;
        }, function (errorResponse) { return console.log('error getting survey', errorResponse); });
    };
    SingleSurveyComponent.prototype.vote = function (idx) {
        var _this = this;
        this.survey.options[idx].votes++;
        this._surveyService.editSurvey(this.survey).
            subscribe(function (edited_survey) {
            console.log('edit success', edited_survey);
            _this.survey = edited_survey;
        }, function (error) { return console.log(error); });
    };
    SingleSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-survey',
            template: __webpack_require__("../../../../../src/app/single-survey/single-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/single-survey/single-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], SingleSurveyComponent);
    return SingleSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyService = (function () {
    function SurveyService(_http) {
        this._http = _http;
    }
    SurveyService.prototype.getAll = function () {
        return this._http.get('/api/survey')
            .map(function (response) {
            console.log('Reg Response', response);
            return response.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error);
        });
    };
    SurveyService.prototype.getByID = function (id) {
        return this._http.get("/api/survey/" + id)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log('get by survey id error', error);
            return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error);
        });
    };
    SurveyService.prototype.createSurvey = function (survey) {
        return this._http.post('/api/survey', survey)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log('create survey', error);
            return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error);
        });
    };
    SurveyService.prototype.deleteSurvey = function (id) {
        return this._http.delete("/api/survey/" + id)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log('delete error', error);
            return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error);
        });
    };
    SurveyService.prototype.editSurvey = function (survey) {
        return this._http.put("/api/survey/" + survey._id, survey)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log('Error editing survey', error);
            return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error);
        });
    };
    SurveyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "../../../../../src/app/survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__("../../../../../src/app/option.ts");

var Survey = (function () {
    function Survey() {
        this.question = '';
        this.options = [];
        for (var i = 0; i < 4; i++) {
            this.options[i] = new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */]();
            this.options[i].option = '';
            this.options[i].votes = 0;
        }
    }
    return Survey;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.userObserver = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]([]);
        this.emailError = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]({});
        this.loginObserver = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]({});
        this.logged_in_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.logged_in = false;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        console.log('in reg func');
        return this._http.post('/api/users', user)
            .map(function (response) {
            console.log('Reg Response', response);
            return response.json();
        })
            .catch(function (error) {
            if (error.json().error.code === 11000) {
                console.log('User with email already exists!');
                _this.emailError.next({ error: 'User with email already exists!' });
            }
            return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        this._http.get('/api/users').toPromise()
            .then(function (users) { return _this.userObserver.next(users.json()); })
            .catch(function (error) { return console.log(error); });
    };
    UserService.prototype.login_attempt = function (user) {
        console.log('sending login request');
        return this._http.post('/api/login', user)
            .map(function (response) {
            console.log('logged in!');
            return response.json();
        })
            .catch(function (error) {
            console.log('log in error', error);
            return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getUserStored = function () {
        var _this = this;
        console.log('getUserStored');
        if (localStorage.id) {
            console.log('id found', localStorage.id);
            return this._http.get("/api/user/" + localStorage.id)
                .map(function (response) {
                console.log('set user', _this.logged_in_user);
                _this.logged_in_user = response.json();
                return response.json();
            })
                .catch(function (error) {
                console.log('stored user error', error);
                return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
            });
        }
        else {
            return null;
        }
    };
    UserService.prototype.logout = function () {
        console.log('in log out func');
        this.logged_in_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        localStorage.setItem('id', undefined);
        this._router.navigateByUrl('/');
    };
    UserService.prototype.login = function (user) {
        console.log('in login func');
        this.logged_in_user = user;
        this._router.navigateByUrl('/new');
        localStorage.setItem('id', this.logged_in_user._id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map