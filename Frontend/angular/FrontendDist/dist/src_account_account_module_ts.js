"use strict";
(self["webpackChunkCompanyWebsite"] = self["webpackChunkCompanyWebsite"] || []).push([["src_account_account_module_ts"],{

/***/ 3321:
/*!***********************************************!*\
  !*** ./src/account/account-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountRoutingModule": () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 9126);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 71312);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.component */ 30576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class AccountRoutingModule {}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) {
  return new (t || AccountRoutingModule)();
};
AccountRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AccountRoutingModule
});
AccountRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _account_component__WEBPACK_IMPORTED_MODULE_2__.AccountComponent,
    children: [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
    }]
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 30576:
/*!******************************************!*\
  !*** ./src/account/account.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/account-languages.component */ 57347);
/* harmony import */ var _layout_account_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/account-header.component */ 80926);
/* harmony import */ var _layout_account_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/account-footer.component */ 39963);
/* harmony import */ var _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tenant/tenant-change.component */ 73128);








function AccountComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tenant-change");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class AccountComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, renderer) {
    super(injector);
    this.renderer = renderer;
  }
  showTenantChange() {
    return abp.multiTenancy.isEnabled;
  }
  ngOnInit() {
    this.renderer.addClass(document.body, 'login-page');
  }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) {
  return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
};
AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AccountComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 1,
  consts: [[1, "login-box"], [1, "card"], ["class", "card-header", 4, "ngIf"], [1, "card-body", "login-card-body"], [1, "card-footer"], [1, "card-header"]],
  template: function AccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "account-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountComponent_div_3_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "account-languages");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "account-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showTenantChange());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_1__.AccountLanguagesComponent, _layout_account_header_component__WEBPACK_IMPORTED_MODULE_2__.AccountHeaderComponent, _layout_account_footer_component__WEBPACK_IMPORTED_MODULE_3__.AccountFooterComponent, _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_4__.TenantChangeComponent],
  encapsulation: 2
});

/***/ }),

/***/ 72880:
/*!***************************************!*\
  !*** ./src/account/account.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 3321);
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ 55696);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 8395);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ 30576);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 9126);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 71312);
/* harmony import */ var _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/account-languages.component */ 57347);
/* harmony import */ var _layout_account_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/account-header.component */ 80926);
/* harmony import */ var _layout_account_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/account-footer.component */ 39963);
/* harmony import */ var _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tenant/tenant-change.component */ 73128);
/* harmony import */ var _tenant_tenant_change_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tenant/tenant-change-dialog.component */ 19813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);














// tenants




class AccountModule {}
AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || AccountModule)();
};
AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AccountModule
});
AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientJsonpModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__.ServiceProxyModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule.forChild()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account_component__WEBPACK_IMPORTED_MODULE_3__.AccountComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _layout_account_languages_component__WEBPACK_IMPORTED_MODULE_6__.AccountLanguagesComponent, _layout_account_header_component__WEBPACK_IMPORTED_MODULE_7__.AccountHeaderComponent, _layout_account_footer_component__WEBPACK_IMPORTED_MODULE_8__.AccountFooterComponent,
    // tenant
    _tenant_tenant_change_component__WEBPACK_IMPORTED_MODULE_9__.TenantChangeComponent, _tenant_tenant_change_dialog_component__WEBPACK_IMPORTED_MODULE_10__.TenantChangeDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientJsonpModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__.ServiceProxyModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule]
  });
})();

/***/ }),

/***/ 39963:
/*!********************************************************!*\
  !*** ./src/account/layout/account-footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountFooterComponent": () => (/* binding */ AccountFooterComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);



class AccountFooterComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.currentYear = new Date().getFullYear();
    this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
  }
}
AccountFooterComponent.ɵfac = function AccountFooterComponent_Factory(t) {
  return new (t || AccountFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
};
AccountFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccountFooterComponent,
  selectors: [["account-footer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 5,
  consts: [[1, "row"], [1, "col-md-12", "text-center"], [1, "ml-2"]],
  template: function AccountFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", ctx.currentYear, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "Version"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.versionText, " ");
    }
  },
  dependencies: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalizePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 80926:
/*!********************************************************!*\
  !*** ./src/account/layout/account-header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountHeaderComponent": () => (/* binding */ AccountHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AccountHeaderComponent {}
AccountHeaderComponent.ɵfac = function AccountHeaderComponent_Factory(t) {
  return new (t || AccountHeaderComponent)();
};
AccountHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountHeaderComponent,
  selectors: [["account-header"]],
  decls: 4,
  vars: 0,
  consts: [[1, "login-logo"], ["href", "/"]],
  template: function AccountHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CompanyWebsite");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 57347:
/*!***********************************************************!*\
  !*** ./src/account/layout/account-languages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLanguagesComponent": () => (/* binding */ AccountLanguagesComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 80946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function AccountLanguagesComponent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountLanguagesComponent_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const language_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.changeLanguage(language_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const language_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", language_r1.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class.current-language-icon", language_r1.name != ctx_r2.currentLanguage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("d-inline-block mx-1 ", language_r1.icon, "");
  }
}
function AccountLanguagesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountLanguagesComponent_ng_container_1_a_1_Template, 3, 5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const language_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", language_r1.name != ctx_r0.currentLanguage.name);
  }
}
class AccountLanguagesComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
  }
  ngOnInit() {
    this.languages = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(this.localization.languages, l => !l.isDisabled);
    this.currentLanguage = this.localization.currentLanguage;
  }
  changeLanguage(languageName) {
    abp.utils.setCookieValue('Abp.Localization.CultureName', languageName, new Date(new Date().getTime() + 5 * 365 * 86400000),
    // 5 year
    abp.appPath);
    location.reload();
  }
}
AccountLanguagesComponent.ɵfac = function AccountLanguagesComponent_Factory(t) {
  return new (t || AccountLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
AccountLanguagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AccountLanguagesComponent,
  selectors: [["account-languages"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "text-center"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [3, "title"]],
  template: function AccountLanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountLanguagesComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 9126:
/*!**********************************************!*\
  !*** ./src/account/login/login.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/auth/app-auth.service */ 50895);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! abp-ng2-module */ 19097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);










const _c0 = function () {
  return ["../register"];
};
function LoginComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "Register"), " ");
  }
}
class LoginComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, authService, _sessionService) {
    super(injector);
    this.authService = authService;
    this._sessionService = _sessionService;
    this.submitting = false;
  }
  get multiTenancySideIsTeanant() {
    return this._sessionService.tenantId > 0;
  }
  get isSelfRegistrationAllowed() {
    if (!this._sessionService.tenantId) {
      return false;
    }
    return true;
  }
  login() {
    this.submitting = true;
    this.authService.authenticate(() => this.submitting = false);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AppAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__.AbpSessionService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 38,
  vars: 25,
  consts: [[1, "text-center", "mb-3"], ["novalidate", "", "autocomplete", "off", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], [1, "input-group"], ["type", "text", "name", "userNameOrEmailAddress", "required", "", "maxlength", "256", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["userNameOrEmailAddressModel", "ngModel", "userNameOrEmailAddressEl", ""], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], [3, "control", "controlEl"], ["type", "password", "name", "password", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["passwordModel", "ngModel", "passwordEl", ""], [1, "fas", "fa-lock"], [1, "form-group", "row"], [1, "col-md-8"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "rememberMe", "name", "rememberMe", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "rememberMe", 1, "custom-control-label"], [1, "col-md-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "mb-1", 4, "ngIf"], [1, "mb-1"], [3, "routerLink"], [1, "fa", "fa-plus-circle"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.authService.authenticateModel.userNameOrEmailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.authService.authenticateModel.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7)(23, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.authService.rememberMe = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 19)(34, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, LoginComponent_p_37_Template, 5, 5, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 15, "LogIn"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.authService.authenticateModel.userNameOrEmailAddress)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 17, "UserNameOrEmail"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.authService.authenticateModel.password)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 19, "Password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.authService.rememberMe);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 21, "RememberMe"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.submitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 23, "LogIn"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSelfRegistrationAllowed);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_3__.AbpValidationSummaryComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__.LocalizePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__.accountModuleAnimation)()]
  }
});

/***/ }),

/***/ 71312:
/*!****************************************************!*\
  !*** ./src/account/register/register.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/auth/app-auth.service */ 50895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);











const _c0 = function () {
  return ["../login"];
};
class RegisterComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _accountService, _router, authService) {
    super(injector);
    this._accountService = _accountService;
    this._router = _router;
    this.authService = authService;
    this.model = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RegisterInput();
    this.saving = false;
  }
  save() {
    this.saving = true;
    this._accountService.register(this.model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.saving = false;
    })).subscribe(result => {
      if (!result.canLogin) {
        this.notify.success(this.l('SuccessfullyRegistered'));
        this._router.navigate(['/login']);
        return;
      }
      // Autheticate
      this.saving = true;
      this.authService.authenticateModel.userNameOrEmailAddress = this.model.userName;
      this.authService.authenticateModel.password = this.model.password;
      this.authService.authenticate(() => {
        this.saving = false;
      });
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.AccountServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_3__.AppAuthService));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 66,
  vars: 44,
  consts: [[1, "text-center", "mb-3"], ["autocomplete", "off", 3, "ngSubmit"], ["registerForm", "ngForm"], [1, "form-group"], [1, "input-group"], ["type", "text", "name", "name", "required", "", "maxlength", "64", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-arrow-left"], [3, "control", "controlEl"], ["type", "text", "name", "surname", "required", "", "maxlength", "64", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["surnameModel", "ngModel", "surnameEl", ""], ["type", "email", "name", "emailAddress", "required", "", "maxlength", "256", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["emailAddressModel", "ngModel", "emailAddressEl", ""], [1, "fas", "fa-envelope"], ["type", "email", "name", "userName", "required", "", "maxlength", "32", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["userNameModel", "ngModel", "userNameEl", ""], [1, "fas", "fa-user"], ["type", "password", "name", "password", "required", "", "maxlength", "32", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["passwordModel", "ngModel", "passwordEl", ""], [1, "fas", "fa-lock"], [1, "row"], [1, "col-8"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "routerLink"], [1, "fa", "fa-arrow-circle-left"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.model.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.model.surname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 7)(23, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 3)(27, "div", 4)(28, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.model.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 7)(33, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 3)(37, "div", 4)(38, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.model.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 7)(43, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 3)(47, "div", 4)(48, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_48_listener($event) {
        return ctx.model.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 7)(53, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 22)(57, "div", 23)(58, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 26)(63, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 27, "Register"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 29, "Name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 31, "Surname"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model.surname);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 33, "EmailAddress"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r5)("controlEl", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 35, "UserName"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r7)("controlEl", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 37, "Password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r9)("controlEl", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](43, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 39, "Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.saving);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 41, "Register"), " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_4__.AbpValidationSummaryComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__.accountModuleAnimation)()]
  }
});

/***/ }),

/***/ 19813:
/*!**************************************************************!*\
  !*** ./src/account/tenant/tenant-change-dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantChangeDialogComponent": () => (/* binding */ TenantChangeDialogComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ 22732);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);










class TenantChangeDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _accountService, bsModalRef) {
    super(injector);
    this._accountService = _accountService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.tenancyName = '';
  }
  save() {
    if (!this.tenancyName) {
      abp.multiTenancy.setTenantIdCookie(undefined);
      this.bsModalRef.hide();
      location.reload();
      return;
    }
    const input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.IsTenantAvailableInput();
    input.tenancyName = this.tenancyName;
    this.saving = true;
    this._accountService.isTenantAvailable(input).subscribe(result => {
      switch (result.state) {
        case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__.AppTenantAvailabilityState.Available:
          abp.multiTenancy.setTenantIdCookie(result.tenantId);
          location.reload();
          return;
        case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__.AppTenantAvailabilityState.InActive:
          this.message.warn(this.l('TenantIsNotActive', this.tenancyName));
          break;
        case _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__.AppTenantAvailabilityState.NotFound:
          this.message.warn(this.l('ThereIsNoTenantDefinedWithName{0}', this.tenancyName));
          break;
      }
    }, () => {
      this.saving = false;
    });
  }
}
TenantChangeDialogComponent.ɵfac = function TenantChangeDialogComponent_Factory(t) {
  return new (t || TenantChangeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.AccountServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalRef));
};
TenantChangeDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TenantChangeDialogComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 16,
  vars: 12,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["changeTenantForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row"], ["for", "tenancyName", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "id", "tenancyName", "name", "tenancyName", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
  template: function TenantChangeDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function TenantChangeDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function TenantChangeDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TenantChangeDialogComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.tenancyName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "abp-modal-footer", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function TenantChangeDialogComponent_Template_abp_modal_footer_onCancelClick_15_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, "ChangeTenant"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, "TenancyName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenancyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 10, "LeaveEmptyToSwitchToHost"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 73128:
/*!*******************************************************!*\
  !*** ./src/account/tenant/tenant-change.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantChangeComponent": () => (/* binding */ TenantChangeComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _tenant_change_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant-change-dialog.component */ 19813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);






function TenantChangeComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.tenancyName);
  }
}
function TenantChangeComponent_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "NotSelected"));
  }
}
function TenantChangeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TenantChangeComponent_div_0_span_4_Template, 3, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TenantChangeComponent_div_0_span_5_Template, 3, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TenantChangeComponent_div_0_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.showChangeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "CurrentTenant"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.tenancyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.tenancyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "Change"), " ");
  }
}
class TenantChangeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _modalService) {
    super(injector);
    this._modalService = _modalService;
    this.tenancyName = '';
    this.name = '';
  }
  get isMultiTenancyEnabled() {
    return abp.multiTenancy.isEnabled;
  }
  ngOnInit() {
    if (this.appSession.tenant) {
      this.tenancyName = this.appSession.tenant.tenancyName;
      this.name = this.appSession.tenant.name;
    }
  }
  showChangeModal() {
    const modal = this._modalService.show(_tenant_change_dialog_component__WEBPACK_IMPORTED_MODULE_1__.TenantChangeDialogComponent);
    if (this.appSession.tenant) {
      modal.content.tenancyName = this.appSession.tenant.tenancyName;
    }
  }
}
TenantChangeComponent.ɵfac = function TenantChangeComponent_Factory(t) {
  return new (t || TenantChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService));
};
TenantChangeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TenantChangeComponent,
  selectors: [["tenant-change"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "text-center tenant-change-component", 4, "ngIf"], [1, "text-center", "tenant-change-component"], [3, "title", 4, "ngIf"], [4, "ngIf"], ["href", "javascript:;", 3, "click"], [3, "title"]],
  template: function TenantChangeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TenantChangeComponent_div_0_Template, 11, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMultiTenancyEnabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 22732:
/*!********************************!*\
  !*** ./src/shared/AppEnums.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTenantAvailabilityState": () => (/* binding */ AppTenantAvailabilityState)
/* harmony export */ });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);

class AppTenantAvailabilityState {}
AppTenantAvailabilityState.Available = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__.TenantAvailabilityState._1;
AppTenantAvailabilityState.InActive = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__.TenantAvailabilityState._2;
AppTenantAvailabilityState.NotFound = _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__.TenantAvailabilityState._3;

/***/ })

}]);
//# sourceMappingURL=src_account_account_module_ts.js.map