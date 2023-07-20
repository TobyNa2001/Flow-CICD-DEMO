(self["webpackChunkCompanyWebsite"] = self["webpackChunkCompanyWebsite"] || []).push([["main"],{

/***/ 24697:
/*!********************************!*\
  !*** ./src/app-initializer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInitializer": () => (/* binding */ AppInitializer)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 80946);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 45269);
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/session/app-session.service */ 97558);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);









class AppInitializer {
  constructor(_injector, _platformLocation, _httpClient) {
    this._injector = _injector;
    this._platformLocation = _platformLocation;
    this._httpClient = _httpClient;
  }
  init() {
    return () => {
      abp.ui.setBusy();
      return new Promise((resolve, reject) => {
        _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.appBaseHref = this.getBaseHref();
        const appBaseUrl = this.getDocumentOrigin() + _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.appBaseHref;
        this.getApplicationConfig(appBaseUrl, () => {
          this.getUserConfiguration(() => {
            abp.event.trigger('abp.dynamicScriptsInitialized');
            // do not use constructor injection for AppSessionService
            const appSessionService = this._injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__.AppSessionService);
            appSessionService.init().then(result => {
              abp.ui.clearBusy();
              if (this.shouldLoadLocale()) {
                const angularLocale = this.convertAbpLocaleToAngularLocale(abp.localization.currentLanguage.name);
                __webpack_require__(14300)(`./${angularLocale}.mjs`).then(module => {
                  (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(module.default);
                  resolve(result);
                }, reject);
              } else {
                resolve(result);
              }
            }, err => {
              abp.ui.clearBusy();
              reject(err);
            });
          });
        });
      });
    };
  }
  getBaseHref() {
    const baseUrl = this._platformLocation.getBaseHrefFromDOM();
    if (baseUrl) {
      return baseUrl;
    }
    return '/';
  }
  getDocumentOrigin() {
    if (!document.location.origin) {
      const port = document.location.port ? ':' + document.location.port : '';
      return document.location.protocol + '//' + document.location.hostname + port;
    }
    return document.location.origin;
  }
  shouldLoadLocale() {
    return abp.localization.currentLanguage.name && abp.localization.currentLanguage.name !== 'en-US';
  }
  convertAbpLocaleToAngularLocale(locale) {
    if (!_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.localeMappings) {
      return locale;
    }
    const localeMapings = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.localeMappings, {
      from: locale
    });
    if (localeMapings && localeMapings.length) {
      return localeMapings[0]['to'];
    }
    return locale;
  }
  getCurrentClockProvider(currentProviderName) {
    if (currentProviderName === 'unspecifiedClockProvider') {
      return abp.timing.unspecifiedClockProvider;
    }
    if (currentProviderName === 'utcClockProvider') {
      return abp.timing.utcClockProvider;
    }
    return abp.timing.localClockProvider;
  }
  getUserConfiguration(callback) {
    const cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
    const token = abp.auth.getToken();
    const requestHeaders = {
      'Abp.TenantId': `${abp.multiTenancy.getTenantIdCookie()}`,
      '.AspNetCore.Culture': `c=${cookieLangValue}|uic=${cookieLangValue}`
    };
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }
    this._httpClient.get(`${_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.remoteServiceBaseUrl}/AbpUserConfiguration/GetAll`, {
      headers: requestHeaders
    }).subscribe(response => {
      const result = response.result;
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(abp, result);
      abp.clock.provider = this.getCurrentClockProvider(result.clock.provider);
      moment_timezone__WEBPACK_IMPORTED_MODULE_0__.locale(abp.localization.currentLanguage.name);
      if (abp.clock.provider.supportsMultipleTimezone) {
        moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
      }
      callback();
    });
  }
  getApplicationConfig(appRootUrl, callback) {
    this._httpClient.get(`${appRootUrl}assets/${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.appConfig}`, {
      headers: {
        'Abp.TenantId': `${abp.multiTenancy.getTenantIdCookie()}`
      }
    }).subscribe(response => {
      _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.appBaseUrl = response.appBaseUrl;
      _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.remoteServiceBaseUrl = response.remoteServiceBaseUrl;
      _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__.AppConsts.localeMappings = response.localeMappings;
      callback();
    });
  }
}
AppInitializer.ɵfac = function AppInitializer_Factory(t) {
  return new (t || AppInitializer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
AppInitializer.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: AppInitializer,
  factory: AppInitializer.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
  production: false,
  hmr: false,
  appConfig: 'appconfig.json'
};

/***/ }),

/***/ 84187:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": () => (/* binding */ hmrBootstrap)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 39006);


const hmrBootstrap = (module, bootstrap) => {
  let ngModule;
  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
    ngModule.destroy();
    makeVisible();
  });
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _root_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.module */ 91709);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ 84187);
/* harmony import */ var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/min/locales.min */ 69057);
/* harmony import */ var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ 92469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);







if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
const bootstrap = () => {
  return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.platformBrowser().bootstrapModule(_root_module__WEBPACK_IMPORTED_MODULE_1__.RootModule);
};
/* "Hot Module Replacement" is enabled as described on
 * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
 */
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hmr) {
  if (false) {} else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap(); // Regular bootstrap
}

/***/ }),

/***/ 93316:
/*!************************************!*\
  !*** ./src/root-routing.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootRoutingModule": () => (/* binding */ RootRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [{
  path: '',
  redirectTo: '/app/about',
  pathMatch: 'full'
}, {
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! account/account.module */ 72880)).then(m => m.AccountModule),
  data: {
    preload: true
  }
}, {
  path: 'app',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! app/app.module */ 36747)).then(m => m.AppModule),
  data: {
    preload: true
  }
}];
class RootRoutingModule {}
RootRoutingModule.ɵfac = function RootRoutingModule_Factory(t) {
  return new (t || RootRoutingModule)();
};
RootRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RootRoutingModule
});
RootRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 51245:
/*!*******************************!*\
  !*** ./src/root.component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootComponent": () => (/* binding */ RootComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class RootComponent {}
RootComponent.ɵfac = function RootComponent_Factory(t) {
  return new (t || RootComponent)();
};
RootComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RootComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function RootComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 91709:
/*!****************************!*\
  !*** ./src/root.module.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootModule": () => (/* binding */ RootModule),
/* harmony export */   "getCurrentLanguage": () => (/* binding */ getCurrentLanguage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! abp-ng2-module */ 19097);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 8395);
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ 55696);
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root-routing.module */ 93316);
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root.component */ 51245);
/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-initializer */ 24697);






















function getCurrentLanguage() {
  if (abp.localization.currentLanguage.name) {
    return abp.localization.currentLanguage.name;
  }
  // todo: Waiting for https://github.com/angular/angular/issues/31465 to be fixed.
  return 'en';
}
class RootModule {}
RootModule.ɵfac = function RootModule_Factory(t) {
  return new (t || RootModule)();
};
RootModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: RootModule,
  bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_5__.RootComponent]
});
RootModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_9__.AbpHttpInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
    useFactory: appInitializer => appInitializer.init(),
    deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_6__.AppInitializer],
    multi: true
  }, {
    provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL,
    useFactory: () => _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__.AppConsts.remoteServiceBaseUrl
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID,
    useFactory: getCurrentLanguage
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__.ModalModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__.CollapseModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__.TabsModule.forRoot(), _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__.ServiceProxyModule, _root_routing_module__WEBPACK_IMPORTED_MODULE_2__.RootRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RootModule, {
    declarations: [_root_component__WEBPACK_IMPORTED_MODULE_5__.RootComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__.ModalModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_15__.TabsModule, _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_1__.ServiceProxyModule, _root_routing_module__WEBPACK_IMPORTED_MODULE_2__.RootRoutingModule]
  });
})();

/***/ }),

/***/ 85079:
/*!*********************************!*\
  !*** ./src/shared/AppConsts.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConsts": () => (/* binding */ AppConsts)
/* harmony export */ });
class AppConsts {}
AppConsts.localeMappings = [];
AppConsts.userManagement = {
  defaultAdminUserName: 'admin'
};
AppConsts.localization = {
  defaultLocalizationSourceName: 'CompanyWebsite'
};
AppConsts.authorization = {
  encryptedAuthTokenName: 'enc_auth_token'
};

/***/ }),

/***/ 16772:
/*!******************************************!*\
  !*** ./src/shared/app-component-base.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponentBase": () => (/* binding */ AppComponentBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abp-ng2-module */ 19097);
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/session/app-session.service */ 97558);




class AppComponentBase {
  constructor(injector) {
    this.localizationSourceName = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.localization.defaultLocalizationSourceName;
    this.localization = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.LocalizationService);
    this.permission = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.PermissionCheckerService);
    this.feature = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.FeatureCheckerService);
    this.notify = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.NotifyService);
    this.setting = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.SettingService);
    this.message = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.MessageService);
    this.multiTenancy = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.AbpMultiTenancyService);
    this.appSession = injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_1__.AppSessionService);
    this.elementRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
  }
  l(key, ...args) {
    let localizedText = this.localization.localize(key, this.localizationSourceName);
    if (!localizedText) {
      localizedText = key;
    }
    if (!args || !args.length) {
      return localizedText;
    }
    args.unshift(localizedText);
    return abp.utils.formatString.apply(this, args);
  }
  isGranted(permissionName) {
    return this.permission.isGranted(permissionName);
  }
}

/***/ }),

/***/ 50895:
/*!*********************************************!*\
  !*** ./src/shared/auth/app-auth.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppAuthService": () => (/* binding */ AppAuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/helpers/UrlHelper */ 87737);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! abp-ng2-module */ 19097);








class AppAuthService {
  constructor(_tokenAuthService, _router, _utilsService, _tokenService, _logService) {
    this._tokenAuthService = _tokenAuthService;
    this._router = _router;
    this._utilsService = _utilsService;
    this._tokenService = _tokenService;
    this._logService = _logService;
    this.clear();
  }
  logout(reload) {
    abp.auth.clearToken();
    abp.utils.deleteCookie(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.authorization.encryptedAuthTokenName);
    if (reload !== false) {
      location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.appBaseUrl;
    }
  }
  authenticate(finallyCallback) {
    finallyCallback = finallyCallback || (() => {});
    this._tokenAuthService.authenticate(this.authenticateModel).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      finallyCallback();
    })).subscribe(result => {
      this.processAuthenticateResult(result);
    });
  }
  processAuthenticateResult(authenticateResult) {
    this.authenticateResult = authenticateResult;
    if (authenticateResult.accessToken) {
      // Successfully logged in
      this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe);
    } else {
      // Unexpected result!
      this._logService.warn('Unexpected authenticateResult!');
      this._router.navigate(['account/login']);
    }
  }
  login(accessToken, encryptedAccessToken, expireInSeconds, rememberMe) {
    const tokenExpireDate = rememberMe ? new Date(new Date().getTime() + 1000 * expireInSeconds) : undefined;
    this._tokenService.setToken(accessToken, tokenExpireDate);
    this._utilsService.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.authorization.encryptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);
    let initialUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_1__.UrlHelper.initialUrl;
    if (initialUrl.indexOf('/login') > 0) {
      initialUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.appBaseUrl;
    }
    location.href = initialUrl;
  }
  clear() {
    this.authenticateModel = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.AuthenticateModel();
    this.authenticateModel.rememberClient = false;
    this.authenticateResult = null;
    this.rememberMe = false;
  }
}
AppAuthService.ɵfac = function AppAuthService_Factory(t) {
  return new (t || AppAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.TokenAuthServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_6__.LogService));
};
AppAuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AppAuthService,
  factory: AppAuthService.ɵfac
});

/***/ }),

/***/ 21268:
/*!*********************************************!*\
  !*** ./src/shared/auth/auth-route-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouteGuard": () => (/* binding */ AppRouteGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abp-ng2-module */ 19097);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session/app-session.service */ 97558);




class AppRouteGuard {
  constructor(_permissionChecker, _router, _sessionService) {
    this._permissionChecker = _permissionChecker;
    this._router = _router;
    this._sessionService = _sessionService;
  }
  canActivate(route, state) {
    if (!this._sessionService.user) {
      this._router.navigate(['/account/login']);
      return false;
    }
    if (!route.data || !route.data['permission']) {
      return true;
    }
    if (this._permissionChecker.isGranted(route.data['permission'])) {
      return true;
    }
    this._router.navigate([this.selectBestRoute()]);
    return false;
  }
  canActivateChild(route, state) {
    return this.canActivate(route, state);
  }
  selectBestRoute() {
    if (!this._sessionService.user) {
      return '/account/login';
    }
    if (this._permissionChecker.isGranted('Pages.Users')) {
      return '/app/admin/users';
    }
    return '/app/home';
  }
}
AppRouteGuard.ɵfac = function AppRouteGuard_Factory(t) {
  return new (t || AppRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.PermissionCheckerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_0__.AppSessionService));
};
AppRouteGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AppRouteGuard,
  factory: AppRouteGuard.ɵfac
});

/***/ }),

/***/ 74307:
/*!*******************************************************************!*\
  !*** ./src/shared/components/modal/abp-modal-footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbpModalFooterComponent": () => (/* binding */ AbpModalFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);



class AbpModalFooterComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.cancelLabel = this.l('Cancel');
    this.saveLabel = this.l('Save');
    this.onCancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
}
AbpModalFooterComponent.ɵfac = function AbpModalFooterComponent_Factory(t) {
  return new (t || AbpModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
AbpModalFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AbpModalFooterComponent,
  selectors: [["abp-modal-footer"]],
  inputs: {
    cancelLabel: "cancelLabel",
    cancelDisabled: "cancelDisabled",
    saveLabel: "saveLabel",
    saveDisabled: "saveDisabled"
  },
  outputs: {
    onCancelClick: "onCancelClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [[1, "modal-footer", "justify-content-between"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
  template: function AbpModalFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AbpModalFooterComponent_Template_button_click_1_listener() {
        return ctx.onCancelClick.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.cancelDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.cancelLabel, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saveDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.saveLabel, " ");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 20219:
/*!*******************************************************************!*\
  !*** ./src/shared/components/modal/abp-modal-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbpModalHeaderComponent": () => (/* binding */ AbpModalHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);



class AbpModalHeaderComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.onCloseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
}
AbpModalHeaderComponent.ɵfac = function AbpModalHeaderComponent_Factory(t) {
  return new (t || AbpModalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
AbpModalHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AbpModalHeaderComponent,
  selectors: [["abp-modal-header"]],
  inputs: {
    title: "title"
  },
  outputs: {
    onCloseClick: "onCloseClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 1,
  consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
  template: function AbpModalHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AbpModalHeaderComponent_Template_button_click_3_listener() {
        return ctx.onCloseClick.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 4798:
/*!*******************************************************************************!*\
  !*** ./src/shared/components/pagination/abp-pagination-controls.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbpPaginationControlsComponent": () => (/* binding */ AbpPaginationControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 92302);




function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AbpPaginationControlsComponent_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AbpPaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_a_1_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_1_a_2_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
  }
}
function AbpPaginationControlsComponent_ul_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const page_r9 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.setCurrent(page_r9.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", _r0.getCurrent() === page_r9.value ? "0" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _r0.getCurrent() === page_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9.label, " ");
  }
}
function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AbpPaginationControlsComponent_ul_3_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AbpPaginationControlsComponent_ul_3_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_3_a_1_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_3_a_2_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
  }
}
function AbpPaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_2_Template, 3, 5, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_li_3_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
  }
}
class AbpPaginationControlsComponent {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = 'Previous';
    this.nextLabel = 'Next';
    this.screenReaderPaginationLabel = 'Pagination';
    this.screenReaderPageLabel = 'page';
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = !!value && value !== 'false';
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = !!value && value !== 'false';
  }
}
AbpPaginationControlsComponent.ɵfac = function AbpPaginationControlsComponent_Factory(t) {
  return new (t || AbpPaginationControlsComponent)();
};
AbpPaginationControlsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AbpPaginationControlsComponent,
  selectors: [["abp-pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel",
    directionLinks: "directionLinks",
    autoHide: "autoHide"
  },
  outputs: {
    pageChange: "pageChange"
  },
  decls: 4,
  vars: 3,
  consts: [[3, "id", "maxSize", "pageChange"], ["p", "paginationApi"], ["class", "pagination m-0", 4, "ngIf"], [1, "pagination", "m-0"], ["class", "page-item", 3, "disabled", 4, "ngIf"], ["class", "page-item", 3, "active", "z-index", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "href", "javascript:;", 3, "click", 4, "ngIf"], ["class", "page-link", "href", "javascript:;", 4, "ngIf"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["href", "javascript:;", 1, "page-link"], [1, "fas", "fa-chevron-right"]],
  template: function AbpPaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AbpPaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        return ctx.pageChange.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_Template, 4, 3, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsDirective],
  encapsulation: 2
});

/***/ }),

/***/ 43421:
/*!******************************************************************************!*\
  !*** ./src/shared/components/validation/abp-validation.summary.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbpValidationSummaryComponent": () => (/* binding */ AbpValidationSummaryComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validationError_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-block", !!ctx_r3.control.errors[validationError_r2.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getValidationErrorMessage(validationError_r2), " ");
  }
}
function AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const validationError_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r1.control.errors[validationError_r2.name]);
  }
}
function AbpValidationSummaryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
  }
}
class AbpValidationSummaryComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _renderer) {
    super(injector);
    this._renderer = _renderer;
    this.defaultValidationErrors = [{
      name: 'required',
      localizationKey: 'ThisFieldIsRequired'
    }, {
      name: 'minlength',
      localizationKey: 'PleaseEnterAtLeastNCharacter',
      propertyKey: 'requiredLength'
    }, {
      name: 'maxlength',
      localizationKey: 'PleaseEnterNoMoreThanNCharacter',
      propertyKey: 'requiredLength'
    }, {
      name: 'email',
      localizationKey: 'InvalidEmailAddress'
    }, {
      name: 'pattern',
      localizationKey: 'InvalidPattern',
      propertyKey: 'requiredPattern'
    }, {
      name: 'validateEqual',
      localizationKey: 'PairsDoNotMatch'
    }];
    this.validationErrors = this.defaultValidationErrors;
  }
  set customValidationErrors(val) {
    if (val && val.length > 0) {
      const defaults = this.defaultValidationErrors.filter(defaultValidationError => !val.find(customValidationError => customValidationError.name === defaultValidationError.name));
      this.validationErrors = [...defaults, ...val];
    }
  }
  ngOnInit() {
    if (this.controlEl) {
      this.control.valueChanges.subscribe(() => {
        if (this.control.valid && (this.control.dirty || this.control.touched)) {
          this._renderer.removeClass(this.controlEl, 'is-invalid');
        }
      });
    }
  }
  getValidationErrorMessage(error) {
    if (this.controlEl) {
      this._renderer.addClass(this.controlEl, 'is-invalid');
    }
    const propertyValue = this.control.errors[error.name][error.propertyKey];
    return !!propertyValue ? this.l(error.localizationKey, propertyValue) : this.l(error.localizationKey);
  }
}
AbpValidationSummaryComponent.ɵfac = function AbpValidationSummaryComponent_Factory(t) {
  return new (t || AbpValidationSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
AbpValidationSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AbpValidationSummaryComponent,
  selectors: [["abp-validation-summary"]],
  inputs: {
    control: "control",
    controlEl: "controlEl",
    customValidationErrors: "customValidationErrors"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "error invalid-feedback", 3, "d-block", 4, "ngIf"], [1, "error", "invalid-feedback"]],
  template: function AbpValidationSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AbpValidationSummaryComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.control.invalid && (ctx.control.dirty || ctx.control.touched));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 72481:
/*!*************************************************!*\
  !*** ./src/shared/directives/busy.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyDirective": () => (/* binding */ BusyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BusyDirective {
  constructor(_element) {
    this._element = _element;
  }
  set busy(isBusy) {
    this.refreshState(isBusy);
  }
  refreshState(isBusy) {
    if (isBusy === undefined) {
      return;
    }
    if (isBusy) {
      abp.ui.setBusy(this._element.nativeElement);
    } else {
      abp.ui.clearBusy(this._element.nativeElement);
    }
  }
}
BusyDirective.ɵfac = function BusyDirective_Factory(t) {
  return new (t || BusyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
BusyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BusyDirective,
  selectors: [["", "busy", ""]],
  inputs: {
    busy: "busy"
  }
});

/***/ }),

/***/ 92591:
/*!************************************************************!*\
  !*** ./src/shared/directives/equal-validator.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EqualValidator": () => (/* binding */ EqualValidator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



class EqualValidator {
  constructor(validateEqual, reverse) {
    this.validateEqual = validateEqual;
    this.reverse = reverse;
  }
  get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true : false;
  }
  validate(control) {
    // self value
    const value = control.value;
    // second control
    const control2 = control.root.get(this.validateEqual);
    // value not equal
    if (control2 && value !== control2.value && !this.isReverse) {
      return {
        validateEqual: true
      };
    }
    // value equal and reverse
    if (control2 && value === control2.value && this.isReverse) {
      delete control2.errors['validateEqual'];
      if (!Object.keys(control2.errors).length) {
        control2.setErrors(null);
      }
    }
    // value not equal and reverse
    if (control2 && value !== control2.value && this.isReverse) {
      control2.setErrors({
        validateEqual: true
      });
    }
    return null;
  }
}
EqualValidator.ɵfac = function EqualValidator_Factory(t) {
  return new (t || EqualValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('validateEqual'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('reverse'));
};
EqualValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EqualValidator,
  selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EqualValidator),
    multi: true
  }])]
});

/***/ }),

/***/ 87737:
/*!*****************************************!*\
  !*** ./src/shared/helpers/UrlHelper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlHelper": () => (/* binding */ UrlHelper)
/* harmony export */ });
class UrlHelper {
  static getQueryParameters() {
    return document.location.search.replace(/(^\?)/, '').split('&').map(function (n) {
      return n = n.split('='), this[n[0]] = n[1], this;
    }.bind({}))[0];
  }
}
/**
 * The URL requested, before initial routing.
 */
UrlHelper.initialUrl = location.href;

/***/ }),

/***/ 91077:
/*!***************************************************!*\
  !*** ./src/shared/layout/layout-store.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutStoreService": () => (/* binding */ LayoutStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 44276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);



class LayoutStoreService {
  constructor() {
    this.initialLayoutConfig = {
      sidebarExpanded: false
    };
    this.configSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.initialLayoutConfig);
    this.config$ = this.configSource.asObservable();
  }
  get sidebarExpanded() {
    return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.pluck)('sidebarExpanded'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  }
  setSidebarExpanded(value) {
    this.configSource.next(Object.assign(this.configSource.value, {
      sidebarExpanded: value
    }));
  }
}
LayoutStoreService.ɵfac = function LayoutStoreService_Factory(t) {
  return new (t || LayoutStoreService)();
};
LayoutStoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LayoutStoreService,
  factory: LayoutStoreService.ɵfac
});

/***/ }),

/***/ 37936:
/*!*******************************************!*\
  !*** ./src/shared/nav/app-url.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppUrlService": () => (/* binding */ AppUrlService)
/* harmony export */ });
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session/app-session.service */ 97558);



class AppUrlService {
  constructor(_appSessionService) {
    this._appSessionService = _appSessionService;
  }
  get appRootUrl() {
    if (this._appSessionService.tenant) {
      return this.getAppRootUrlOfTenant(this._appSessionService.tenant.tenancyName);
    } else {
      return this.getAppRootUrlOfTenant(null);
    }
  }
  /**
   * Returning url ends with '/'.
   */
  getAppRootUrlOfTenant(tenancyName) {
    let baseUrl = this.ensureEndsWith(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.appBaseUrl, '/');
    if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder) < 0) {
      return baseUrl;
    }
    if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder + '.') >= 0) {
      baseUrl = baseUrl.replace(AppUrlService.tenancyNamePlaceHolder + '.', AppUrlService.tenancyNamePlaceHolder);
      if (tenancyName) {
        tenancyName = tenancyName + '.';
      }
    }
    if (!tenancyName) {
      return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, '');
    }
    return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, tenancyName);
  }
  ensureEndsWith(str, c) {
    if (str.charAt(str.length - 1) !== c) {
      str = str + c;
    }
    return str;
  }
  removeFromEnd(str, c) {
    if (str.charAt(str.length - 1) === c) {
      str = str.substr(0, str.length - 1);
    }
    return str;
  }
}
AppUrlService.tenancyNamePlaceHolder = '{TENANCY_NAME}';
AppUrlService.ɵfac = function AppUrlService_Factory(t) {
  return new (t || AppUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_1__.AppSessionService));
};
AppUrlService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppUrlService,
  factory: AppUrlService.ɵfac
});

/***/ }),

/***/ 35832:
/*!*******************************************!*\
  !*** ./src/shared/pipes/localize.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizePipe": () => (/* binding */ LocalizePipe)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LocalizePipe extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
  }
  transform(key, ...args) {
    return this.l(key, ...args);
  }
}
LocalizePipe.ɵfac = function LocalizePipe_Factory(t) {
  return new (t || LocalizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, 16));
};
LocalizePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "localize",
  type: LocalizePipe,
  pure: true
});

/***/ }),

/***/ 37857:
/*!*******************************************************!*\
  !*** ./src/shared/service-proxies/service-proxies.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": () => (/* binding */ API_BASE_URL),
/* harmony export */   "AccountServiceProxy": () => (/* binding */ AccountServiceProxy),
/* harmony export */   "ApiException": () => (/* binding */ ApiException),
/* harmony export */   "ApplicationInfoDto": () => (/* binding */ ApplicationInfoDto),
/* harmony export */   "AuthenticateModel": () => (/* binding */ AuthenticateModel),
/* harmony export */   "AuthenticateResultModel": () => (/* binding */ AuthenticateResultModel),
/* harmony export */   "ChangePasswordDto": () => (/* binding */ ChangePasswordDto),
/* harmony export */   "ChangeUiThemeInput": () => (/* binding */ ChangeUiThemeInput),
/* harmony export */   "ChangeUserLanguageDto": () => (/* binding */ ChangeUserLanguageDto),
/* harmony export */   "ConfigurationServiceProxy": () => (/* binding */ ConfigurationServiceProxy),
/* harmony export */   "CreateRoleDto": () => (/* binding */ CreateRoleDto),
/* harmony export */   "CreateTenantDto": () => (/* binding */ CreateTenantDto),
/* harmony export */   "CreateUserDto": () => (/* binding */ CreateUserDto),
/* harmony export */   "ExternalAuthenticateModel": () => (/* binding */ ExternalAuthenticateModel),
/* harmony export */   "ExternalAuthenticateResultModel": () => (/* binding */ ExternalAuthenticateResultModel),
/* harmony export */   "ExternalLoginProviderInfoModel": () => (/* binding */ ExternalLoginProviderInfoModel),
/* harmony export */   "FlatPermissionDto": () => (/* binding */ FlatPermissionDto),
/* harmony export */   "GetCurrentLoginInformationsOutput": () => (/* binding */ GetCurrentLoginInformationsOutput),
/* harmony export */   "GetRoleForEditOutput": () => (/* binding */ GetRoleForEditOutput),
/* harmony export */   "Int64EntityDto": () => (/* binding */ Int64EntityDto),
/* harmony export */   "IsTenantAvailableInput": () => (/* binding */ IsTenantAvailableInput),
/* harmony export */   "IsTenantAvailableOutput": () => (/* binding */ IsTenantAvailableOutput),
/* harmony export */   "PermissionDto": () => (/* binding */ PermissionDto),
/* harmony export */   "PermissionDtoListResultDto": () => (/* binding */ PermissionDtoListResultDto),
/* harmony export */   "RegisterInput": () => (/* binding */ RegisterInput),
/* harmony export */   "RegisterOutput": () => (/* binding */ RegisterOutput),
/* harmony export */   "ResetPasswordDto": () => (/* binding */ ResetPasswordDto),
/* harmony export */   "RoleDto": () => (/* binding */ RoleDto),
/* harmony export */   "RoleDtoListResultDto": () => (/* binding */ RoleDtoListResultDto),
/* harmony export */   "RoleDtoPagedResultDto": () => (/* binding */ RoleDtoPagedResultDto),
/* harmony export */   "RoleEditDto": () => (/* binding */ RoleEditDto),
/* harmony export */   "RoleListDto": () => (/* binding */ RoleListDto),
/* harmony export */   "RoleListDtoListResultDto": () => (/* binding */ RoleListDtoListResultDto),
/* harmony export */   "RoleServiceProxy": () => (/* binding */ RoleServiceProxy),
/* harmony export */   "SessionServiceProxy": () => (/* binding */ SessionServiceProxy),
/* harmony export */   "TenantAvailabilityState": () => (/* binding */ TenantAvailabilityState),
/* harmony export */   "TenantDto": () => (/* binding */ TenantDto),
/* harmony export */   "TenantDtoPagedResultDto": () => (/* binding */ TenantDtoPagedResultDto),
/* harmony export */   "TenantLoginInfoDto": () => (/* binding */ TenantLoginInfoDto),
/* harmony export */   "TenantServiceProxy": () => (/* binding */ TenantServiceProxy),
/* harmony export */   "TokenAuthServiceProxy": () => (/* binding */ TokenAuthServiceProxy),
/* harmony export */   "UserDto": () => (/* binding */ UserDto),
/* harmony export */   "UserDtoPagedResultDto": () => (/* binding */ UserDtoPagedResultDto),
/* harmony export */   "UserLoginInfoDto": () => (/* binding */ UserLoginInfoDto),
/* harmony export */   "UserServiceProxy": () => (/* binding */ UserServiceProxy)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.1.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming







const API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('API_BASE_URL');
class AccountServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  isTenantAvailable(body) {
    let url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processIsTenantAvailable(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processIsTenantAvailable(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processIsTenantAvailable(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = IsTenantAvailableOutput.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  register(body) {
    let url_ = this.baseUrl + "/api/services/app/Account/Register";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processRegister(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processRegister(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processRegister(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RegisterOutput.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
AccountServiceProxy.ɵfac = function AccountServiceProxy_Factory(t) {
  return new (t || AccountServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
AccountServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AccountServiceProxy,
  factory: AccountServiceProxy.ɵfac
});
class ConfigurationServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  changeUiTheme(body) {
    let url_ = this.baseUrl + "/api/services/app/Configuration/ChangeUiTheme";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processChangeUiTheme(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processChangeUiTheme(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processChangeUiTheme(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
ConfigurationServiceProxy.ɵfac = function ConfigurationServiceProxy_Factory(t) {
  return new (t || ConfigurationServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
ConfigurationServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ConfigurationServiceProxy,
  factory: ConfigurationServiceProxy.ɵfac
});
class RoleServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  create(body) {
    let url_ = this.baseUrl + "/api/services/app/Role/Create";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processCreate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processCreate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processCreate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param permission (optional)
   * @return Success
   */
  getRoles(permission) {
    let url_ = this.baseUrl + "/api/services/app/Role/GetRoles?";
    if (permission === null) throw new Error("The parameter 'permission' cannot be null.");else if (permission !== undefined) url_ += "Permission=" + encodeURIComponent("" + permission) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetRoles(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetRoles(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetRoles(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleListDtoListResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  update(body) {
    let url_ = this.baseUrl + "/api/services/app/Role/Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processUpdate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processUpdate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processUpdate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  delete(id) {
    let url_ = this.baseUrl + "/api/services/app/Role/Delete?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({})
    };
    return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processDelete(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processDelete(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processDelete(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @return Success
   */
  getAllPermissions() {
    let url_ = this.baseUrl + "/api/services/app/Role/GetAllPermissions";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetAllPermissions(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetAllPermissions(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetAllPermissions(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = PermissionDtoListResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  getRoleForEdit(id) {
    let url_ = this.baseUrl + "/api/services/app/Role/GetRoleForEdit?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetRoleForEdit(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetRoleForEdit(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetRoleForEdit(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetRoleForEditOutput.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  get(id) {
    let url_ = this.baseUrl + "/api/services/app/Role/Get?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGet(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGet(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGet(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param keyword (optional)
   * @param skipCount (optional)
   * @param maxResultCount (optional)
   * @return Success
   */
  getAll(keyword, skipCount, maxResultCount) {
    let url_ = this.baseUrl + "/api/services/app/Role/GetAll?";
    if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
    if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
    if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetAll(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetAll(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetAll(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleDtoPagedResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
RoleServiceProxy.ɵfac = function RoleServiceProxy_Factory(t) {
  return new (t || RoleServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
RoleServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RoleServiceProxy,
  factory: RoleServiceProxy.ɵfac
});
class SessionServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @return Success
   */
  getCurrentLoginInformations() {
    let url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetCurrentLoginInformations(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetCurrentLoginInformations(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetCurrentLoginInformations(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = GetCurrentLoginInformationsOutput.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
SessionServiceProxy.ɵfac = function SessionServiceProxy_Factory(t) {
  return new (t || SessionServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
SessionServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SessionServiceProxy,
  factory: SessionServiceProxy.ɵfac
});
class TenantServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  create(body) {
    let url_ = this.baseUrl + "/api/services/app/Tenant/Create";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processCreate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processCreate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processCreate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TenantDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  delete(id) {
    let url_ = this.baseUrl + "/api/services/app/Tenant/Delete?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({})
    };
    return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processDelete(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processDelete(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processDelete(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  get(id) {
    let url_ = this.baseUrl + "/api/services/app/Tenant/Get?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGet(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGet(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGet(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TenantDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param keyword (optional)
   * @param isActive (optional)
   * @param skipCount (optional)
   * @param maxResultCount (optional)
   * @return Success
   */
  getAll(keyword, isActive, skipCount, maxResultCount) {
    let url_ = this.baseUrl + "/api/services/app/Tenant/GetAll?";
    if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
    if (isActive === null) throw new Error("The parameter 'isActive' cannot be null.");else if (isActive !== undefined) url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
    if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
    if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetAll(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetAll(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetAll(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TenantDtoPagedResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  update(body) {
    let url_ = this.baseUrl + "/api/services/app/Tenant/Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processUpdate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processUpdate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processUpdate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TenantDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
TenantServiceProxy.ɵfac = function TenantServiceProxy_Factory(t) {
  return new (t || TenantServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
TenantServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TenantServiceProxy,
  factory: TenantServiceProxy.ɵfac
});
class TokenAuthServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  authenticate(body) {
    let url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processAuthenticate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processAuthenticate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processAuthenticate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = AuthenticateResultModel.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @return Success
   */
  getExternalAuthenticationProviders() {
    let url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetExternalAuthenticationProviders(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetExternalAuthenticationProviders(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetExternalAuthenticationProviders(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [];
          for (let item of resultData200) result200.push(ExternalLoginProviderInfoModel.fromJS(item));
        } else {
          result200 = null;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  externalAuthenticate(body) {
    let url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processExternalAuthenticate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processExternalAuthenticate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processExternalAuthenticate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = ExternalAuthenticateResultModel.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
TokenAuthServiceProxy.ɵfac = function TokenAuthServiceProxy_Factory(t) {
  return new (t || TokenAuthServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
TokenAuthServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenAuthServiceProxy,
  factory: TokenAuthServiceProxy.ɵfac
});
class UserServiceProxy {
  constructor(http, baseUrl) {
    this.jsonParseReviver = undefined;
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }
  /**
   * @param body (optional)
   * @return Success
   */
  create(body) {
    let url_ = this.baseUrl + "/api/services/app/User/Create";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processCreate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processCreate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processCreate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  update(body) {
    let url_ = this.baseUrl + "/api/services/app/User/Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("put", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processUpdate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processUpdate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processUpdate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  delete(id) {
    let url_ = this.baseUrl + "/api/services/app/User/Delete?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({})
    };
    return this.http.request("delete", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processDelete(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processDelete(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processDelete(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  activate(body) {
    let url_ = this.baseUrl + "/api/services/app/User/Activate";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processActivate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processActivate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processActivate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  deActivate(body) {
    let url_ = this.baseUrl + "/api/services/app/User/DeActivate";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processDeActivate(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processDeActivate(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processDeActivate(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @return Success
   */
  getRoles() {
    let url_ = this.baseUrl + "/api/services/app/User/GetRoles";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetRoles(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetRoles(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetRoles(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = RoleDtoListResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  changeLanguage(body) {
    let url_ = this.baseUrl + "/api/services/app/User/ChangeLanguage";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processChangeLanguage(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processChangeLanguage(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processChangeLanguage(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  changePassword(body) {
    let url_ = this.baseUrl + "/api/services/app/User/ChangePassword";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processChangePassword(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processChangePassword(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processChangePassword(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : null;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param body (optional)
   * @return Success
   */
  resetPassword(body) {
    let url_ = this.baseUrl + "/api/services/app/User/ResetPassword";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);
    let options_ = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    return this.http.request("post", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processResetPassword(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processResetPassword(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processResetPassword(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : null;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param id (optional)
   * @return Success
   */
  get(id) {
    let url_ = this.baseUrl + "/api/services/app/User/Get?";
    if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGet(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGet(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGet(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
  /**
   * @param keyword (optional)
   * @param isActive (optional)
   * @param skipCount (optional)
   * @param maxResultCount (optional)
   * @return Success
   */
  getAll(keyword, isActive, skipCount, maxResultCount) {
    let url_ = this.baseUrl + "/api/services/app/User/GetAll?";
    if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
    if (isActive === null) throw new Error("The parameter 'isActive' cannot be null.");else if (isActive !== undefined) url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
    if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
    if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      observe: "response",
      responseType: "blob",
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Accept": "text/plain"
      })
    };
    return this.http.request("get", url_, options_).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(response_ => {
      return this.processGetAll(response_);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(response_ => {
      if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponseBase) {
        try {
          return this.processGetAll(response_);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }
      } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(response_);
    }));
  }
  processGetAll(response) {
    const status = response.status;
    const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? response.body : response.error instanceof Blob ? response.error : undefined;
    let _headers = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        let result200 = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = UserDtoPagedResultDto.fromJS(resultData200);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
  }
}
UserServiceProxy.ɵfac = function UserServiceProxy_Factory(t) {
  return new (t || UserServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](API_BASE_URL, 8));
};
UserServiceProxy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserServiceProxy,
  factory: UserServiceProxy.ɵfac
});
class ApplicationInfoDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.version = _data["version"];
      this.releaseDate = _data["releaseDate"] ? moment__WEBPACK_IMPORTED_MODULE_0__(_data["releaseDate"].toString()) : undefined;
      if (_data["features"]) {
        this.features = {};
        for (let key in _data["features"]) {
          if (_data["features"].hasOwnProperty(key)) this.features[key] = _data["features"][key];
        }
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ApplicationInfoDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["version"] = this.version;
    data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : undefined;
    if (this.features) {
      data["features"] = {};
      for (let key in this.features) {
        if (this.features.hasOwnProperty(key)) data["features"][key] = this.features[key];
      }
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ApplicationInfoDto();
    result.init(json);
    return result;
  }
}
class AuthenticateModel {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.userNameOrEmailAddress = _data["userNameOrEmailAddress"];
      this.password = _data["password"];
      this.rememberClient = _data["rememberClient"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateModel();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
    data["password"] = this.password;
    data["rememberClient"] = this.rememberClient;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new AuthenticateModel();
    result.init(json);
    return result;
  }
}
class AuthenticateResultModel {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.accessToken = _data["accessToken"];
      this.encryptedAccessToken = _data["encryptedAccessToken"];
      this.expireInSeconds = _data["expireInSeconds"];
      this.userId = _data["userId"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateResultModel();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["accessToken"] = this.accessToken;
    data["encryptedAccessToken"] = this.encryptedAccessToken;
    data["expireInSeconds"] = this.expireInSeconds;
    data["userId"] = this.userId;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new AuthenticateResultModel();
    result.init(json);
    return result;
  }
}
class ChangePasswordDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.currentPassword = _data["currentPassword"];
      this.newPassword = _data["newPassword"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ChangePasswordDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["currentPassword"] = this.currentPassword;
    data["newPassword"] = this.newPassword;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ChangePasswordDto();
    result.init(json);
    return result;
  }
}
class ChangeUiThemeInput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.theme = _data["theme"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ChangeUiThemeInput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["theme"] = this.theme;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ChangeUiThemeInput();
    result.init(json);
    return result;
  }
}
class ChangeUserLanguageDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.languageName = _data["languageName"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ChangeUserLanguageDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["languageName"] = this.languageName;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ChangeUserLanguageDto();
    result.init(json);
    return result;
  }
}
class CreateRoleDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.normalizedName = _data["normalizedName"];
      this.description = _data["description"];
      if (Array.isArray(_data["grantedPermissions"])) {
        this.grantedPermissions = [];
        for (let item of _data["grantedPermissions"]) this.grantedPermissions.push(item);
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new CreateRoleDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["normalizedName"] = this.normalizedName;
    data["description"] = this.description;
    if (Array.isArray(this.grantedPermissions)) {
      data["grantedPermissions"] = [];
      for (let item of this.grantedPermissions) data["grantedPermissions"].push(item);
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new CreateRoleDto();
    result.init(json);
    return result;
  }
}
class CreateTenantDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
      this.adminEmailAddress = _data["adminEmailAddress"];
      this.connectionString = _data["connectionString"];
      this.isActive = _data["isActive"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new CreateTenantDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    data["adminEmailAddress"] = this.adminEmailAddress;
    data["connectionString"] = this.connectionString;
    data["isActive"] = this.isActive;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new CreateTenantDto();
    result.init(json);
    return result;
  }
}
class CreateUserDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.userName = _data["userName"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.emailAddress = _data["emailAddress"];
      this.isActive = _data["isActive"];
      if (Array.isArray(_data["roleNames"])) {
        this.roleNames = [];
        for (let item of _data["roleNames"]) this.roleNames.push(item);
      }
      this.password = _data["password"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUserDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["userName"] = this.userName;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["emailAddress"] = this.emailAddress;
    data["isActive"] = this.isActive;
    if (Array.isArray(this.roleNames)) {
      data["roleNames"] = [];
      for (let item of this.roleNames) data["roleNames"].push(item);
    }
    data["password"] = this.password;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new CreateUserDto();
    result.init(json);
    return result;
  }
}
class ExternalAuthenticateModel {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.authProvider = _data["authProvider"];
      this.providerKey = _data["providerKey"];
      this.providerAccessCode = _data["providerAccessCode"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalAuthenticateModel();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["authProvider"] = this.authProvider;
    data["providerKey"] = this.providerKey;
    data["providerAccessCode"] = this.providerAccessCode;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ExternalAuthenticateModel();
    result.init(json);
    return result;
  }
}
class ExternalAuthenticateResultModel {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.accessToken = _data["accessToken"];
      this.encryptedAccessToken = _data["encryptedAccessToken"];
      this.expireInSeconds = _data["expireInSeconds"];
      this.waitingForActivation = _data["waitingForActivation"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalAuthenticateResultModel();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["accessToken"] = this.accessToken;
    data["encryptedAccessToken"] = this.encryptedAccessToken;
    data["expireInSeconds"] = this.expireInSeconds;
    data["waitingForActivation"] = this.waitingForActivation;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ExternalAuthenticateResultModel();
    result.init(json);
    return result;
  }
}
class ExternalLoginProviderInfoModel {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.name = _data["name"];
      this.clientId = _data["clientId"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalLoginProviderInfoModel();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["clientId"] = this.clientId;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ExternalLoginProviderInfoModel();
    result.init(json);
    return result;
  }
}
class FlatPermissionDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new FlatPermissionDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new FlatPermissionDto();
    result.init(json);
    return result;
  }
}
class GetCurrentLoginInformationsOutput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.application = _data["application"] ? ApplicationInfoDto.fromJS(_data["application"]) : undefined;
      this.user = _data["user"] ? UserLoginInfoDto.fromJS(_data["user"]) : undefined;
      this.tenant = _data["tenant"] ? TenantLoginInfoDto.fromJS(_data["tenant"]) : undefined;
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new GetCurrentLoginInformationsOutput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["application"] = this.application ? this.application.toJSON() : undefined;
    data["user"] = this.user ? this.user.toJSON() : undefined;
    data["tenant"] = this.tenant ? this.tenant.toJSON() : undefined;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new GetCurrentLoginInformationsOutput();
    result.init(json);
    return result;
  }
}
class GetRoleForEditOutput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.role = _data["role"] ? RoleEditDto.fromJS(_data["role"]) : undefined;
      if (Array.isArray(_data["permissions"])) {
        this.permissions = [];
        for (let item of _data["permissions"]) this.permissions.push(FlatPermissionDto.fromJS(item));
      }
      if (Array.isArray(_data["grantedPermissionNames"])) {
        this.grantedPermissionNames = [];
        for (let item of _data["grantedPermissionNames"]) this.grantedPermissionNames.push(item);
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new GetRoleForEditOutput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["role"] = this.role ? this.role.toJSON() : undefined;
    if (Array.isArray(this.permissions)) {
      data["permissions"] = [];
      for (let item of this.permissions) data["permissions"].push(item.toJSON());
    }
    if (Array.isArray(this.grantedPermissionNames)) {
      data["grantedPermissionNames"] = [];
      for (let item of this.grantedPermissionNames) data["grantedPermissionNames"].push(item);
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new GetRoleForEditOutput();
    result.init(json);
    return result;
  }
}
class Int64EntityDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new Int64EntityDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new Int64EntityDto();
    result.init(json);
    return result;
  }
}
class IsTenantAvailableInput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.tenancyName = _data["tenancyName"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new IsTenantAvailableInput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["tenancyName"] = this.tenancyName;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new IsTenantAvailableInput();
    result.init(json);
    return result;
  }
}
class IsTenantAvailableOutput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.state = _data["state"];
      this.tenantId = _data["tenantId"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new IsTenantAvailableOutput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["state"] = this.state;
    data["tenantId"] = this.tenantId;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new IsTenantAvailableOutput();
    result.init(json);
    return result;
  }
}
class PermissionDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new PermissionDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new PermissionDto();
    result.init(json);
    return result;
  }
}
class PermissionDtoListResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(PermissionDto.fromJS(item));
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new PermissionDtoListResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new PermissionDtoListResultDto();
    result.init(json);
    return result;
  }
}
class RegisterInput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.userName = _data["userName"];
      this.emailAddress = _data["emailAddress"];
      this.password = _data["password"];
      this.captchaResponse = _data["captchaResponse"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterInput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["userName"] = this.userName;
    data["emailAddress"] = this.emailAddress;
    data["password"] = this.password;
    data["captchaResponse"] = this.captchaResponse;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RegisterInput();
    result.init(json);
    return result;
  }
}
class RegisterOutput {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.canLogin = _data["canLogin"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterOutput();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["canLogin"] = this.canLogin;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RegisterOutput();
    result.init(json);
    return result;
  }
}
class ResetPasswordDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.adminPassword = _data["adminPassword"];
      this.userId = _data["userId"];
      this.newPassword = _data["newPassword"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new ResetPasswordDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["adminPassword"] = this.adminPassword;
    data["userId"] = this.userId;
    data["newPassword"] = this.newPassword;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new ResetPasswordDto();
    result.init(json);
    return result;
  }
}
class RoleDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.normalizedName = _data["normalizedName"];
      this.description = _data["description"];
      if (Array.isArray(_data["grantedPermissions"])) {
        this.grantedPermissions = [];
        for (let item of _data["grantedPermissions"]) this.grantedPermissions.push(item);
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["normalizedName"] = this.normalizedName;
    data["description"] = this.description;
    if (Array.isArray(this.grantedPermissions)) {
      data["grantedPermissions"] = [];
      for (let item of this.grantedPermissions) data["grantedPermissions"].push(item);
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleDto();
    result.init(json);
    return result;
  }
}
class RoleDtoListResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(RoleDto.fromJS(item));
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDtoListResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleDtoListResultDto();
    result.init(json);
    return result;
  }
}
class RoleDtoPagedResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(RoleDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDtoPagedResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleDtoPagedResultDto();
    result.init(json);
    return result;
  }
}
class RoleEditDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
      this.isStatic = _data["isStatic"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleEditDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    data["isStatic"] = this.isStatic;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleEditDto();
    result.init(json);
    return result;
  }
}
class RoleListDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.isStatic = _data["isStatic"];
      this.isDefault = _data["isDefault"];
      this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_0__(_data["creationTime"].toString()) : undefined;
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleListDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["isStatic"] = this.isStatic;
    data["isDefault"] = this.isDefault;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleListDto();
    result.init(json);
    return result;
  }
}
class RoleListDtoListResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(RoleListDto.fromJS(item));
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new RoleListDtoListResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new RoleListDtoListResultDto();
    result.init(json);
    return result;
  }
}
var TenantAvailabilityState;
(function (TenantAvailabilityState) {
  TenantAvailabilityState[TenantAvailabilityState["_1"] = 1] = "_1";
  TenantAvailabilityState[TenantAvailabilityState["_2"] = 2] = "_2";
  TenantAvailabilityState[TenantAvailabilityState["_3"] = 3] = "_3";
})(TenantAvailabilityState || (TenantAvailabilityState = {}));
class TenantDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
      this.isActive = _data["isActive"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new TenantDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    data["isActive"] = this.isActive;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new TenantDto();
    result.init(json);
    return result;
  }
}
class TenantDtoPagedResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(TenantDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new TenantDtoPagedResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new TenantDtoPagedResultDto();
    result.init(json);
    return result;
  }
}
class TenantLoginInfoDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new TenantLoginInfoDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new TenantLoginInfoDto();
    result.init(json);
    return result;
  }
}
class UserDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.userName = _data["userName"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.emailAddress = _data["emailAddress"];
      this.isActive = _data["isActive"];
      this.fullName = _data["fullName"];
      this.lastLoginTime = _data["lastLoginTime"] ? moment__WEBPACK_IMPORTED_MODULE_0__(_data["lastLoginTime"].toString()) : undefined;
      this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_0__(_data["creationTime"].toString()) : undefined;
      if (Array.isArray(_data["roleNames"])) {
        this.roleNames = [];
        for (let item of _data["roleNames"]) this.roleNames.push(item);
      }
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new UserDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["userName"] = this.userName;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["emailAddress"] = this.emailAddress;
    data["isActive"] = this.isActive;
    data["fullName"] = this.fullName;
    data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : undefined;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
    if (Array.isArray(this.roleNames)) {
      data["roleNames"] = [];
      for (let item of this.roleNames) data["roleNames"].push(item);
    }
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new UserDto();
    result.init(json);
    return result;
  }
}
class UserDtoPagedResultDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [];
        for (let item of _data["items"]) this.items.push(UserDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new UserDtoPagedResultDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items) data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new UserDtoPagedResultDto();
    result.init(json);
    return result;
  }
}
class UserLoginInfoDto {
  constructor(data) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) this[property] = data[property];
      }
    }
  }
  init(_data) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.userName = _data["userName"];
      this.emailAddress = _data["emailAddress"];
    }
  }
  static fromJS(data) {
    data = typeof data === 'object' ? data : {};
    let result = new UserLoginInfoDto();
    result.init(data);
    return result;
  }
  toJSON(data) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["userName"] = this.userName;
    data["emailAddress"] = this.emailAddress;
    return data;
  }
  clone() {
    const json = this.toJSON();
    let result = new UserLoginInfoDto();
    result.init(json);
    return result;
  }
}
class ApiException extends Error {
  constructor(message, status, response, headers, result) {
    super();
    this.isApiException = true;
    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }
  static isApiException(obj) {
    return obj.isApiException === true;
  }
}
function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(result);else return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(new ApiException(message, status, response, headers, null));
}
function blobToText(blob) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next(event.target.result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}

/***/ }),

/***/ 55696:
/*!************************************************************!*\
  !*** ./src/shared/service-proxies/service-proxy.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceProxyModule": () => (/* binding */ ServiceProxyModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! abp-ng2-module */ 19097);
/* harmony import */ var _service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-proxies */ 37857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




class ServiceProxyModule {}
ServiceProxyModule.ɵfac = function ServiceProxyModule_Factory(t) {
  return new (t || ServiceProxyModule)();
};
ServiceProxyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ServiceProxyModule
});
ServiceProxyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_service_proxies__WEBPACK_IMPORTED_MODULE_0__.RoleServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.SessionServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.TenantServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.UserServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.TokenAuthServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.AccountServiceProxy, _service_proxies__WEBPACK_IMPORTED_MODULE_0__.ConfigurationServiceProxy, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__.AbpHttpInterceptor,
    multi: true
  }]
});

/***/ }),

/***/ 97558:
/*!***************************************************!*\
  !*** ./src/shared/session/app-session.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSessionService": () => (/* binding */ AppSessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abp-ng2-module */ 19097);



class AppSessionService {
  constructor(_sessionService, _abpMultiTenancyService) {
    this._sessionService = _sessionService;
    this._abpMultiTenancyService = _abpMultiTenancyService;
  }
  get application() {
    return this._application;
  }
  get user() {
    return this._user;
  }
  get userId() {
    return this.user ? this.user.id : null;
  }
  get tenant() {
    return this._tenant;
  }
  get tenantId() {
    return this.tenant ? this.tenant.id : null;
  }
  getShownLoginName() {
    const userName = this._user.userName;
    if (!this._abpMultiTenancyService.isEnabled) {
      return userName;
    }
    return (this._tenant ? this._tenant.tenancyName : '.') + '\\' + userName;
  }
  init() {
    return new Promise((resolve, reject) => {
      this._sessionService.getCurrentLoginInformations().toPromise().then(result => {
        this._application = result.application;
        this._user = result.user;
        this._tenant = result.tenant;
        resolve(true);
      }, err => {
        reject(err);
      });
    });
  }
  changeTenantIfNeeded(tenantId) {
    if (this.isCurrentTenant(tenantId)) {
      return false;
    }
    abp.multiTenancy.setTenantIdCookie(tenantId);
    location.reload();
    return true;
  }
  isCurrentTenant(tenantId) {
    if (!tenantId && this.tenant) {
      return false;
    } else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
      return false;
    }
    return true;
  }
}
AppSessionService.ɵfac = function AppSessionService_Factory(t) {
  return new (t || AppSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__.SessionServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__.AbpMultiTenancyService));
};
AppSessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AppSessionService,
  factory: AppSessionService.ɵfac
});

/***/ }),

/***/ 8395:
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var _session_app_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session/app-session.service */ 97558);
/* harmony import */ var _nav_app_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/app-url.service */ 37936);
/* harmony import */ var _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/app-auth.service */ 50895);
/* harmony import */ var _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-route-guard */ 21268);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);
/* harmony import */ var _components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination/abp-pagination-controls.component */ 4798);
/* harmony import */ var _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout-store.service */ 91077);
/* harmony import */ var _directives_busy_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/busy.directive */ 72481);
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/equal-validator.directive */ 92591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
















class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [_session_app_session_service__WEBPACK_IMPORTED_MODULE_0__.AppSessionService, _nav_app_url_service__WEBPACK_IMPORTED_MODULE_1__.AppUrlService, _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AppAuthService, _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_3__.AppRouteGuard, _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_9__.LayoutStoreService]
    };
  }
}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__.AbpPaginationControlsComponent, _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_6__.AbpValidationSummaryComponent, _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__.AbpModalHeaderComponent, _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__.LocalizePipe, _directives_busy_directive__WEBPACK_IMPORTED_MODULE_10__.BusyDirective, _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__.EqualValidator],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule],
    exports: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__.AbpPaginationControlsComponent, _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_6__.AbpValidationSummaryComponent, _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_7__.AbpModalHeaderComponent, _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_4__.LocalizePipe, _directives_busy_directive__WEBPACK_IMPORTED_MODULE_10__.BusyDirective, _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_11__.EqualValidator]
  });
})();

/***/ }),

/***/ 14300:
/*!***********************************************************************************!*\
  !*** ./node_modules/@angular/common/locales/ lazy ^\.\/.*\.mjs$ namespace object ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af-NA.mjs": [
		9900,
		"node_modules_angular_common_locales_af-NA_mjs"
	],
	"./af.mjs": [
		1074,
		"node_modules_angular_common_locales_af_mjs"
	],
	"./agq.mjs": [
		42259,
		"node_modules_angular_common_locales_agq_mjs"
	],
	"./ak.mjs": [
		27019,
		"node_modules_angular_common_locales_ak_mjs"
	],
	"./am.mjs": [
		98934,
		"node_modules_angular_common_locales_am_mjs"
	],
	"./ar-AE.mjs": [
		95306,
		"node_modules_angular_common_locales_ar-AE_mjs"
	],
	"./ar-BH.mjs": [
		12598,
		"node_modules_angular_common_locales_ar-BH_mjs"
	],
	"./ar-DJ.mjs": [
		33183,
		"node_modules_angular_common_locales_ar-DJ_mjs"
	],
	"./ar-DZ.mjs": [
		37818,
		"node_modules_angular_common_locales_ar-DZ_mjs"
	],
	"./ar-EG.mjs": [
		87394,
		"node_modules_angular_common_locales_ar-EG_mjs"
	],
	"./ar-EH.mjs": [
		9834,
		"node_modules_angular_common_locales_ar-EH_mjs"
	],
	"./ar-ER.mjs": [
		17650,
		"node_modules_angular_common_locales_ar-ER_mjs"
	],
	"./ar-IL.mjs": [
		80089,
		"node_modules_angular_common_locales_ar-IL_mjs"
	],
	"./ar-IQ.mjs": [
		60676,
		"node_modules_angular_common_locales_ar-IQ_mjs"
	],
	"./ar-JO.mjs": [
		73895,
		"node_modules_angular_common_locales_ar-JO_mjs"
	],
	"./ar-KM.mjs": [
		98521,
		"node_modules_angular_common_locales_ar-KM_mjs"
	],
	"./ar-KW.mjs": [
		6932,
		"node_modules_angular_common_locales_ar-KW_mjs"
	],
	"./ar-LB.mjs": [
		6828,
		"node_modules_angular_common_locales_ar-LB_mjs"
	],
	"./ar-LY.mjs": [
		57117,
		"node_modules_angular_common_locales_ar-LY_mjs"
	],
	"./ar-MA.mjs": [
		32135,
		"node_modules_angular_common_locales_ar-MA_mjs"
	],
	"./ar-MR.mjs": [
		4155,
		"node_modules_angular_common_locales_ar-MR_mjs"
	],
	"./ar-OM.mjs": [
		77911,
		"node_modules_angular_common_locales_ar-OM_mjs"
	],
	"./ar-PS.mjs": [
		94854,
		"node_modules_angular_common_locales_ar-PS_mjs"
	],
	"./ar-QA.mjs": [
		50382,
		"node_modules_angular_common_locales_ar-QA_mjs"
	],
	"./ar-SA.mjs": [
		86036,
		"node_modules_angular_common_locales_ar-SA_mjs"
	],
	"./ar-SD.mjs": [
		49882,
		"node_modules_angular_common_locales_ar-SD_mjs"
	],
	"./ar-SO.mjs": [
		32680,
		"node_modules_angular_common_locales_ar-SO_mjs"
	],
	"./ar-SS.mjs": [
		97080,
		"node_modules_angular_common_locales_ar-SS_mjs"
	],
	"./ar-SY.mjs": [
		64750,
		"node_modules_angular_common_locales_ar-SY_mjs"
	],
	"./ar-TD.mjs": [
		81474,
		"node_modules_angular_common_locales_ar-TD_mjs"
	],
	"./ar-TN.mjs": [
		52637,
		"node_modules_angular_common_locales_ar-TN_mjs"
	],
	"./ar-YE.mjs": [
		55205,
		"node_modules_angular_common_locales_ar-YE_mjs"
	],
	"./ar.mjs": [
		18162,
		"node_modules_angular_common_locales_ar_mjs"
	],
	"./as.mjs": [
		61309,
		"node_modules_angular_common_locales_as_mjs"
	],
	"./asa.mjs": [
		83953,
		"node_modules_angular_common_locales_asa_mjs"
	],
	"./ast.mjs": [
		3929,
		"node_modules_angular_common_locales_ast_mjs"
	],
	"./az-Cyrl.mjs": [
		43875,
		"node_modules_angular_common_locales_az-Cyrl_mjs"
	],
	"./az-Latn.mjs": [
		44616,
		"node_modules_angular_common_locales_az-Latn_mjs"
	],
	"./az.mjs": [
		56125,
		"node_modules_angular_common_locales_az_mjs"
	],
	"./bas.mjs": [
		70862,
		"node_modules_angular_common_locales_bas_mjs"
	],
	"./be-tarask.mjs": [
		2699,
		"node_modules_angular_common_locales_be-tarask_mjs"
	],
	"./be.mjs": [
		54307,
		"node_modules_angular_common_locales_be_mjs"
	],
	"./bem.mjs": [
		75722,
		"node_modules_angular_common_locales_bem_mjs"
	],
	"./bez.mjs": [
		46400,
		"node_modules_angular_common_locales_bez_mjs"
	],
	"./bg.mjs": [
		12917,
		"node_modules_angular_common_locales_bg_mjs"
	],
	"./bm.mjs": [
		33469,
		"node_modules_angular_common_locales_bm_mjs"
	],
	"./bn-IN.mjs": [
		29500,
		"node_modules_angular_common_locales_bn-IN_mjs"
	],
	"./bn.mjs": [
		45141,
		"node_modules_angular_common_locales_bn_mjs"
	],
	"./bo-IN.mjs": [
		84283,
		"node_modules_angular_common_locales_bo-IN_mjs"
	],
	"./bo.mjs": [
		52739,
		"node_modules_angular_common_locales_bo_mjs"
	],
	"./br.mjs": [
		95882,
		"node_modules_angular_common_locales_br_mjs"
	],
	"./brx.mjs": [
		7257,
		"node_modules_angular_common_locales_brx_mjs"
	],
	"./bs-Cyrl.mjs": [
		78556,
		"node_modules_angular_common_locales_bs-Cyrl_mjs"
	],
	"./bs-Latn.mjs": [
		26631,
		"node_modules_angular_common_locales_bs-Latn_mjs"
	],
	"./bs.mjs": [
		44095,
		"node_modules_angular_common_locales_bs_mjs"
	],
	"./ca-AD.mjs": [
		88810,
		"node_modules_angular_common_locales_ca-AD_mjs"
	],
	"./ca-ES-valencia.mjs": [
		60672,
		"node_modules_angular_common_locales_ca-ES-valencia_mjs"
	],
	"./ca-FR.mjs": [
		96609,
		"node_modules_angular_common_locales_ca-FR_mjs"
	],
	"./ca-IT.mjs": [
		55527,
		"node_modules_angular_common_locales_ca-IT_mjs"
	],
	"./ca.mjs": [
		69985,
		"node_modules_angular_common_locales_ca_mjs"
	],
	"./ccp-IN.mjs": [
		49769,
		"node_modules_angular_common_locales_ccp-IN_mjs"
	],
	"./ccp.mjs": [
		89233,
		"node_modules_angular_common_locales_ccp_mjs"
	],
	"./ce.mjs": [
		9948,
		"node_modules_angular_common_locales_ce_mjs"
	],
	"./ceb.mjs": [
		88557,
		"node_modules_angular_common_locales_ceb_mjs"
	],
	"./cgg.mjs": [
		56733,
		"node_modules_angular_common_locales_cgg_mjs"
	],
	"./chr.mjs": [
		99153,
		"node_modules_angular_common_locales_chr_mjs"
	],
	"./ckb-IR.mjs": [
		94199,
		"node_modules_angular_common_locales_ckb-IR_mjs"
	],
	"./ckb.mjs": [
		97734,
		"node_modules_angular_common_locales_ckb_mjs"
	],
	"./cs.mjs": [
		1121,
		"node_modules_angular_common_locales_cs_mjs"
	],
	"./cy.mjs": [
		34100,
		"node_modules_angular_common_locales_cy_mjs"
	],
	"./da-GL.mjs": [
		93995,
		"node_modules_angular_common_locales_da-GL_mjs"
	],
	"./da.mjs": [
		81857,
		"node_modules_angular_common_locales_da_mjs"
	],
	"./dav.mjs": [
		90440,
		"node_modules_angular_common_locales_dav_mjs"
	],
	"./de-AT.mjs": [
		53211,
		"node_modules_angular_common_locales_de-AT_mjs"
	],
	"./de-BE.mjs": [
		33920,
		"node_modules_angular_common_locales_de-BE_mjs"
	],
	"./de-CH.mjs": [
		52110,
		"node_modules_angular_common_locales_de-CH_mjs"
	],
	"./de-IT.mjs": [
		76562,
		"node_modules_angular_common_locales_de-IT_mjs"
	],
	"./de-LI.mjs": [
		19775,
		"node_modules_angular_common_locales_de-LI_mjs"
	],
	"./de-LU.mjs": [
		49653,
		"node_modules_angular_common_locales_de-LU_mjs"
	],
	"./de.mjs": [
		48855,
		"node_modules_angular_common_locales_de_mjs"
	],
	"./dje.mjs": [
		96534,
		"node_modules_angular_common_locales_dje_mjs"
	],
	"./doi.mjs": [
		64449,
		"node_modules_angular_common_locales_doi_mjs"
	],
	"./dsb.mjs": [
		26606,
		"node_modules_angular_common_locales_dsb_mjs"
	],
	"./dua.mjs": [
		53607,
		"node_modules_angular_common_locales_dua_mjs"
	],
	"./dyo.mjs": [
		17911,
		"node_modules_angular_common_locales_dyo_mjs"
	],
	"./dz.mjs": [
		72670,
		"node_modules_angular_common_locales_dz_mjs"
	],
	"./ebu.mjs": [
		84486,
		"node_modules_angular_common_locales_ebu_mjs"
	],
	"./ee-TG.mjs": [
		3287,
		"node_modules_angular_common_locales_ee-TG_mjs"
	],
	"./ee.mjs": [
		36635,
		"node_modules_angular_common_locales_ee_mjs"
	],
	"./el-CY.mjs": [
		2810,
		"node_modules_angular_common_locales_el-CY_mjs"
	],
	"./el.mjs": [
		33402,
		"node_modules_angular_common_locales_el_mjs"
	],
	"./en-001.mjs": [
		46451,
		"node_modules_angular_common_locales_en-001_mjs"
	],
	"./en-150.mjs": [
		58599,
		"node_modules_angular_common_locales_en-150_mjs"
	],
	"./en-AE.mjs": [
		40191,
		"node_modules_angular_common_locales_en-AE_mjs"
	],
	"./en-AG.mjs": [
		9876,
		"node_modules_angular_common_locales_en-AG_mjs"
	],
	"./en-AI.mjs": [
		4636,
		"node_modules_angular_common_locales_en-AI_mjs"
	],
	"./en-AS.mjs": [
		9101,
		"node_modules_angular_common_locales_en-AS_mjs"
	],
	"./en-AT.mjs": [
		89291,
		"node_modules_angular_common_locales_en-AT_mjs"
	],
	"./en-AU.mjs": [
		69917,
		"node_modules_angular_common_locales_en-AU_mjs"
	],
	"./en-BB.mjs": [
		70922,
		"node_modules_angular_common_locales_en-BB_mjs"
	],
	"./en-BE.mjs": [
		99668,
		"node_modules_angular_common_locales_en-BE_mjs"
	],
	"./en-BI.mjs": [
		92412,
		"node_modules_angular_common_locales_en-BI_mjs"
	],
	"./en-BM.mjs": [
		79192,
		"node_modules_angular_common_locales_en-BM_mjs"
	],
	"./en-BS.mjs": [
		20946,
		"node_modules_angular_common_locales_en-BS_mjs"
	],
	"./en-BW.mjs": [
		76706,
		"node_modules_angular_common_locales_en-BW_mjs"
	],
	"./en-BZ.mjs": [
		87770,
		"node_modules_angular_common_locales_en-BZ_mjs"
	],
	"./en-CA.mjs": [
		18386,
		"node_modules_angular_common_locales_en-CA_mjs"
	],
	"./en-CC.mjs": [
		72310,
		"node_modules_angular_common_locales_en-CC_mjs"
	],
	"./en-CH.mjs": [
		20034,
		"node_modules_angular_common_locales_en-CH_mjs"
	],
	"./en-CK.mjs": [
		75645,
		"node_modules_angular_common_locales_en-CK_mjs"
	],
	"./en-CM.mjs": [
		2171,
		"node_modules_angular_common_locales_en-CM_mjs"
	],
	"./en-CX.mjs": [
		14732,
		"node_modules_angular_common_locales_en-CX_mjs"
	],
	"./en-CY.mjs": [
		23727,
		"node_modules_angular_common_locales_en-CY_mjs"
	],
	"./en-DE.mjs": [
		52320,
		"node_modules_angular_common_locales_en-DE_mjs"
	],
	"./en-DG.mjs": [
		59331,
		"node_modules_angular_common_locales_en-DG_mjs"
	],
	"./en-DK.mjs": [
		80434,
		"node_modules_angular_common_locales_en-DK_mjs"
	],
	"./en-DM.mjs": [
		54691,
		"node_modules_angular_common_locales_en-DM_mjs"
	],
	"./en-ER.mjs": [
		98851,
		"node_modules_angular_common_locales_en-ER_mjs"
	],
	"./en-FI.mjs": [
		70808,
		"node_modules_angular_common_locales_en-FI_mjs"
	],
	"./en-FJ.mjs": [
		69088,
		"node_modules_angular_common_locales_en-FJ_mjs"
	],
	"./en-FK.mjs": [
		32394,
		"node_modules_angular_common_locales_en-FK_mjs"
	],
	"./en-FM.mjs": [
		46133,
		"node_modules_angular_common_locales_en-FM_mjs"
	],
	"./en-GB.mjs": [
		7881,
		"node_modules_angular_common_locales_en-GB_mjs"
	],
	"./en-GD.mjs": [
		92841,
		"node_modules_angular_common_locales_en-GD_mjs"
	],
	"./en-GG.mjs": [
		42421,
		"node_modules_angular_common_locales_en-GG_mjs"
	],
	"./en-GH.mjs": [
		34952,
		"node_modules_angular_common_locales_en-GH_mjs"
	],
	"./en-GI.mjs": [
		80459,
		"node_modules_angular_common_locales_en-GI_mjs"
	],
	"./en-GM.mjs": [
		658,
		"node_modules_angular_common_locales_en-GM_mjs"
	],
	"./en-GU.mjs": [
		48077,
		"node_modules_angular_common_locales_en-GU_mjs"
	],
	"./en-GY.mjs": [
		93627,
		"node_modules_angular_common_locales_en-GY_mjs"
	],
	"./en-HK.mjs": [
		36797,
		"node_modules_angular_common_locales_en-HK_mjs"
	],
	"./en-IE.mjs": [
		40320,
		"node_modules_angular_common_locales_en-IE_mjs"
	],
	"./en-IL.mjs": [
		47751,
		"node_modules_angular_common_locales_en-IL_mjs"
	],
	"./en-IM.mjs": [
		28134,
		"node_modules_angular_common_locales_en-IM_mjs"
	],
	"./en-IN.mjs": [
		13869,
		"node_modules_angular_common_locales_en-IN_mjs"
	],
	"./en-IO.mjs": [
		53710,
		"node_modules_angular_common_locales_en-IO_mjs"
	],
	"./en-JE.mjs": [
		32916,
		"node_modules_angular_common_locales_en-JE_mjs"
	],
	"./en-JM.mjs": [
		1758,
		"node_modules_angular_common_locales_en-JM_mjs"
	],
	"./en-KE.mjs": [
		66889,
		"node_modules_angular_common_locales_en-KE_mjs"
	],
	"./en-KI.mjs": [
		20213,
		"node_modules_angular_common_locales_en-KI_mjs"
	],
	"./en-KN.mjs": [
		57394,
		"node_modules_angular_common_locales_en-KN_mjs"
	],
	"./en-KY.mjs": [
		6235,
		"node_modules_angular_common_locales_en-KY_mjs"
	],
	"./en-LC.mjs": [
		37305,
		"node_modules_angular_common_locales_en-LC_mjs"
	],
	"./en-LR.mjs": [
		42948,
		"node_modules_angular_common_locales_en-LR_mjs"
	],
	"./en-LS.mjs": [
		89058,
		"node_modules_angular_common_locales_en-LS_mjs"
	],
	"./en-MG.mjs": [
		82651,
		"node_modules_angular_common_locales_en-MG_mjs"
	],
	"./en-MH.mjs": [
		79795,
		"node_modules_angular_common_locales_en-MH_mjs"
	],
	"./en-MO.mjs": [
		37730,
		"node_modules_angular_common_locales_en-MO_mjs"
	],
	"./en-MP.mjs": [
		58298,
		"node_modules_angular_common_locales_en-MP_mjs"
	],
	"./en-MS.mjs": [
		51915,
		"node_modules_angular_common_locales_en-MS_mjs"
	],
	"./en-MT.mjs": [
		19051,
		"node_modules_angular_common_locales_en-MT_mjs"
	],
	"./en-MU.mjs": [
		88652,
		"node_modules_angular_common_locales_en-MU_mjs"
	],
	"./en-MV.mjs": [
		47521,
		"node_modules_angular_common_locales_en-MV_mjs"
	],
	"./en-MW.mjs": [
		25472,
		"node_modules_angular_common_locales_en-MW_mjs"
	],
	"./en-MY.mjs": [
		64392,
		"node_modules_angular_common_locales_en-MY_mjs"
	],
	"./en-NA.mjs": [
		22695,
		"node_modules_angular_common_locales_en-NA_mjs"
	],
	"./en-NF.mjs": [
		88162,
		"node_modules_angular_common_locales_en-NF_mjs"
	],
	"./en-NG.mjs": [
		30031,
		"node_modules_angular_common_locales_en-NG_mjs"
	],
	"./en-NL.mjs": [
		36868,
		"node_modules_angular_common_locales_en-NL_mjs"
	],
	"./en-NR.mjs": [
		81558,
		"node_modules_angular_common_locales_en-NR_mjs"
	],
	"./en-NU.mjs": [
		42375,
		"node_modules_angular_common_locales_en-NU_mjs"
	],
	"./en-NZ.mjs": [
		95708,
		"node_modules_angular_common_locales_en-NZ_mjs"
	],
	"./en-PG.mjs": [
		40350,
		"node_modules_angular_common_locales_en-PG_mjs"
	],
	"./en-PH.mjs": [
		33712,
		"node_modules_angular_common_locales_en-PH_mjs"
	],
	"./en-PK.mjs": [
		93919,
		"node_modules_angular_common_locales_en-PK_mjs"
	],
	"./en-PN.mjs": [
		33164,
		"node_modules_angular_common_locales_en-PN_mjs"
	],
	"./en-PR.mjs": [
		78849,
		"node_modules_angular_common_locales_en-PR_mjs"
	],
	"./en-PW.mjs": [
		10613,
		"node_modules_angular_common_locales_en-PW_mjs"
	],
	"./en-RW.mjs": [
		51590,
		"node_modules_angular_common_locales_en-RW_mjs"
	],
	"./en-SB.mjs": [
		15985,
		"node_modules_angular_common_locales_en-SB_mjs"
	],
	"./en-SC.mjs": [
		19710,
		"node_modules_angular_common_locales_en-SC_mjs"
	],
	"./en-SD.mjs": [
		89333,
		"node_modules_angular_common_locales_en-SD_mjs"
	],
	"./en-SE.mjs": [
		47976,
		"node_modules_angular_common_locales_en-SE_mjs"
	],
	"./en-SG.mjs": [
		39912,
		"node_modules_angular_common_locales_en-SG_mjs"
	],
	"./en-SH.mjs": [
		35974,
		"node_modules_angular_common_locales_en-SH_mjs"
	],
	"./en-SI.mjs": [
		76152,
		"node_modules_angular_common_locales_en-SI_mjs"
	],
	"./en-SL.mjs": [
		25619,
		"node_modules_angular_common_locales_en-SL_mjs"
	],
	"./en-SS.mjs": [
		6604,
		"node_modules_angular_common_locales_en-SS_mjs"
	],
	"./en-SX.mjs": [
		57192,
		"node_modules_angular_common_locales_en-SX_mjs"
	],
	"./en-SZ.mjs": [
		5509,
		"node_modules_angular_common_locales_en-SZ_mjs"
	],
	"./en-TC.mjs": [
		66009,
		"node_modules_angular_common_locales_en-TC_mjs"
	],
	"./en-TK.mjs": [
		70381,
		"node_modules_angular_common_locales_en-TK_mjs"
	],
	"./en-TO.mjs": [
		65680,
		"node_modules_angular_common_locales_en-TO_mjs"
	],
	"./en-TT.mjs": [
		83074,
		"node_modules_angular_common_locales_en-TT_mjs"
	],
	"./en-TV.mjs": [
		34651,
		"node_modules_angular_common_locales_en-TV_mjs"
	],
	"./en-TZ.mjs": [
		54505,
		"node_modules_angular_common_locales_en-TZ_mjs"
	],
	"./en-UG.mjs": [
		78237,
		"node_modules_angular_common_locales_en-UG_mjs"
	],
	"./en-UM.mjs": [
		25153,
		"node_modules_angular_common_locales_en-UM_mjs"
	],
	"./en-VC.mjs": [
		89082,
		"node_modules_angular_common_locales_en-VC_mjs"
	],
	"./en-VG.mjs": [
		49862,
		"node_modules_angular_common_locales_en-VG_mjs"
	],
	"./en-VI.mjs": [
		20096,
		"node_modules_angular_common_locales_en-VI_mjs"
	],
	"./en-VU.mjs": [
		32574,
		"node_modules_angular_common_locales_en-VU_mjs"
	],
	"./en-WS.mjs": [
		75597,
		"node_modules_angular_common_locales_en-WS_mjs"
	],
	"./en-ZA.mjs": [
		23575,
		"node_modules_angular_common_locales_en-ZA_mjs"
	],
	"./en-ZM.mjs": [
		14759,
		"node_modules_angular_common_locales_en-ZM_mjs"
	],
	"./en-ZW.mjs": [
		16612,
		"node_modules_angular_common_locales_en-ZW_mjs"
	],
	"./en.mjs": [
		49137,
		"node_modules_angular_common_locales_en_mjs"
	],
	"./eo.mjs": [
		26499,
		"node_modules_angular_common_locales_eo_mjs"
	],
	"./es-419.mjs": [
		45242,
		"node_modules_angular_common_locales_es-419_mjs"
	],
	"./es-AR.mjs": [
		50384,
		"node_modules_angular_common_locales_es-AR_mjs"
	],
	"./es-BO.mjs": [
		14746,
		"node_modules_angular_common_locales_es-BO_mjs"
	],
	"./es-BR.mjs": [
		53006,
		"node_modules_angular_common_locales_es-BR_mjs"
	],
	"./es-BZ.mjs": [
		44845,
		"node_modules_angular_common_locales_es-BZ_mjs"
	],
	"./es-CL.mjs": [
		57391,
		"node_modules_angular_common_locales_es-CL_mjs"
	],
	"./es-CO.mjs": [
		86802,
		"node_modules_angular_common_locales_es-CO_mjs"
	],
	"./es-CR.mjs": [
		6480,
		"node_modules_angular_common_locales_es-CR_mjs"
	],
	"./es-CU.mjs": [
		94688,
		"node_modules_angular_common_locales_es-CU_mjs"
	],
	"./es-DO.mjs": [
		89101,
		"node_modules_angular_common_locales_es-DO_mjs"
	],
	"./es-EA.mjs": [
		53121,
		"node_modules_angular_common_locales_es-EA_mjs"
	],
	"./es-EC.mjs": [
		12818,
		"node_modules_angular_common_locales_es-EC_mjs"
	],
	"./es-GQ.mjs": [
		47338,
		"node_modules_angular_common_locales_es-GQ_mjs"
	],
	"./es-GT.mjs": [
		78729,
		"node_modules_angular_common_locales_es-GT_mjs"
	],
	"./es-HN.mjs": [
		44590,
		"node_modules_angular_common_locales_es-HN_mjs"
	],
	"./es-IC.mjs": [
		74214,
		"node_modules_angular_common_locales_es-IC_mjs"
	],
	"./es-MX.mjs": [
		29554,
		"node_modules_angular_common_locales_es-MX_mjs"
	],
	"./es-NI.mjs": [
		69857,
		"node_modules_angular_common_locales_es-NI_mjs"
	],
	"./es-PA.mjs": [
		26722,
		"node_modules_angular_common_locales_es-PA_mjs"
	],
	"./es-PE.mjs": [
		34280,
		"node_modules_angular_common_locales_es-PE_mjs"
	],
	"./es-PH.mjs": [
		65949,
		"node_modules_angular_common_locales_es-PH_mjs"
	],
	"./es-PR.mjs": [
		9777,
		"node_modules_angular_common_locales_es-PR_mjs"
	],
	"./es-PY.mjs": [
		1506,
		"node_modules_angular_common_locales_es-PY_mjs"
	],
	"./es-SV.mjs": [
		74707,
		"node_modules_angular_common_locales_es-SV_mjs"
	],
	"./es-US.mjs": [
		12080,
		"node_modules_angular_common_locales_es-US_mjs"
	],
	"./es-UY.mjs": [
		64534,
		"node_modules_angular_common_locales_es-UY_mjs"
	],
	"./es-VE.mjs": [
		41047,
		"node_modules_angular_common_locales_es-VE_mjs"
	],
	"./es.mjs": [
		92403,
		"node_modules_angular_common_locales_es_mjs"
	],
	"./et.mjs": [
		33055,
		"node_modules_angular_common_locales_et_mjs"
	],
	"./eu.mjs": [
		39715,
		"node_modules_angular_common_locales_eu_mjs"
	],
	"./ewo.mjs": [
		13096,
		"node_modules_angular_common_locales_ewo_mjs"
	],
	"./extra/af-NA.mjs": [
		8004,
		"node_modules_angular_common_locales_extra_af-NA_mjs"
	],
	"./extra/af.mjs": [
		12979,
		"node_modules_angular_common_locales_extra_af_mjs"
	],
	"./extra/agq.mjs": [
		59972,
		"node_modules_angular_common_locales_extra_agq_mjs"
	],
	"./extra/ak.mjs": [
		91962,
		"node_modules_angular_common_locales_extra_ak_mjs"
	],
	"./extra/am.mjs": [
		91372,
		"node_modules_angular_common_locales_extra_am_mjs"
	],
	"./extra/ar-AE.mjs": [
		45397,
		"node_modules_angular_common_locales_extra_ar-AE_mjs"
	],
	"./extra/ar-BH.mjs": [
		93896,
		"node_modules_angular_common_locales_extra_ar-BH_mjs"
	],
	"./extra/ar-DJ.mjs": [
		44872,
		"node_modules_angular_common_locales_extra_ar-DJ_mjs"
	],
	"./extra/ar-DZ.mjs": [
		88141,
		"node_modules_angular_common_locales_extra_ar-DZ_mjs"
	],
	"./extra/ar-EG.mjs": [
		11907,
		"node_modules_angular_common_locales_extra_ar-EG_mjs"
	],
	"./extra/ar-EH.mjs": [
		15880,
		"node_modules_angular_common_locales_extra_ar-EH_mjs"
	],
	"./extra/ar-ER.mjs": [
		35861,
		"node_modules_angular_common_locales_extra_ar-ER_mjs"
	],
	"./extra/ar-IL.mjs": [
		30574,
		"node_modules_angular_common_locales_extra_ar-IL_mjs"
	],
	"./extra/ar-IQ.mjs": [
		3308,
		"node_modules_angular_common_locales_extra_ar-IQ_mjs"
	],
	"./extra/ar-JO.mjs": [
		68425,
		"node_modules_angular_common_locales_extra_ar-JO_mjs"
	],
	"./extra/ar-KM.mjs": [
		64481,
		"node_modules_angular_common_locales_extra_ar-KM_mjs"
	],
	"./extra/ar-KW.mjs": [
		70576,
		"node_modules_angular_common_locales_extra_ar-KW_mjs"
	],
	"./extra/ar-LB.mjs": [
		57113,
		"node_modules_angular_common_locales_extra_ar-LB_mjs"
	],
	"./extra/ar-LY.mjs": [
		46488,
		"node_modules_angular_common_locales_extra_ar-LY_mjs"
	],
	"./extra/ar-MA.mjs": [
		73613,
		"node_modules_angular_common_locales_extra_ar-MA_mjs"
	],
	"./extra/ar-MR.mjs": [
		99479,
		"node_modules_angular_common_locales_extra_ar-MR_mjs"
	],
	"./extra/ar-OM.mjs": [
		1740,
		"node_modules_angular_common_locales_extra_ar-OM_mjs"
	],
	"./extra/ar-PS.mjs": [
		90458,
		"node_modules_angular_common_locales_extra_ar-PS_mjs"
	],
	"./extra/ar-QA.mjs": [
		73614,
		"node_modules_angular_common_locales_extra_ar-QA_mjs"
	],
	"./extra/ar-SA.mjs": [
		52226,
		"node_modules_angular_common_locales_extra_ar-SA_mjs"
	],
	"./extra/ar-SD.mjs": [
		51421,
		"node_modules_angular_common_locales_extra_ar-SD_mjs"
	],
	"./extra/ar-SO.mjs": [
		7667,
		"node_modules_angular_common_locales_extra_ar-SO_mjs"
	],
	"./extra/ar-SS.mjs": [
		63404,
		"node_modules_angular_common_locales_extra_ar-SS_mjs"
	],
	"./extra/ar-SY.mjs": [
		92154,
		"node_modules_angular_common_locales_extra_ar-SY_mjs"
	],
	"./extra/ar-TD.mjs": [
		22320,
		"node_modules_angular_common_locales_extra_ar-TD_mjs"
	],
	"./extra/ar-TN.mjs": [
		29764,
		"node_modules_angular_common_locales_extra_ar-TN_mjs"
	],
	"./extra/ar-YE.mjs": [
		26645,
		"node_modules_angular_common_locales_extra_ar-YE_mjs"
	],
	"./extra/ar.mjs": [
		12005,
		"node_modules_angular_common_locales_extra_ar_mjs"
	],
	"./extra/as.mjs": [
		36213,
		"node_modules_angular_common_locales_extra_as_mjs"
	],
	"./extra/asa.mjs": [
		60560,
		"node_modules_angular_common_locales_extra_asa_mjs"
	],
	"./extra/ast.mjs": [
		7654,
		"node_modules_angular_common_locales_extra_ast_mjs"
	],
	"./extra/az-Cyrl.mjs": [
		19117,
		"node_modules_angular_common_locales_extra_az-Cyrl_mjs"
	],
	"./extra/az-Latn.mjs": [
		84415,
		"node_modules_angular_common_locales_extra_az-Latn_mjs"
	],
	"./extra/az.mjs": [
		59897,
		"node_modules_angular_common_locales_extra_az_mjs"
	],
	"./extra/bas.mjs": [
		8184,
		"node_modules_angular_common_locales_extra_bas_mjs"
	],
	"./extra/be-tarask.mjs": [
		94954,
		"node_modules_angular_common_locales_extra_be-tarask_mjs"
	],
	"./extra/be.mjs": [
		23358,
		"node_modules_angular_common_locales_extra_be_mjs"
	],
	"./extra/bem.mjs": [
		7531,
		"node_modules_angular_common_locales_extra_bem_mjs"
	],
	"./extra/bez.mjs": [
		73585,
		"node_modules_angular_common_locales_extra_bez_mjs"
	],
	"./extra/bg.mjs": [
		2526,
		"node_modules_angular_common_locales_extra_bg_mjs"
	],
	"./extra/bm.mjs": [
		80129,
		"node_modules_angular_common_locales_extra_bm_mjs"
	],
	"./extra/bn-IN.mjs": [
		38778,
		"node_modules_angular_common_locales_extra_bn-IN_mjs"
	],
	"./extra/bn.mjs": [
		60551,
		"node_modules_angular_common_locales_extra_bn_mjs"
	],
	"./extra/bo-IN.mjs": [
		16356,
		"node_modules_angular_common_locales_extra_bo-IN_mjs"
	],
	"./extra/bo.mjs": [
		54598,
		"node_modules_angular_common_locales_extra_bo_mjs"
	],
	"./extra/br.mjs": [
		54081,
		"node_modules_angular_common_locales_extra_br_mjs"
	],
	"./extra/brx.mjs": [
		52027,
		"node_modules_angular_common_locales_extra_brx_mjs"
	],
	"./extra/bs-Cyrl.mjs": [
		25576,
		"node_modules_angular_common_locales_extra_bs-Cyrl_mjs"
	],
	"./extra/bs-Latn.mjs": [
		85532,
		"node_modules_angular_common_locales_extra_bs-Latn_mjs"
	],
	"./extra/bs.mjs": [
		61274,
		"node_modules_angular_common_locales_extra_bs_mjs"
	],
	"./extra/ca-AD.mjs": [
		30804,
		"node_modules_angular_common_locales_extra_ca-AD_mjs"
	],
	"./extra/ca-ES-valencia.mjs": [
		62024,
		"node_modules_angular_common_locales_extra_ca-ES-valencia_mjs"
	],
	"./extra/ca-FR.mjs": [
		85932,
		"node_modules_angular_common_locales_extra_ca-FR_mjs"
	],
	"./extra/ca-IT.mjs": [
		49896,
		"node_modules_angular_common_locales_extra_ca-IT_mjs"
	],
	"./extra/ca.mjs": [
		21894,
		"node_modules_angular_common_locales_extra_ca_mjs"
	],
	"./extra/ccp-IN.mjs": [
		40314,
		"node_modules_angular_common_locales_extra_ccp-IN_mjs"
	],
	"./extra/ccp.mjs": [
		10227,
		"node_modules_angular_common_locales_extra_ccp_mjs"
	],
	"./extra/ce.mjs": [
		87342,
		"node_modules_angular_common_locales_extra_ce_mjs"
	],
	"./extra/ceb.mjs": [
		32406,
		"node_modules_angular_common_locales_extra_ceb_mjs"
	],
	"./extra/cgg.mjs": [
		36314,
		"node_modules_angular_common_locales_extra_cgg_mjs"
	],
	"./extra/chr.mjs": [
		36589,
		"node_modules_angular_common_locales_extra_chr_mjs"
	],
	"./extra/ckb-IR.mjs": [
		7918,
		"node_modules_angular_common_locales_extra_ckb-IR_mjs"
	],
	"./extra/ckb.mjs": [
		5623,
		"node_modules_angular_common_locales_extra_ckb_mjs"
	],
	"./extra/cs.mjs": [
		61598,
		"node_modules_angular_common_locales_extra_cs_mjs"
	],
	"./extra/cy.mjs": [
		24064,
		"node_modules_angular_common_locales_extra_cy_mjs"
	],
	"./extra/da-GL.mjs": [
		3162,
		"node_modules_angular_common_locales_extra_da-GL_mjs"
	],
	"./extra/da.mjs": [
		95105,
		"node_modules_angular_common_locales_extra_da_mjs"
	],
	"./extra/dav.mjs": [
		89825,
		"node_modules_angular_common_locales_extra_dav_mjs"
	],
	"./extra/de-AT.mjs": [
		47,
		"node_modules_angular_common_locales_extra_de-AT_mjs"
	],
	"./extra/de-BE.mjs": [
		89761,
		"node_modules_angular_common_locales_extra_de-BE_mjs"
	],
	"./extra/de-CH.mjs": [
		48940,
		"node_modules_angular_common_locales_extra_de-CH_mjs"
	],
	"./extra/de-IT.mjs": [
		37635,
		"node_modules_angular_common_locales_extra_de-IT_mjs"
	],
	"./extra/de-LI.mjs": [
		33690,
		"node_modules_angular_common_locales_extra_de-LI_mjs"
	],
	"./extra/de-LU.mjs": [
		34349,
		"node_modules_angular_common_locales_extra_de-LU_mjs"
	],
	"./extra/de.mjs": [
		7470,
		"node_modules_angular_common_locales_extra_de_mjs"
	],
	"./extra/dje.mjs": [
		19828,
		"node_modules_angular_common_locales_extra_dje_mjs"
	],
	"./extra/doi.mjs": [
		91950,
		"node_modules_angular_common_locales_extra_doi_mjs"
	],
	"./extra/dsb.mjs": [
		84131,
		"node_modules_angular_common_locales_extra_dsb_mjs"
	],
	"./extra/dua.mjs": [
		36194,
		"node_modules_angular_common_locales_extra_dua_mjs"
	],
	"./extra/dyo.mjs": [
		35277,
		"node_modules_angular_common_locales_extra_dyo_mjs"
	],
	"./extra/dz.mjs": [
		77817,
		"node_modules_angular_common_locales_extra_dz_mjs"
	],
	"./extra/ebu.mjs": [
		79646,
		"node_modules_angular_common_locales_extra_ebu_mjs"
	],
	"./extra/ee-TG.mjs": [
		21643,
		"node_modules_angular_common_locales_extra_ee-TG_mjs"
	],
	"./extra/ee.mjs": [
		92203,
		"node_modules_angular_common_locales_extra_ee_mjs"
	],
	"./extra/el-CY.mjs": [
		66129,
		"node_modules_angular_common_locales_extra_el-CY_mjs"
	],
	"./extra/el.mjs": [
		19283,
		"node_modules_angular_common_locales_extra_el_mjs"
	],
	"./extra/en-001.mjs": [
		36275,
		"node_modules_angular_common_locales_extra_en-001_mjs"
	],
	"./extra/en-150.mjs": [
		72502,
		"node_modules_angular_common_locales_extra_en-150_mjs"
	],
	"./extra/en-AE.mjs": [
		88730,
		"node_modules_angular_common_locales_extra_en-AE_mjs"
	],
	"./extra/en-AG.mjs": [
		17332,
		"node_modules_angular_common_locales_extra_en-AG_mjs"
	],
	"./extra/en-AI.mjs": [
		85084,
		"node_modules_angular_common_locales_extra_en-AI_mjs"
	],
	"./extra/en-AS.mjs": [
		17018,
		"node_modules_angular_common_locales_extra_en-AS_mjs"
	],
	"./extra/en-AT.mjs": [
		20178,
		"node_modules_angular_common_locales_extra_en-AT_mjs"
	],
	"./extra/en-AU.mjs": [
		10311,
		"node_modules_angular_common_locales_extra_en-AU_mjs"
	],
	"./extra/en-BB.mjs": [
		21293,
		"node_modules_angular_common_locales_extra_en-BB_mjs"
	],
	"./extra/en-BE.mjs": [
		96580,
		"node_modules_angular_common_locales_extra_en-BE_mjs"
	],
	"./extra/en-BI.mjs": [
		78417,
		"node_modules_angular_common_locales_extra_en-BI_mjs"
	],
	"./extra/en-BM.mjs": [
		48622,
		"node_modules_angular_common_locales_extra_en-BM_mjs"
	],
	"./extra/en-BS.mjs": [
		10965,
		"node_modules_angular_common_locales_extra_en-BS_mjs"
	],
	"./extra/en-BW.mjs": [
		11822,
		"node_modules_angular_common_locales_extra_en-BW_mjs"
	],
	"./extra/en-BZ.mjs": [
		91650,
		"node_modules_angular_common_locales_extra_en-BZ_mjs"
	],
	"./extra/en-CA.mjs": [
		38900,
		"node_modules_angular_common_locales_extra_en-CA_mjs"
	],
	"./extra/en-CC.mjs": [
		75624,
		"node_modules_angular_common_locales_extra_en-CC_mjs"
	],
	"./extra/en-CH.mjs": [
		73731,
		"node_modules_angular_common_locales_extra_en-CH_mjs"
	],
	"./extra/en-CK.mjs": [
		56168,
		"node_modules_angular_common_locales_extra_en-CK_mjs"
	],
	"./extra/en-CM.mjs": [
		50997,
		"node_modules_angular_common_locales_extra_en-CM_mjs"
	],
	"./extra/en-CX.mjs": [
		68460,
		"node_modules_angular_common_locales_extra_en-CX_mjs"
	],
	"./extra/en-CY.mjs": [
		73172,
		"node_modules_angular_common_locales_extra_en-CY_mjs"
	],
	"./extra/en-DE.mjs": [
		13088,
		"node_modules_angular_common_locales_extra_en-DE_mjs"
	],
	"./extra/en-DG.mjs": [
		63899,
		"node_modules_angular_common_locales_extra_en-DG_mjs"
	],
	"./extra/en-DK.mjs": [
		26766,
		"node_modules_angular_common_locales_extra_en-DK_mjs"
	],
	"./extra/en-DM.mjs": [
		32241,
		"node_modules_angular_common_locales_extra_en-DM_mjs"
	],
	"./extra/en-ER.mjs": [
		34166,
		"node_modules_angular_common_locales_extra_en-ER_mjs"
	],
	"./extra/en-FI.mjs": [
		83322,
		"node_modules_angular_common_locales_extra_en-FI_mjs"
	],
	"./extra/en-FJ.mjs": [
		85884,
		"node_modules_angular_common_locales_extra_en-FJ_mjs"
	],
	"./extra/en-FK.mjs": [
		91911,
		"node_modules_angular_common_locales_extra_en-FK_mjs"
	],
	"./extra/en-FM.mjs": [
		1016,
		"node_modules_angular_common_locales_extra_en-FM_mjs"
	],
	"./extra/en-GB.mjs": [
		95343,
		"node_modules_angular_common_locales_extra_en-GB_mjs"
	],
	"./extra/en-GD.mjs": [
		35119,
		"node_modules_angular_common_locales_extra_en-GD_mjs"
	],
	"./extra/en-GG.mjs": [
		31782,
		"node_modules_angular_common_locales_extra_en-GG_mjs"
	],
	"./extra/en-GH.mjs": [
		51431,
		"node_modules_angular_common_locales_extra_en-GH_mjs"
	],
	"./extra/en-GI.mjs": [
		90290,
		"node_modules_angular_common_locales_extra_en-GI_mjs"
	],
	"./extra/en-GM.mjs": [
		1298,
		"node_modules_angular_common_locales_extra_en-GM_mjs"
	],
	"./extra/en-GU.mjs": [
		85830,
		"node_modules_angular_common_locales_extra_en-GU_mjs"
	],
	"./extra/en-GY.mjs": [
		85298,
		"node_modules_angular_common_locales_extra_en-GY_mjs"
	],
	"./extra/en-HK.mjs": [
		78017,
		"node_modules_angular_common_locales_extra_en-HK_mjs"
	],
	"./extra/en-IE.mjs": [
		32598,
		"node_modules_angular_common_locales_extra_en-IE_mjs"
	],
	"./extra/en-IL.mjs": [
		17262,
		"node_modules_angular_common_locales_extra_en-IL_mjs"
	],
	"./extra/en-IM.mjs": [
		22336,
		"node_modules_angular_common_locales_extra_en-IM_mjs"
	],
	"./extra/en-IN.mjs": [
		71512,
		"node_modules_angular_common_locales_extra_en-IN_mjs"
	],
	"./extra/en-IO.mjs": [
		522,
		"node_modules_angular_common_locales_extra_en-IO_mjs"
	],
	"./extra/en-JE.mjs": [
		95684,
		"node_modules_angular_common_locales_extra_en-JE_mjs"
	],
	"./extra/en-JM.mjs": [
		25329,
		"node_modules_angular_common_locales_extra_en-JM_mjs"
	],
	"./extra/en-KE.mjs": [
		91725,
		"node_modules_angular_common_locales_extra_en-KE_mjs"
	],
	"./extra/en-KI.mjs": [
		81794,
		"node_modules_angular_common_locales_extra_en-KI_mjs"
	],
	"./extra/en-KN.mjs": [
		24110,
		"node_modules_angular_common_locales_extra_en-KN_mjs"
	],
	"./extra/en-KY.mjs": [
		47303,
		"node_modules_angular_common_locales_extra_en-KY_mjs"
	],
	"./extra/en-LC.mjs": [
		26300,
		"node_modules_angular_common_locales_extra_en-LC_mjs"
	],
	"./extra/en-LR.mjs": [
		37648,
		"node_modules_angular_common_locales_extra_en-LR_mjs"
	],
	"./extra/en-LS.mjs": [
		93583,
		"node_modules_angular_common_locales_extra_en-LS_mjs"
	],
	"./extra/en-MG.mjs": [
		95116,
		"node_modules_angular_common_locales_extra_en-MG_mjs"
	],
	"./extra/en-MH.mjs": [
		68770,
		"node_modules_angular_common_locales_extra_en-MH_mjs"
	],
	"./extra/en-MO.mjs": [
		85730,
		"node_modules_angular_common_locales_extra_en-MO_mjs"
	],
	"./extra/en-MP.mjs": [
		66547,
		"node_modules_angular_common_locales_extra_en-MP_mjs"
	],
	"./extra/en-MS.mjs": [
		31295,
		"node_modules_angular_common_locales_extra_en-MS_mjs"
	],
	"./extra/en-MT.mjs": [
		9314,
		"node_modules_angular_common_locales_extra_en-MT_mjs"
	],
	"./extra/en-MU.mjs": [
		6090,
		"node_modules_angular_common_locales_extra_en-MU_mjs"
	],
	"./extra/en-MV.mjs": [
		9627,
		"node_modules_angular_common_locales_extra_en-MV_mjs"
	],
	"./extra/en-MW.mjs": [
		3655,
		"node_modules_angular_common_locales_extra_en-MW_mjs"
	],
	"./extra/en-MY.mjs": [
		14085,
		"node_modules_angular_common_locales_extra_en-MY_mjs"
	],
	"./extra/en-NA.mjs": [
		21527,
		"node_modules_angular_common_locales_extra_en-NA_mjs"
	],
	"./extra/en-NF.mjs": [
		49133,
		"node_modules_angular_common_locales_extra_en-NF_mjs"
	],
	"./extra/en-NG.mjs": [
		54857,
		"node_modules_angular_common_locales_extra_en-NG_mjs"
	],
	"./extra/en-NL.mjs": [
		83482,
		"node_modules_angular_common_locales_extra_en-NL_mjs"
	],
	"./extra/en-NR.mjs": [
		31705,
		"node_modules_angular_common_locales_extra_en-NR_mjs"
	],
	"./extra/en-NU.mjs": [
		90318,
		"node_modules_angular_common_locales_extra_en-NU_mjs"
	],
	"./extra/en-NZ.mjs": [
		13078,
		"node_modules_angular_common_locales_extra_en-NZ_mjs"
	],
	"./extra/en-PG.mjs": [
		13045,
		"node_modules_angular_common_locales_extra_en-PG_mjs"
	],
	"./extra/en-PH.mjs": [
		78820,
		"node_modules_angular_common_locales_extra_en-PH_mjs"
	],
	"./extra/en-PK.mjs": [
		70568,
		"node_modules_angular_common_locales_extra_en-PK_mjs"
	],
	"./extra/en-PN.mjs": [
		16602,
		"node_modules_angular_common_locales_extra_en-PN_mjs"
	],
	"./extra/en-PR.mjs": [
		33989,
		"node_modules_angular_common_locales_extra_en-PR_mjs"
	],
	"./extra/en-PW.mjs": [
		80715,
		"node_modules_angular_common_locales_extra_en-PW_mjs"
	],
	"./extra/en-RW.mjs": [
		39436,
		"node_modules_angular_common_locales_extra_en-RW_mjs"
	],
	"./extra/en-SB.mjs": [
		16111,
		"node_modules_angular_common_locales_extra_en-SB_mjs"
	],
	"./extra/en-SC.mjs": [
		15206,
		"node_modules_angular_common_locales_extra_en-SC_mjs"
	],
	"./extra/en-SD.mjs": [
		48549,
		"node_modules_angular_common_locales_extra_en-SD_mjs"
	],
	"./extra/en-SE.mjs": [
		66353,
		"node_modules_angular_common_locales_extra_en-SE_mjs"
	],
	"./extra/en-SG.mjs": [
		52264,
		"node_modules_angular_common_locales_extra_en-SG_mjs"
	],
	"./extra/en-SH.mjs": [
		52313,
		"node_modules_angular_common_locales_extra_en-SH_mjs"
	],
	"./extra/en-SI.mjs": [
		87509,
		"node_modules_angular_common_locales_extra_en-SI_mjs"
	],
	"./extra/en-SL.mjs": [
		23203,
		"node_modules_angular_common_locales_extra_en-SL_mjs"
	],
	"./extra/en-SS.mjs": [
		26071,
		"node_modules_angular_common_locales_extra_en-SS_mjs"
	],
	"./extra/en-SX.mjs": [
		21816,
		"node_modules_angular_common_locales_extra_en-SX_mjs"
	],
	"./extra/en-SZ.mjs": [
		38647,
		"node_modules_angular_common_locales_extra_en-SZ_mjs"
	],
	"./extra/en-TC.mjs": [
		12691,
		"node_modules_angular_common_locales_extra_en-TC_mjs"
	],
	"./extra/en-TK.mjs": [
		53403,
		"node_modules_angular_common_locales_extra_en-TK_mjs"
	],
	"./extra/en-TO.mjs": [
		17770,
		"node_modules_angular_common_locales_extra_en-TO_mjs"
	],
	"./extra/en-TT.mjs": [
		1164,
		"node_modules_angular_common_locales_extra_en-TT_mjs"
	],
	"./extra/en-TV.mjs": [
		60088,
		"node_modules_angular_common_locales_extra_en-TV_mjs"
	],
	"./extra/en-TZ.mjs": [
		21587,
		"node_modules_angular_common_locales_extra_en-TZ_mjs"
	],
	"./extra/en-UG.mjs": [
		59213,
		"node_modules_angular_common_locales_extra_en-UG_mjs"
	],
	"./extra/en-UM.mjs": [
		65826,
		"node_modules_angular_common_locales_extra_en-UM_mjs"
	],
	"./extra/en-VC.mjs": [
		36312,
		"node_modules_angular_common_locales_extra_en-VC_mjs"
	],
	"./extra/en-VG.mjs": [
		56169,
		"node_modules_angular_common_locales_extra_en-VG_mjs"
	],
	"./extra/en-VI.mjs": [
		46857,
		"node_modules_angular_common_locales_extra_en-VI_mjs"
	],
	"./extra/en-VU.mjs": [
		66952,
		"node_modules_angular_common_locales_extra_en-VU_mjs"
	],
	"./extra/en-WS.mjs": [
		20775,
		"node_modules_angular_common_locales_extra_en-WS_mjs"
	],
	"./extra/en-ZA.mjs": [
		45394,
		"node_modules_angular_common_locales_extra_en-ZA_mjs"
	],
	"./extra/en-ZM.mjs": [
		17750,
		"node_modules_angular_common_locales_extra_en-ZM_mjs"
	],
	"./extra/en-ZW.mjs": [
		52955,
		"node_modules_angular_common_locales_extra_en-ZW_mjs"
	],
	"./extra/en.mjs": [
		82450,
		"node_modules_angular_common_locales_extra_en_mjs"
	],
	"./extra/eo.mjs": [
		81851,
		"node_modules_angular_common_locales_extra_eo_mjs"
	],
	"./extra/es-419.mjs": [
		13395,
		"node_modules_angular_common_locales_extra_es-419_mjs"
	],
	"./extra/es-AR.mjs": [
		29405,
		"node_modules_angular_common_locales_extra_es-AR_mjs"
	],
	"./extra/es-BO.mjs": [
		48648,
		"node_modules_angular_common_locales_extra_es-BO_mjs"
	],
	"./extra/es-BR.mjs": [
		20559,
		"node_modules_angular_common_locales_extra_es-BR_mjs"
	],
	"./extra/es-BZ.mjs": [
		11937,
		"node_modules_angular_common_locales_extra_es-BZ_mjs"
	],
	"./extra/es-CL.mjs": [
		60227,
		"node_modules_angular_common_locales_extra_es-CL_mjs"
	],
	"./extra/es-CO.mjs": [
		87908,
		"node_modules_angular_common_locales_extra_es-CO_mjs"
	],
	"./extra/es-CR.mjs": [
		26198,
		"node_modules_angular_common_locales_extra_es-CR_mjs"
	],
	"./extra/es-CU.mjs": [
		77567,
		"node_modules_angular_common_locales_extra_es-CU_mjs"
	],
	"./extra/es-DO.mjs": [
		67033,
		"node_modules_angular_common_locales_extra_es-DO_mjs"
	],
	"./extra/es-EA.mjs": [
		13531,
		"node_modules_angular_common_locales_extra_es-EA_mjs"
	],
	"./extra/es-EC.mjs": [
		42037,
		"node_modules_angular_common_locales_extra_es-EC_mjs"
	],
	"./extra/es-GQ.mjs": [
		94839,
		"node_modules_angular_common_locales_extra_es-GQ_mjs"
	],
	"./extra/es-GT.mjs": [
		95831,
		"node_modules_angular_common_locales_extra_es-GT_mjs"
	],
	"./extra/es-HN.mjs": [
		88953,
		"node_modules_angular_common_locales_extra_es-HN_mjs"
	],
	"./extra/es-IC.mjs": [
		45946,
		"node_modules_angular_common_locales_extra_es-IC_mjs"
	],
	"./extra/es-MX.mjs": [
		41954,
		"node_modules_angular_common_locales_extra_es-MX_mjs"
	],
	"./extra/es-NI.mjs": [
		33692,
		"node_modules_angular_common_locales_extra_es-NI_mjs"
	],
	"./extra/es-PA.mjs": [
		94478,
		"node_modules_angular_common_locales_extra_es-PA_mjs"
	],
	"./extra/es-PE.mjs": [
		84001,
		"node_modules_angular_common_locales_extra_es-PE_mjs"
	],
	"./extra/es-PH.mjs": [
		45704,
		"node_modules_angular_common_locales_extra_es-PH_mjs"
	],
	"./extra/es-PR.mjs": [
		31437,
		"node_modules_angular_common_locales_extra_es-PR_mjs"
	],
	"./extra/es-PY.mjs": [
		49422,
		"node_modules_angular_common_locales_extra_es-PY_mjs"
	],
	"./extra/es-SV.mjs": [
		39446,
		"node_modules_angular_common_locales_extra_es-SV_mjs"
	],
	"./extra/es-US.mjs": [
		7820,
		"node_modules_angular_common_locales_extra_es-US_mjs"
	],
	"./extra/es-UY.mjs": [
		50871,
		"node_modules_angular_common_locales_extra_es-UY_mjs"
	],
	"./extra/es-VE.mjs": [
		40046,
		"node_modules_angular_common_locales_extra_es-VE_mjs"
	],
	"./extra/es.mjs": [
		53835,
		"node_modules_angular_common_locales_extra_es_mjs"
	],
	"./extra/et.mjs": [
		69731,
		"node_modules_angular_common_locales_extra_et_mjs"
	],
	"./extra/eu.mjs": [
		71418,
		"node_modules_angular_common_locales_extra_eu_mjs"
	],
	"./extra/ewo.mjs": [
		3959,
		"node_modules_angular_common_locales_extra_ewo_mjs"
	],
	"./extra/fa-AF.mjs": [
		17654,
		"node_modules_angular_common_locales_extra_fa-AF_mjs"
	],
	"./extra/fa.mjs": [
		61574,
		"node_modules_angular_common_locales_extra_fa_mjs"
	],
	"./extra/ff-Adlm-BF.mjs": [
		77262,
		"node_modules_angular_common_locales_extra_ff-Adlm-BF_mjs"
	],
	"./extra/ff-Adlm-CM.mjs": [
		54394,
		"node_modules_angular_common_locales_extra_ff-Adlm-CM_mjs"
	],
	"./extra/ff-Adlm-GH.mjs": [
		57187,
		"node_modules_angular_common_locales_extra_ff-Adlm-GH_mjs"
	],
	"./extra/ff-Adlm-GM.mjs": [
		96390,
		"node_modules_angular_common_locales_extra_ff-Adlm-GM_mjs"
	],
	"./extra/ff-Adlm-GW.mjs": [
		53019,
		"node_modules_angular_common_locales_extra_ff-Adlm-GW_mjs"
	],
	"./extra/ff-Adlm-LR.mjs": [
		38866,
		"node_modules_angular_common_locales_extra_ff-Adlm-LR_mjs"
	],
	"./extra/ff-Adlm-MR.mjs": [
		73561,
		"node_modules_angular_common_locales_extra_ff-Adlm-MR_mjs"
	],
	"./extra/ff-Adlm-NE.mjs": [
		33760,
		"node_modules_angular_common_locales_extra_ff-Adlm-NE_mjs"
	],
	"./extra/ff-Adlm-NG.mjs": [
		8010,
		"node_modules_angular_common_locales_extra_ff-Adlm-NG_mjs"
	],
	"./extra/ff-Adlm-SL.mjs": [
		12001,
		"node_modules_angular_common_locales_extra_ff-Adlm-SL_mjs"
	],
	"./extra/ff-Adlm-SN.mjs": [
		5865,
		"node_modules_angular_common_locales_extra_ff-Adlm-SN_mjs"
	],
	"./extra/ff-Adlm.mjs": [
		17811,
		"node_modules_angular_common_locales_extra_ff-Adlm_mjs"
	],
	"./extra/ff-CM.mjs": [
		91360,
		"node_modules_angular_common_locales_extra_ff-CM_mjs"
	],
	"./extra/ff-GN.mjs": [
		64621,
		"node_modules_angular_common_locales_extra_ff-GN_mjs"
	],
	"./extra/ff-Latn-BF.mjs": [
		31058,
		"node_modules_angular_common_locales_extra_ff-Latn-BF_mjs"
	],
	"./extra/ff-Latn-CM.mjs": [
		49831,
		"node_modules_angular_common_locales_extra_ff-Latn-CM_mjs"
	],
	"./extra/ff-Latn-GH.mjs": [
		44898,
		"node_modules_angular_common_locales_extra_ff-Latn-GH_mjs"
	],
	"./extra/ff-Latn-GM.mjs": [
		53058,
		"node_modules_angular_common_locales_extra_ff-Latn-GM_mjs"
	],
	"./extra/ff-Latn-GN.mjs": [
		76246,
		"node_modules_angular_common_locales_extra_ff-Latn-GN_mjs"
	],
	"./extra/ff-Latn-GW.mjs": [
		74401,
		"node_modules_angular_common_locales_extra_ff-Latn-GW_mjs"
	],
	"./extra/ff-Latn-LR.mjs": [
		7417,
		"node_modules_angular_common_locales_extra_ff-Latn-LR_mjs"
	],
	"./extra/ff-Latn-MR.mjs": [
		91274,
		"node_modules_angular_common_locales_extra_ff-Latn-MR_mjs"
	],
	"./extra/ff-Latn-NE.mjs": [
		82094,
		"node_modules_angular_common_locales_extra_ff-Latn-NE_mjs"
	],
	"./extra/ff-Latn-NG.mjs": [
		5159,
		"node_modules_angular_common_locales_extra_ff-Latn-NG_mjs"
	],
	"./extra/ff-Latn-SL.mjs": [
		89163,
		"node_modules_angular_common_locales_extra_ff-Latn-SL_mjs"
	],
	"./extra/ff-Latn.mjs": [
		50034,
		"node_modules_angular_common_locales_extra_ff-Latn_mjs"
	],
	"./extra/ff-MR.mjs": [
		80974,
		"node_modules_angular_common_locales_extra_ff-MR_mjs"
	],
	"./extra/ff.mjs": [
		24749,
		"node_modules_angular_common_locales_extra_ff_mjs"
	],
	"./extra/fi.mjs": [
		62429,
		"node_modules_angular_common_locales_extra_fi_mjs"
	],
	"./extra/fil.mjs": [
		1784,
		"node_modules_angular_common_locales_extra_fil_mjs"
	],
	"./extra/fo-DK.mjs": [
		81103,
		"node_modules_angular_common_locales_extra_fo-DK_mjs"
	],
	"./extra/fo.mjs": [
		67131,
		"node_modules_angular_common_locales_extra_fo_mjs"
	],
	"./extra/fr-BE.mjs": [
		88123,
		"node_modules_angular_common_locales_extra_fr-BE_mjs"
	],
	"./extra/fr-BF.mjs": [
		61437,
		"node_modules_angular_common_locales_extra_fr-BF_mjs"
	],
	"./extra/fr-BI.mjs": [
		39646,
		"node_modules_angular_common_locales_extra_fr-BI_mjs"
	],
	"./extra/fr-BJ.mjs": [
		33940,
		"node_modules_angular_common_locales_extra_fr-BJ_mjs"
	],
	"./extra/fr-BL.mjs": [
		87541,
		"node_modules_angular_common_locales_extra_fr-BL_mjs"
	],
	"./extra/fr-CA.mjs": [
		40331,
		"node_modules_angular_common_locales_extra_fr-CA_mjs"
	],
	"./extra/fr-CD.mjs": [
		53598,
		"node_modules_angular_common_locales_extra_fr-CD_mjs"
	],
	"./extra/fr-CF.mjs": [
		36621,
		"node_modules_angular_common_locales_extra_fr-CF_mjs"
	],
	"./extra/fr-CG.mjs": [
		40185,
		"node_modules_angular_common_locales_extra_fr-CG_mjs"
	],
	"./extra/fr-CH.mjs": [
		7369,
		"node_modules_angular_common_locales_extra_fr-CH_mjs"
	],
	"./extra/fr-CI.mjs": [
		42849,
		"node_modules_angular_common_locales_extra_fr-CI_mjs"
	],
	"./extra/fr-CM.mjs": [
		24249,
		"node_modules_angular_common_locales_extra_fr-CM_mjs"
	],
	"./extra/fr-DJ.mjs": [
		18713,
		"node_modules_angular_common_locales_extra_fr-DJ_mjs"
	],
	"./extra/fr-DZ.mjs": [
		92930,
		"node_modules_angular_common_locales_extra_fr-DZ_mjs"
	],
	"./extra/fr-GA.mjs": [
		43013,
		"node_modules_angular_common_locales_extra_fr-GA_mjs"
	],
	"./extra/fr-GF.mjs": [
		38565,
		"node_modules_angular_common_locales_extra_fr-GF_mjs"
	],
	"./extra/fr-GN.mjs": [
		82941,
		"node_modules_angular_common_locales_extra_fr-GN_mjs"
	],
	"./extra/fr-GP.mjs": [
		46422,
		"node_modules_angular_common_locales_extra_fr-GP_mjs"
	],
	"./extra/fr-GQ.mjs": [
		60249,
		"node_modules_angular_common_locales_extra_fr-GQ_mjs"
	],
	"./extra/fr-HT.mjs": [
		40765,
		"node_modules_angular_common_locales_extra_fr-HT_mjs"
	],
	"./extra/fr-KM.mjs": [
		98707,
		"node_modules_angular_common_locales_extra_fr-KM_mjs"
	],
	"./extra/fr-LU.mjs": [
		44604,
		"node_modules_angular_common_locales_extra_fr-LU_mjs"
	],
	"./extra/fr-MA.mjs": [
		22264,
		"node_modules_angular_common_locales_extra_fr-MA_mjs"
	],
	"./extra/fr-MC.mjs": [
		47860,
		"node_modules_angular_common_locales_extra_fr-MC_mjs"
	],
	"./extra/fr-MF.mjs": [
		13325,
		"node_modules_angular_common_locales_extra_fr-MF_mjs"
	],
	"./extra/fr-MG.mjs": [
		39315,
		"node_modules_angular_common_locales_extra_fr-MG_mjs"
	],
	"./extra/fr-ML.mjs": [
		34162,
		"node_modules_angular_common_locales_extra_fr-ML_mjs"
	],
	"./extra/fr-MQ.mjs": [
		26278,
		"node_modules_angular_common_locales_extra_fr-MQ_mjs"
	],
	"./extra/fr-MR.mjs": [
		12339,
		"node_modules_angular_common_locales_extra_fr-MR_mjs"
	],
	"./extra/fr-MU.mjs": [
		1602,
		"node_modules_angular_common_locales_extra_fr-MU_mjs"
	],
	"./extra/fr-NC.mjs": [
		2968,
		"node_modules_angular_common_locales_extra_fr-NC_mjs"
	],
	"./extra/fr-NE.mjs": [
		65426,
		"node_modules_angular_common_locales_extra_fr-NE_mjs"
	],
	"./extra/fr-PF.mjs": [
		48858,
		"node_modules_angular_common_locales_extra_fr-PF_mjs"
	],
	"./extra/fr-PM.mjs": [
		88603,
		"node_modules_angular_common_locales_extra_fr-PM_mjs"
	],
	"./extra/fr-RE.mjs": [
		91750,
		"node_modules_angular_common_locales_extra_fr-RE_mjs"
	],
	"./extra/fr-RW.mjs": [
		12387,
		"node_modules_angular_common_locales_extra_fr-RW_mjs"
	],
	"./extra/fr-SC.mjs": [
		61094,
		"node_modules_angular_common_locales_extra_fr-SC_mjs"
	],
	"./extra/fr-SN.mjs": [
		92050,
		"node_modules_angular_common_locales_extra_fr-SN_mjs"
	],
	"./extra/fr-SY.mjs": [
		8053,
		"node_modules_angular_common_locales_extra_fr-SY_mjs"
	],
	"./extra/fr-TD.mjs": [
		60464,
		"node_modules_angular_common_locales_extra_fr-TD_mjs"
	],
	"./extra/fr-TG.mjs": [
		96319,
		"node_modules_angular_common_locales_extra_fr-TG_mjs"
	],
	"./extra/fr-TN.mjs": [
		83809,
		"node_modules_angular_common_locales_extra_fr-TN_mjs"
	],
	"./extra/fr-VU.mjs": [
		93032,
		"node_modules_angular_common_locales_extra_fr-VU_mjs"
	],
	"./extra/fr-WF.mjs": [
		50789,
		"node_modules_angular_common_locales_extra_fr-WF_mjs"
	],
	"./extra/fr-YT.mjs": [
		4386,
		"node_modules_angular_common_locales_extra_fr-YT_mjs"
	],
	"./extra/fr.mjs": [
		69744,
		"node_modules_angular_common_locales_extra_fr_mjs"
	],
	"./extra/fur.mjs": [
		15888,
		"node_modules_angular_common_locales_extra_fur_mjs"
	],
	"./extra/fy.mjs": [
		4376,
		"node_modules_angular_common_locales_extra_fy_mjs"
	],
	"./extra/ga-GB.mjs": [
		63610,
		"node_modules_angular_common_locales_extra_ga-GB_mjs"
	],
	"./extra/ga.mjs": [
		54346,
		"node_modules_angular_common_locales_extra_ga_mjs"
	],
	"./extra/gd.mjs": [
		54803,
		"node_modules_angular_common_locales_extra_gd_mjs"
	],
	"./extra/gl.mjs": [
		85312,
		"node_modules_angular_common_locales_extra_gl_mjs"
	],
	"./extra/gsw-FR.mjs": [
		57451,
		"node_modules_angular_common_locales_extra_gsw-FR_mjs"
	],
	"./extra/gsw-LI.mjs": [
		67849,
		"node_modules_angular_common_locales_extra_gsw-LI_mjs"
	],
	"./extra/gsw.mjs": [
		41893,
		"node_modules_angular_common_locales_extra_gsw_mjs"
	],
	"./extra/gu.mjs": [
		20828,
		"node_modules_angular_common_locales_extra_gu_mjs"
	],
	"./extra/guz.mjs": [
		73942,
		"node_modules_angular_common_locales_extra_guz_mjs"
	],
	"./extra/gv.mjs": [
		94483,
		"node_modules_angular_common_locales_extra_gv_mjs"
	],
	"./extra/ha-GH.mjs": [
		48271,
		"node_modules_angular_common_locales_extra_ha-GH_mjs"
	],
	"./extra/ha-NE.mjs": [
		66589,
		"node_modules_angular_common_locales_extra_ha-NE_mjs"
	],
	"./extra/ha.mjs": [
		25372,
		"node_modules_angular_common_locales_extra_ha_mjs"
	],
	"./extra/haw.mjs": [
		15672,
		"node_modules_angular_common_locales_extra_haw_mjs"
	],
	"./extra/he.mjs": [
		22038,
		"node_modules_angular_common_locales_extra_he_mjs"
	],
	"./extra/hi-Latn.mjs": [
		75338,
		"node_modules_angular_common_locales_extra_hi-Latn_mjs"
	],
	"./extra/hi.mjs": [
		17965,
		"node_modules_angular_common_locales_extra_hi_mjs"
	],
	"./extra/hr-BA.mjs": [
		11187,
		"node_modules_angular_common_locales_extra_hr-BA_mjs"
	],
	"./extra/hr.mjs": [
		57763,
		"node_modules_angular_common_locales_extra_hr_mjs"
	],
	"./extra/hsb.mjs": [
		56412,
		"node_modules_angular_common_locales_extra_hsb_mjs"
	],
	"./extra/hu.mjs": [
		45933,
		"node_modules_angular_common_locales_extra_hu_mjs"
	],
	"./extra/hy.mjs": [
		85142,
		"node_modules_angular_common_locales_extra_hy_mjs"
	],
	"./extra/ia.mjs": [
		31189,
		"node_modules_angular_common_locales_extra_ia_mjs"
	],
	"./extra/id.mjs": [
		66929,
		"node_modules_angular_common_locales_extra_id_mjs"
	],
	"./extra/ig.mjs": [
		28440,
		"node_modules_angular_common_locales_extra_ig_mjs"
	],
	"./extra/ii.mjs": [
		92647,
		"node_modules_angular_common_locales_extra_ii_mjs"
	],
	"./extra/is.mjs": [
		92346,
		"node_modules_angular_common_locales_extra_is_mjs"
	],
	"./extra/it-CH.mjs": [
		41074,
		"node_modules_angular_common_locales_extra_it-CH_mjs"
	],
	"./extra/it-SM.mjs": [
		62809,
		"node_modules_angular_common_locales_extra_it-SM_mjs"
	],
	"./extra/it-VA.mjs": [
		49155,
		"node_modules_angular_common_locales_extra_it-VA_mjs"
	],
	"./extra/it.mjs": [
		23282,
		"node_modules_angular_common_locales_extra_it_mjs"
	],
	"./extra/ja.mjs": [
		60842,
		"node_modules_angular_common_locales_extra_ja_mjs"
	],
	"./extra/jgo.mjs": [
		56951,
		"node_modules_angular_common_locales_extra_jgo_mjs"
	],
	"./extra/jmc.mjs": [
		95845,
		"node_modules_angular_common_locales_extra_jmc_mjs"
	],
	"./extra/jv.mjs": [
		45459,
		"node_modules_angular_common_locales_extra_jv_mjs"
	],
	"./extra/ka.mjs": [
		29488,
		"node_modules_angular_common_locales_extra_ka_mjs"
	],
	"./extra/kab.mjs": [
		87960,
		"node_modules_angular_common_locales_extra_kab_mjs"
	],
	"./extra/kam.mjs": [
		6593,
		"node_modules_angular_common_locales_extra_kam_mjs"
	],
	"./extra/kde.mjs": [
		26961,
		"node_modules_angular_common_locales_extra_kde_mjs"
	],
	"./extra/kea.mjs": [
		38571,
		"node_modules_angular_common_locales_extra_kea_mjs"
	],
	"./extra/kgp.mjs": [
		36303,
		"node_modules_angular_common_locales_extra_kgp_mjs"
	],
	"./extra/khq.mjs": [
		93078,
		"node_modules_angular_common_locales_extra_khq_mjs"
	],
	"./extra/ki.mjs": [
		665,
		"node_modules_angular_common_locales_extra_ki_mjs"
	],
	"./extra/kk.mjs": [
		1102,
		"node_modules_angular_common_locales_extra_kk_mjs"
	],
	"./extra/kkj.mjs": [
		20518,
		"node_modules_angular_common_locales_extra_kkj_mjs"
	],
	"./extra/kl.mjs": [
		57745,
		"node_modules_angular_common_locales_extra_kl_mjs"
	],
	"./extra/kln.mjs": [
		82035,
		"node_modules_angular_common_locales_extra_kln_mjs"
	],
	"./extra/km.mjs": [
		61316,
		"node_modules_angular_common_locales_extra_km_mjs"
	],
	"./extra/kn.mjs": [
		70007,
		"node_modules_angular_common_locales_extra_kn_mjs"
	],
	"./extra/ko-KP.mjs": [
		96310,
		"node_modules_angular_common_locales_extra_ko-KP_mjs"
	],
	"./extra/ko.mjs": [
		58728,
		"node_modules_angular_common_locales_extra_ko_mjs"
	],
	"./extra/kok.mjs": [
		23114,
		"node_modules_angular_common_locales_extra_kok_mjs"
	],
	"./extra/ks-Arab.mjs": [
		54504,
		"node_modules_angular_common_locales_extra_ks-Arab_mjs"
	],
	"./extra/ks-Deva.mjs": [
		34019,
		"node_modules_angular_common_locales_extra_ks-Deva_mjs"
	],
	"./extra/ks.mjs": [
		19705,
		"node_modules_angular_common_locales_extra_ks_mjs"
	],
	"./extra/ksb.mjs": [
		21974,
		"node_modules_angular_common_locales_extra_ksb_mjs"
	],
	"./extra/ksf.mjs": [
		52603,
		"node_modules_angular_common_locales_extra_ksf_mjs"
	],
	"./extra/ksh.mjs": [
		78967,
		"node_modules_angular_common_locales_extra_ksh_mjs"
	],
	"./extra/ku.mjs": [
		44021,
		"node_modules_angular_common_locales_extra_ku_mjs"
	],
	"./extra/kw.mjs": [
		56417,
		"node_modules_angular_common_locales_extra_kw_mjs"
	],
	"./extra/ky.mjs": [
		97575,
		"node_modules_angular_common_locales_extra_ky_mjs"
	],
	"./extra/lag.mjs": [
		4772,
		"node_modules_angular_common_locales_extra_lag_mjs"
	],
	"./extra/lb.mjs": [
		13678,
		"node_modules_angular_common_locales_extra_lb_mjs"
	],
	"./extra/lg.mjs": [
		89534,
		"node_modules_angular_common_locales_extra_lg_mjs"
	],
	"./extra/lkt.mjs": [
		14868,
		"node_modules_angular_common_locales_extra_lkt_mjs"
	],
	"./extra/ln-AO.mjs": [
		51294,
		"node_modules_angular_common_locales_extra_ln-AO_mjs"
	],
	"./extra/ln-CF.mjs": [
		17678,
		"node_modules_angular_common_locales_extra_ln-CF_mjs"
	],
	"./extra/ln-CG.mjs": [
		84181,
		"node_modules_angular_common_locales_extra_ln-CG_mjs"
	],
	"./extra/ln.mjs": [
		44280,
		"node_modules_angular_common_locales_extra_ln_mjs"
	],
	"./extra/lo.mjs": [
		98452,
		"node_modules_angular_common_locales_extra_lo_mjs"
	],
	"./extra/lrc-IQ.mjs": [
		43355,
		"node_modules_angular_common_locales_extra_lrc-IQ_mjs"
	],
	"./extra/lrc.mjs": [
		54047,
		"node_modules_angular_common_locales_extra_lrc_mjs"
	],
	"./extra/lt.mjs": [
		23374,
		"node_modules_angular_common_locales_extra_lt_mjs"
	],
	"./extra/lu.mjs": [
		71344,
		"node_modules_angular_common_locales_extra_lu_mjs"
	],
	"./extra/luo.mjs": [
		26373,
		"node_modules_angular_common_locales_extra_luo_mjs"
	],
	"./extra/luy.mjs": [
		44912,
		"node_modules_angular_common_locales_extra_luy_mjs"
	],
	"./extra/lv.mjs": [
		13058,
		"node_modules_angular_common_locales_extra_lv_mjs"
	],
	"./extra/mai.mjs": [
		83533,
		"node_modules_angular_common_locales_extra_mai_mjs"
	],
	"./extra/mas-TZ.mjs": [
		92920,
		"node_modules_angular_common_locales_extra_mas-TZ_mjs"
	],
	"./extra/mas.mjs": [
		8611,
		"node_modules_angular_common_locales_extra_mas_mjs"
	],
	"./extra/mer.mjs": [
		35048,
		"node_modules_angular_common_locales_extra_mer_mjs"
	],
	"./extra/mfe.mjs": [
		63188,
		"node_modules_angular_common_locales_extra_mfe_mjs"
	],
	"./extra/mg.mjs": [
		16405,
		"node_modules_angular_common_locales_extra_mg_mjs"
	],
	"./extra/mgh.mjs": [
		57440,
		"node_modules_angular_common_locales_extra_mgh_mjs"
	],
	"./extra/mgo.mjs": [
		75465,
		"node_modules_angular_common_locales_extra_mgo_mjs"
	],
	"./extra/mi.mjs": [
		15979,
		"node_modules_angular_common_locales_extra_mi_mjs"
	],
	"./extra/mk.mjs": [
		50241,
		"node_modules_angular_common_locales_extra_mk_mjs"
	],
	"./extra/ml.mjs": [
		49007,
		"node_modules_angular_common_locales_extra_ml_mjs"
	],
	"./extra/mn.mjs": [
		19483,
		"node_modules_angular_common_locales_extra_mn_mjs"
	],
	"./extra/mni-Beng.mjs": [
		29268,
		"node_modules_angular_common_locales_extra_mni-Beng_mjs"
	],
	"./extra/mni.mjs": [
		26482,
		"node_modules_angular_common_locales_extra_mni_mjs"
	],
	"./extra/mr.mjs": [
		21263,
		"node_modules_angular_common_locales_extra_mr_mjs"
	],
	"./extra/ms-BN.mjs": [
		42569,
		"node_modules_angular_common_locales_extra_ms-BN_mjs"
	],
	"./extra/ms-ID.mjs": [
		23595,
		"node_modules_angular_common_locales_extra_ms-ID_mjs"
	],
	"./extra/ms-SG.mjs": [
		90506,
		"node_modules_angular_common_locales_extra_ms-SG_mjs"
	],
	"./extra/ms.mjs": [
		92532,
		"node_modules_angular_common_locales_extra_ms_mjs"
	],
	"./extra/mt.mjs": [
		81549,
		"node_modules_angular_common_locales_extra_mt_mjs"
	],
	"./extra/mua.mjs": [
		76592,
		"node_modules_angular_common_locales_extra_mua_mjs"
	],
	"./extra/my.mjs": [
		21136,
		"node_modules_angular_common_locales_extra_my_mjs"
	],
	"./extra/mzn.mjs": [
		38980,
		"node_modules_angular_common_locales_extra_mzn_mjs"
	],
	"./extra/naq.mjs": [
		11292,
		"node_modules_angular_common_locales_extra_naq_mjs"
	],
	"./extra/nb-SJ.mjs": [
		26024,
		"node_modules_angular_common_locales_extra_nb-SJ_mjs"
	],
	"./extra/nb.mjs": [
		6363,
		"node_modules_angular_common_locales_extra_nb_mjs"
	],
	"./extra/nd.mjs": [
		49911,
		"node_modules_angular_common_locales_extra_nd_mjs"
	],
	"./extra/nds-NL.mjs": [
		25046,
		"node_modules_angular_common_locales_extra_nds-NL_mjs"
	],
	"./extra/nds.mjs": [
		99764,
		"node_modules_angular_common_locales_extra_nds_mjs"
	],
	"./extra/ne-IN.mjs": [
		28116,
		"node_modules_angular_common_locales_extra_ne-IN_mjs"
	],
	"./extra/ne.mjs": [
		56440,
		"node_modules_angular_common_locales_extra_ne_mjs"
	],
	"./extra/nl-AW.mjs": [
		69427,
		"node_modules_angular_common_locales_extra_nl-AW_mjs"
	],
	"./extra/nl-BE.mjs": [
		10890,
		"node_modules_angular_common_locales_extra_nl-BE_mjs"
	],
	"./extra/nl-BQ.mjs": [
		82630,
		"node_modules_angular_common_locales_extra_nl-BQ_mjs"
	],
	"./extra/nl-CW.mjs": [
		55710,
		"node_modules_angular_common_locales_extra_nl-CW_mjs"
	],
	"./extra/nl-SR.mjs": [
		44922,
		"node_modules_angular_common_locales_extra_nl-SR_mjs"
	],
	"./extra/nl-SX.mjs": [
		91395,
		"node_modules_angular_common_locales_extra_nl-SX_mjs"
	],
	"./extra/nl.mjs": [
		5300,
		"node_modules_angular_common_locales_extra_nl_mjs"
	],
	"./extra/nmg.mjs": [
		61050,
		"node_modules_angular_common_locales_extra_nmg_mjs"
	],
	"./extra/nn.mjs": [
		9402,
		"node_modules_angular_common_locales_extra_nn_mjs"
	],
	"./extra/nnh.mjs": [
		85581,
		"node_modules_angular_common_locales_extra_nnh_mjs"
	],
	"./extra/no.mjs": [
		45176,
		"node_modules_angular_common_locales_extra_no_mjs"
	],
	"./extra/nus.mjs": [
		41358,
		"node_modules_angular_common_locales_extra_nus_mjs"
	],
	"./extra/nyn.mjs": [
		90245,
		"node_modules_angular_common_locales_extra_nyn_mjs"
	],
	"./extra/om-KE.mjs": [
		5295,
		"node_modules_angular_common_locales_extra_om-KE_mjs"
	],
	"./extra/om.mjs": [
		88356,
		"node_modules_angular_common_locales_extra_om_mjs"
	],
	"./extra/or.mjs": [
		21232,
		"node_modules_angular_common_locales_extra_or_mjs"
	],
	"./extra/os-RU.mjs": [
		90542,
		"node_modules_angular_common_locales_extra_os-RU_mjs"
	],
	"./extra/os.mjs": [
		37415,
		"node_modules_angular_common_locales_extra_os_mjs"
	],
	"./extra/pa-Arab.mjs": [
		55675,
		"node_modules_angular_common_locales_extra_pa-Arab_mjs"
	],
	"./extra/pa-Guru.mjs": [
		66117,
		"node_modules_angular_common_locales_extra_pa-Guru_mjs"
	],
	"./extra/pa.mjs": [
		35004,
		"node_modules_angular_common_locales_extra_pa_mjs"
	],
	"./extra/pcm.mjs": [
		94121,
		"node_modules_angular_common_locales_extra_pcm_mjs"
	],
	"./extra/pl.mjs": [
		16468,
		"node_modules_angular_common_locales_extra_pl_mjs"
	],
	"./extra/ps-PK.mjs": [
		66801,
		"node_modules_angular_common_locales_extra_ps-PK_mjs"
	],
	"./extra/ps.mjs": [
		45686,
		"node_modules_angular_common_locales_extra_ps_mjs"
	],
	"./extra/pt-AO.mjs": [
		14911,
		"node_modules_angular_common_locales_extra_pt-AO_mjs"
	],
	"./extra/pt-CH.mjs": [
		61477,
		"node_modules_angular_common_locales_extra_pt-CH_mjs"
	],
	"./extra/pt-CV.mjs": [
		33889,
		"node_modules_angular_common_locales_extra_pt-CV_mjs"
	],
	"./extra/pt-GQ.mjs": [
		48938,
		"node_modules_angular_common_locales_extra_pt-GQ_mjs"
	],
	"./extra/pt-GW.mjs": [
		56173,
		"node_modules_angular_common_locales_extra_pt-GW_mjs"
	],
	"./extra/pt-LU.mjs": [
		34016,
		"node_modules_angular_common_locales_extra_pt-LU_mjs"
	],
	"./extra/pt-MO.mjs": [
		61977,
		"node_modules_angular_common_locales_extra_pt-MO_mjs"
	],
	"./extra/pt-MZ.mjs": [
		99834,
		"node_modules_angular_common_locales_extra_pt-MZ_mjs"
	],
	"./extra/pt-PT.mjs": [
		43170,
		"node_modules_angular_common_locales_extra_pt-PT_mjs"
	],
	"./extra/pt-ST.mjs": [
		60478,
		"node_modules_angular_common_locales_extra_pt-ST_mjs"
	],
	"./extra/pt-TL.mjs": [
		83874,
		"node_modules_angular_common_locales_extra_pt-TL_mjs"
	],
	"./extra/pt.mjs": [
		50823,
		"node_modules_angular_common_locales_extra_pt_mjs"
	],
	"./extra/qu-BO.mjs": [
		32338,
		"node_modules_angular_common_locales_extra_qu-BO_mjs"
	],
	"./extra/qu-EC.mjs": [
		31558,
		"node_modules_angular_common_locales_extra_qu-EC_mjs"
	],
	"./extra/qu.mjs": [
		32613,
		"node_modules_angular_common_locales_extra_qu_mjs"
	],
	"./extra/rm.mjs": [
		71284,
		"node_modules_angular_common_locales_extra_rm_mjs"
	],
	"./extra/rn.mjs": [
		92064,
		"node_modules_angular_common_locales_extra_rn_mjs"
	],
	"./extra/ro-MD.mjs": [
		54890,
		"node_modules_angular_common_locales_extra_ro-MD_mjs"
	],
	"./extra/ro.mjs": [
		3496,
		"node_modules_angular_common_locales_extra_ro_mjs"
	],
	"./extra/rof.mjs": [
		17391,
		"node_modules_angular_common_locales_extra_rof_mjs"
	],
	"./extra/ru-BY.mjs": [
		99707,
		"node_modules_angular_common_locales_extra_ru-BY_mjs"
	],
	"./extra/ru-KG.mjs": [
		96223,
		"node_modules_angular_common_locales_extra_ru-KG_mjs"
	],
	"./extra/ru-KZ.mjs": [
		4863,
		"node_modules_angular_common_locales_extra_ru-KZ_mjs"
	],
	"./extra/ru-MD.mjs": [
		37433,
		"node_modules_angular_common_locales_extra_ru-MD_mjs"
	],
	"./extra/ru-UA.mjs": [
		20758,
		"node_modules_angular_common_locales_extra_ru-UA_mjs"
	],
	"./extra/ru.mjs": [
		94379,
		"node_modules_angular_common_locales_extra_ru_mjs"
	],
	"./extra/rw.mjs": [
		83764,
		"node_modules_angular_common_locales_extra_rw_mjs"
	],
	"./extra/rwk.mjs": [
		77371,
		"node_modules_angular_common_locales_extra_rwk_mjs"
	],
	"./extra/sa.mjs": [
		72341,
		"node_modules_angular_common_locales_extra_sa_mjs"
	],
	"./extra/sah.mjs": [
		34583,
		"node_modules_angular_common_locales_extra_sah_mjs"
	],
	"./extra/saq.mjs": [
		6347,
		"node_modules_angular_common_locales_extra_saq_mjs"
	],
	"./extra/sat-Olck.mjs": [
		36003,
		"node_modules_angular_common_locales_extra_sat-Olck_mjs"
	],
	"./extra/sat.mjs": [
		55225,
		"node_modules_angular_common_locales_extra_sat_mjs"
	],
	"./extra/sbp.mjs": [
		29134,
		"node_modules_angular_common_locales_extra_sbp_mjs"
	],
	"./extra/sc.mjs": [
		73858,
		"node_modules_angular_common_locales_extra_sc_mjs"
	],
	"./extra/sd-Arab.mjs": [
		93035,
		"node_modules_angular_common_locales_extra_sd-Arab_mjs"
	],
	"./extra/sd-Deva.mjs": [
		73348,
		"node_modules_angular_common_locales_extra_sd-Deva_mjs"
	],
	"./extra/sd.mjs": [
		40579,
		"node_modules_angular_common_locales_extra_sd_mjs"
	],
	"./extra/se-FI.mjs": [
		69021,
		"node_modules_angular_common_locales_extra_se-FI_mjs"
	],
	"./extra/se-SE.mjs": [
		88174,
		"node_modules_angular_common_locales_extra_se-SE_mjs"
	],
	"./extra/se.mjs": [
		53301,
		"node_modules_angular_common_locales_extra_se_mjs"
	],
	"./extra/seh.mjs": [
		69702,
		"node_modules_angular_common_locales_extra_seh_mjs"
	],
	"./extra/ses.mjs": [
		16577,
		"node_modules_angular_common_locales_extra_ses_mjs"
	],
	"./extra/sg.mjs": [
		81714,
		"node_modules_angular_common_locales_extra_sg_mjs"
	],
	"./extra/shi-Latn.mjs": [
		603,
		"node_modules_angular_common_locales_extra_shi-Latn_mjs"
	],
	"./extra/shi-Tfng.mjs": [
		80614,
		"node_modules_angular_common_locales_extra_shi-Tfng_mjs"
	],
	"./extra/shi.mjs": [
		10288,
		"node_modules_angular_common_locales_extra_shi_mjs"
	],
	"./extra/si.mjs": [
		79833,
		"node_modules_angular_common_locales_extra_si_mjs"
	],
	"./extra/sk.mjs": [
		82290,
		"node_modules_angular_common_locales_extra_sk_mjs"
	],
	"./extra/sl.mjs": [
		88951,
		"node_modules_angular_common_locales_extra_sl_mjs"
	],
	"./extra/smn.mjs": [
		25387,
		"node_modules_angular_common_locales_extra_smn_mjs"
	],
	"./extra/sn.mjs": [
		78207,
		"node_modules_angular_common_locales_extra_sn_mjs"
	],
	"./extra/so-DJ.mjs": [
		71213,
		"node_modules_angular_common_locales_extra_so-DJ_mjs"
	],
	"./extra/so-ET.mjs": [
		71994,
		"node_modules_angular_common_locales_extra_so-ET_mjs"
	],
	"./extra/so-KE.mjs": [
		87271,
		"node_modules_angular_common_locales_extra_so-KE_mjs"
	],
	"./extra/so.mjs": [
		70109,
		"node_modules_angular_common_locales_extra_so_mjs"
	],
	"./extra/sq-MK.mjs": [
		58251,
		"node_modules_angular_common_locales_extra_sq-MK_mjs"
	],
	"./extra/sq-XK.mjs": [
		72104,
		"node_modules_angular_common_locales_extra_sq-XK_mjs"
	],
	"./extra/sq.mjs": [
		51679,
		"node_modules_angular_common_locales_extra_sq_mjs"
	],
	"./extra/sr-Cyrl-BA.mjs": [
		95031,
		"node_modules_angular_common_locales_extra_sr-Cyrl-BA_mjs"
	],
	"./extra/sr-Cyrl-ME.mjs": [
		76959,
		"node_modules_angular_common_locales_extra_sr-Cyrl-ME_mjs"
	],
	"./extra/sr-Cyrl-XK.mjs": [
		39907,
		"node_modules_angular_common_locales_extra_sr-Cyrl-XK_mjs"
	],
	"./extra/sr-Cyrl.mjs": [
		4804,
		"node_modules_angular_common_locales_extra_sr-Cyrl_mjs"
	],
	"./extra/sr-Latn-BA.mjs": [
		56870,
		"node_modules_angular_common_locales_extra_sr-Latn-BA_mjs"
	],
	"./extra/sr-Latn-ME.mjs": [
		16060,
		"node_modules_angular_common_locales_extra_sr-Latn-ME_mjs"
	],
	"./extra/sr-Latn-XK.mjs": [
		40417,
		"node_modules_angular_common_locales_extra_sr-Latn-XK_mjs"
	],
	"./extra/sr-Latn.mjs": [
		76033,
		"node_modules_angular_common_locales_extra_sr-Latn_mjs"
	],
	"./extra/sr.mjs": [
		42646,
		"node_modules_angular_common_locales_extra_sr_mjs"
	],
	"./extra/su-Latn.mjs": [
		61760,
		"node_modules_angular_common_locales_extra_su-Latn_mjs"
	],
	"./extra/su.mjs": [
		19941,
		"node_modules_angular_common_locales_extra_su_mjs"
	],
	"./extra/sv-AX.mjs": [
		96191,
		"node_modules_angular_common_locales_extra_sv-AX_mjs"
	],
	"./extra/sv-FI.mjs": [
		48363,
		"node_modules_angular_common_locales_extra_sv-FI_mjs"
	],
	"./extra/sv.mjs": [
		66857,
		"node_modules_angular_common_locales_extra_sv_mjs"
	],
	"./extra/sw-CD.mjs": [
		78679,
		"node_modules_angular_common_locales_extra_sw-CD_mjs"
	],
	"./extra/sw-KE.mjs": [
		13711,
		"node_modules_angular_common_locales_extra_sw-KE_mjs"
	],
	"./extra/sw-UG.mjs": [
		66374,
		"node_modules_angular_common_locales_extra_sw-UG_mjs"
	],
	"./extra/sw.mjs": [
		44067,
		"node_modules_angular_common_locales_extra_sw_mjs"
	],
	"./extra/ta-LK.mjs": [
		92556,
		"node_modules_angular_common_locales_extra_ta-LK_mjs"
	],
	"./extra/ta-MY.mjs": [
		13929,
		"node_modules_angular_common_locales_extra_ta-MY_mjs"
	],
	"./extra/ta-SG.mjs": [
		40,
		"node_modules_angular_common_locales_extra_ta-SG_mjs"
	],
	"./extra/ta.mjs": [
		59082,
		"node_modules_angular_common_locales_extra_ta_mjs"
	],
	"./extra/te.mjs": [
		49141,
		"node_modules_angular_common_locales_extra_te_mjs"
	],
	"./extra/teo-KE.mjs": [
		43321,
		"node_modules_angular_common_locales_extra_teo-KE_mjs"
	],
	"./extra/teo.mjs": [
		95971,
		"node_modules_angular_common_locales_extra_teo_mjs"
	],
	"./extra/tg.mjs": [
		68507,
		"node_modules_angular_common_locales_extra_tg_mjs"
	],
	"./extra/th.mjs": [
		19799,
		"node_modules_angular_common_locales_extra_th_mjs"
	],
	"./extra/ti-ER.mjs": [
		97479,
		"node_modules_angular_common_locales_extra_ti-ER_mjs"
	],
	"./extra/ti.mjs": [
		37955,
		"node_modules_angular_common_locales_extra_ti_mjs"
	],
	"./extra/tk.mjs": [
		86413,
		"node_modules_angular_common_locales_extra_tk_mjs"
	],
	"./extra/to.mjs": [
		53225,
		"node_modules_angular_common_locales_extra_to_mjs"
	],
	"./extra/tr-CY.mjs": [
		72262,
		"node_modules_angular_common_locales_extra_tr-CY_mjs"
	],
	"./extra/tr.mjs": [
		8557,
		"node_modules_angular_common_locales_extra_tr_mjs"
	],
	"./extra/tt.mjs": [
		51942,
		"node_modules_angular_common_locales_extra_tt_mjs"
	],
	"./extra/twq.mjs": [
		68455,
		"node_modules_angular_common_locales_extra_twq_mjs"
	],
	"./extra/tzm.mjs": [
		13184,
		"node_modules_angular_common_locales_extra_tzm_mjs"
	],
	"./extra/ug.mjs": [
		60168,
		"node_modules_angular_common_locales_extra_ug_mjs"
	],
	"./extra/uk.mjs": [
		85432,
		"node_modules_angular_common_locales_extra_uk_mjs"
	],
	"./extra/und.mjs": [
		84628,
		"node_modules_angular_common_locales_extra_und_mjs"
	],
	"./extra/ur-IN.mjs": [
		37013,
		"node_modules_angular_common_locales_extra_ur-IN_mjs"
	],
	"./extra/ur.mjs": [
		57495,
		"node_modules_angular_common_locales_extra_ur_mjs"
	],
	"./extra/uz-Arab.mjs": [
		55720,
		"node_modules_angular_common_locales_extra_uz-Arab_mjs"
	],
	"./extra/uz-Cyrl.mjs": [
		84396,
		"node_modules_angular_common_locales_extra_uz-Cyrl_mjs"
	],
	"./extra/uz-Latn.mjs": [
		60652,
		"node_modules_angular_common_locales_extra_uz-Latn_mjs"
	],
	"./extra/uz.mjs": [
		57759,
		"node_modules_angular_common_locales_extra_uz_mjs"
	],
	"./extra/vai-Latn.mjs": [
		3511,
		"node_modules_angular_common_locales_extra_vai-Latn_mjs"
	],
	"./extra/vai-Vaii.mjs": [
		60585,
		"node_modules_angular_common_locales_extra_vai-Vaii_mjs"
	],
	"./extra/vai.mjs": [
		46646,
		"node_modules_angular_common_locales_extra_vai_mjs"
	],
	"./extra/vi.mjs": [
		79728,
		"node_modules_angular_common_locales_extra_vi_mjs"
	],
	"./extra/vun.mjs": [
		54801,
		"node_modules_angular_common_locales_extra_vun_mjs"
	],
	"./extra/wae.mjs": [
		73220,
		"node_modules_angular_common_locales_extra_wae_mjs"
	],
	"./extra/wo.mjs": [
		94224,
		"node_modules_angular_common_locales_extra_wo_mjs"
	],
	"./extra/xh.mjs": [
		98812,
		"node_modules_angular_common_locales_extra_xh_mjs"
	],
	"./extra/xog.mjs": [
		80456,
		"node_modules_angular_common_locales_extra_xog_mjs"
	],
	"./extra/yav.mjs": [
		85460,
		"node_modules_angular_common_locales_extra_yav_mjs"
	],
	"./extra/yi.mjs": [
		71249,
		"node_modules_angular_common_locales_extra_yi_mjs"
	],
	"./extra/yo-BJ.mjs": [
		35545,
		"node_modules_angular_common_locales_extra_yo-BJ_mjs"
	],
	"./extra/yo.mjs": [
		59787,
		"node_modules_angular_common_locales_extra_yo_mjs"
	],
	"./extra/yrl-CO.mjs": [
		78130,
		"node_modules_angular_common_locales_extra_yrl-CO_mjs"
	],
	"./extra/yrl-VE.mjs": [
		73924,
		"node_modules_angular_common_locales_extra_yrl-VE_mjs"
	],
	"./extra/yrl.mjs": [
		64145,
		"node_modules_angular_common_locales_extra_yrl_mjs"
	],
	"./extra/yue-Hans.mjs": [
		50684,
		"node_modules_angular_common_locales_extra_yue-Hans_mjs"
	],
	"./extra/yue-Hant.mjs": [
		70372,
		"node_modules_angular_common_locales_extra_yue-Hant_mjs"
	],
	"./extra/yue.mjs": [
		1418,
		"node_modules_angular_common_locales_extra_yue_mjs"
	],
	"./extra/zgh.mjs": [
		25355,
		"node_modules_angular_common_locales_extra_zgh_mjs"
	],
	"./extra/zh-Hans-HK.mjs": [
		359,
		"node_modules_angular_common_locales_extra_zh-Hans-HK_mjs"
	],
	"./extra/zh-Hans-MO.mjs": [
		99246,
		"node_modules_angular_common_locales_extra_zh-Hans-MO_mjs"
	],
	"./extra/zh-Hans-SG.mjs": [
		76459,
		"node_modules_angular_common_locales_extra_zh-Hans-SG_mjs"
	],
	"./extra/zh-Hans.mjs": [
		58947,
		"node_modules_angular_common_locales_extra_zh-Hans_mjs"
	],
	"./extra/zh-Hant-HK.mjs": [
		7345,
		"node_modules_angular_common_locales_extra_zh-Hant-HK_mjs"
	],
	"./extra/zh-Hant-MO.mjs": [
		49494,
		"node_modules_angular_common_locales_extra_zh-Hant-MO_mjs"
	],
	"./extra/zh-Hant.mjs": [
		43937,
		"node_modules_angular_common_locales_extra_zh-Hant_mjs"
	],
	"./extra/zh.mjs": [
		39234,
		"node_modules_angular_common_locales_extra_zh_mjs"
	],
	"./extra/zu.mjs": [
		34501,
		"node_modules_angular_common_locales_extra_zu_mjs"
	],
	"./fa-AF.mjs": [
		98739,
		"node_modules_angular_common_locales_fa-AF_mjs"
	],
	"./fa.mjs": [
		11630,
		"node_modules_angular_common_locales_fa_mjs"
	],
	"./ff-Adlm-BF.mjs": [
		97617,
		"node_modules_angular_common_locales_ff-Adlm-BF_mjs"
	],
	"./ff-Adlm-CM.mjs": [
		24128,
		"node_modules_angular_common_locales_ff-Adlm-CM_mjs"
	],
	"./ff-Adlm-GH.mjs": [
		2836,
		"node_modules_angular_common_locales_ff-Adlm-GH_mjs"
	],
	"./ff-Adlm-GM.mjs": [
		54251,
		"node_modules_angular_common_locales_ff-Adlm-GM_mjs"
	],
	"./ff-Adlm-GW.mjs": [
		33836,
		"node_modules_angular_common_locales_ff-Adlm-GW_mjs"
	],
	"./ff-Adlm-LR.mjs": [
		53526,
		"node_modules_angular_common_locales_ff-Adlm-LR_mjs"
	],
	"./ff-Adlm-MR.mjs": [
		14073,
		"node_modules_angular_common_locales_ff-Adlm-MR_mjs"
	],
	"./ff-Adlm-NE.mjs": [
		93998,
		"node_modules_angular_common_locales_ff-Adlm-NE_mjs"
	],
	"./ff-Adlm-NG.mjs": [
		16981,
		"node_modules_angular_common_locales_ff-Adlm-NG_mjs"
	],
	"./ff-Adlm-SL.mjs": [
		80582,
		"node_modules_angular_common_locales_ff-Adlm-SL_mjs"
	],
	"./ff-Adlm-SN.mjs": [
		70013,
		"node_modules_angular_common_locales_ff-Adlm-SN_mjs"
	],
	"./ff-Adlm.mjs": [
		21380,
		"node_modules_angular_common_locales_ff-Adlm_mjs"
	],
	"./ff-CM.mjs": [
		86139,
		"node_modules_angular_common_locales_ff-CM_mjs"
	],
	"./ff-GN.mjs": [
		17399,
		"node_modules_angular_common_locales_ff-GN_mjs"
	],
	"./ff-Latn-BF.mjs": [
		48706,
		"node_modules_angular_common_locales_ff-Latn-BF_mjs"
	],
	"./ff-Latn-CM.mjs": [
		55507,
		"node_modules_angular_common_locales_ff-Latn-CM_mjs"
	],
	"./ff-Latn-GH.mjs": [
		4944,
		"node_modules_angular_common_locales_ff-Latn-GH_mjs"
	],
	"./ff-Latn-GM.mjs": [
		55401,
		"node_modules_angular_common_locales_ff-Latn-GM_mjs"
	],
	"./ff-Latn-GN.mjs": [
		62367,
		"node_modules_angular_common_locales_ff-Latn-GN_mjs"
	],
	"./ff-Latn-GW.mjs": [
		69153,
		"node_modules_angular_common_locales_ff-Latn-GW_mjs"
	],
	"./ff-Latn-LR.mjs": [
		19021,
		"node_modules_angular_common_locales_ff-Latn-LR_mjs"
	],
	"./ff-Latn-MR.mjs": [
		94391,
		"node_modules_angular_common_locales_ff-Latn-MR_mjs"
	],
	"./ff-Latn-NE.mjs": [
		54001,
		"node_modules_angular_common_locales_ff-Latn-NE_mjs"
	],
	"./ff-Latn-NG.mjs": [
		28799,
		"node_modules_angular_common_locales_ff-Latn-NG_mjs"
	],
	"./ff-Latn-SL.mjs": [
		71787,
		"node_modules_angular_common_locales_ff-Latn-SL_mjs"
	],
	"./ff-Latn.mjs": [
		64715,
		"node_modules_angular_common_locales_ff-Latn_mjs"
	],
	"./ff-MR.mjs": [
		32119,
		"node_modules_angular_common_locales_ff-MR_mjs"
	],
	"./ff.mjs": [
		62005,
		"node_modules_angular_common_locales_ff_mjs"
	],
	"./fi.mjs": [
		37148,
		"node_modules_angular_common_locales_fi_mjs"
	],
	"./fil.mjs": [
		77462,
		"node_modules_angular_common_locales_fil_mjs"
	],
	"./fo-DK.mjs": [
		60913,
		"node_modules_angular_common_locales_fo-DK_mjs"
	],
	"./fo.mjs": [
		51383,
		"node_modules_angular_common_locales_fo_mjs"
	],
	"./fr-BE.mjs": [
		64637,
		"node_modules_angular_common_locales_fr-BE_mjs"
	],
	"./fr-BF.mjs": [
		96175,
		"node_modules_angular_common_locales_fr-BF_mjs"
	],
	"./fr-BI.mjs": [
		39558,
		"node_modules_angular_common_locales_fr-BI_mjs"
	],
	"./fr-BJ.mjs": [
		71564,
		"node_modules_angular_common_locales_fr-BJ_mjs"
	],
	"./fr-BL.mjs": [
		35302,
		"node_modules_angular_common_locales_fr-BL_mjs"
	],
	"./fr-CA.mjs": [
		76960,
		"node_modules_angular_common_locales_fr-CA_mjs"
	],
	"./fr-CD.mjs": [
		57710,
		"node_modules_angular_common_locales_fr-CD_mjs"
	],
	"./fr-CF.mjs": [
		80714,
		"node_modules_angular_common_locales_fr-CF_mjs"
	],
	"./fr-CG.mjs": [
		60017,
		"node_modules_angular_common_locales_fr-CG_mjs"
	],
	"./fr-CH.mjs": [
		42343,
		"node_modules_angular_common_locales_fr-CH_mjs"
	],
	"./fr-CI.mjs": [
		93203,
		"node_modules_angular_common_locales_fr-CI_mjs"
	],
	"./fr-CM.mjs": [
		56154,
		"node_modules_angular_common_locales_fr-CM_mjs"
	],
	"./fr-DJ.mjs": [
		187,
		"node_modules_angular_common_locales_fr-DJ_mjs"
	],
	"./fr-DZ.mjs": [
		68246,
		"node_modules_angular_common_locales_fr-DZ_mjs"
	],
	"./fr-GA.mjs": [
		23019,
		"node_modules_angular_common_locales_fr-GA_mjs"
	],
	"./fr-GF.mjs": [
		81096,
		"node_modules_angular_common_locales_fr-GF_mjs"
	],
	"./fr-GN.mjs": [
		5386,
		"node_modules_angular_common_locales_fr-GN_mjs"
	],
	"./fr-GP.mjs": [
		49336,
		"node_modules_angular_common_locales_fr-GP_mjs"
	],
	"./fr-GQ.mjs": [
		39754,
		"node_modules_angular_common_locales_fr-GQ_mjs"
	],
	"./fr-HT.mjs": [
		60939,
		"node_modules_angular_common_locales_fr-HT_mjs"
	],
	"./fr-KM.mjs": [
		4061,
		"node_modules_angular_common_locales_fr-KM_mjs"
	],
	"./fr-LU.mjs": [
		79578,
		"node_modules_angular_common_locales_fr-LU_mjs"
	],
	"./fr-MA.mjs": [
		27155,
		"node_modules_angular_common_locales_fr-MA_mjs"
	],
	"./fr-MC.mjs": [
		81721,
		"node_modules_angular_common_locales_fr-MC_mjs"
	],
	"./fr-MF.mjs": [
		60884,
		"node_modules_angular_common_locales_fr-MF_mjs"
	],
	"./fr-MG.mjs": [
		97693,
		"node_modules_angular_common_locales_fr-MG_mjs"
	],
	"./fr-ML.mjs": [
		48201,
		"node_modules_angular_common_locales_fr-ML_mjs"
	],
	"./fr-MQ.mjs": [
		69170,
		"node_modules_angular_common_locales_fr-MQ_mjs"
	],
	"./fr-MR.mjs": [
		16960,
		"node_modules_angular_common_locales_fr-MR_mjs"
	],
	"./fr-MU.mjs": [
		11498,
		"node_modules_angular_common_locales_fr-MU_mjs"
	],
	"./fr-NC.mjs": [
		36454,
		"node_modules_angular_common_locales_fr-NC_mjs"
	],
	"./fr-NE.mjs": [
		19446,
		"node_modules_angular_common_locales_fr-NE_mjs"
	],
	"./fr-PF.mjs": [
		10101,
		"node_modules_angular_common_locales_fr-PF_mjs"
	],
	"./fr-PM.mjs": [
		44033,
		"node_modules_angular_common_locales_fr-PM_mjs"
	],
	"./fr-RE.mjs": [
		75644,
		"node_modules_angular_common_locales_fr-RE_mjs"
	],
	"./fr-RW.mjs": [
		7108,
		"node_modules_angular_common_locales_fr-RW_mjs"
	],
	"./fr-SC.mjs": [
		85441,
		"node_modules_angular_common_locales_fr-SC_mjs"
	],
	"./fr-SN.mjs": [
		53342,
		"node_modules_angular_common_locales_fr-SN_mjs"
	],
	"./fr-SY.mjs": [
		94253,
		"node_modules_angular_common_locales_fr-SY_mjs"
	],
	"./fr-TD.mjs": [
		40834,
		"node_modules_angular_common_locales_fr-TD_mjs"
	],
	"./fr-TG.mjs": [
		62555,
		"node_modules_angular_common_locales_fr-TG_mjs"
	],
	"./fr-TN.mjs": [
		12957,
		"node_modules_angular_common_locales_fr-TN_mjs"
	],
	"./fr-VU.mjs": [
		92155,
		"node_modules_angular_common_locales_fr-VU_mjs"
	],
	"./fr-WF.mjs": [
		38870,
		"node_modules_angular_common_locales_fr-WF_mjs"
	],
	"./fr-YT.mjs": [
		47688,
		"node_modules_angular_common_locales_fr-YT_mjs"
	],
	"./fr.mjs": [
		58384,
		"node_modules_angular_common_locales_fr_mjs"
	],
	"./fur.mjs": [
		10491,
		"node_modules_angular_common_locales_fur_mjs"
	],
	"./fy.mjs": [
		48186,
		"node_modules_angular_common_locales_fy_mjs"
	],
	"./ga-GB.mjs": [
		59893,
		"node_modules_angular_common_locales_ga-GB_mjs"
	],
	"./ga.mjs": [
		64779,
		"node_modules_angular_common_locales_ga_mjs"
	],
	"./gd.mjs": [
		81698,
		"node_modules_angular_common_locales_gd_mjs"
	],
	"./gl.mjs": [
		45003,
		"node_modules_angular_common_locales_gl_mjs"
	],
	"./gsw-FR.mjs": [
		13083,
		"node_modules_angular_common_locales_gsw-FR_mjs"
	],
	"./gsw-LI.mjs": [
		67575,
		"node_modules_angular_common_locales_gsw-LI_mjs"
	],
	"./gsw.mjs": [
		72859,
		"node_modules_angular_common_locales_gsw_mjs"
	],
	"./gu.mjs": [
		97111,
		"node_modules_angular_common_locales_gu_mjs"
	],
	"./guz.mjs": [
		77724,
		"node_modules_angular_common_locales_guz_mjs"
	],
	"./gv.mjs": [
		47651,
		"node_modules_angular_common_locales_gv_mjs"
	],
	"./ha-GH.mjs": [
		23172,
		"node_modules_angular_common_locales_ha-GH_mjs"
	],
	"./ha-NE.mjs": [
		60741,
		"node_modules_angular_common_locales_ha-NE_mjs"
	],
	"./ha.mjs": [
		14232,
		"node_modules_angular_common_locales_ha_mjs"
	],
	"./haw.mjs": [
		48119,
		"node_modules_angular_common_locales_haw_mjs"
	],
	"./he.mjs": [
		52848,
		"node_modules_angular_common_locales_he_mjs"
	],
	"./hi-Latn.mjs": [
		77626,
		"node_modules_angular_common_locales_hi-Latn_mjs"
	],
	"./hi.mjs": [
		88432,
		"node_modules_angular_common_locales_hi_mjs"
	],
	"./hr-BA.mjs": [
		1385,
		"node_modules_angular_common_locales_hr-BA_mjs"
	],
	"./hr.mjs": [
		9998,
		"node_modules_angular_common_locales_hr_mjs"
	],
	"./hsb.mjs": [
		67285,
		"node_modules_angular_common_locales_hsb_mjs"
	],
	"./hu.mjs": [
		24894,
		"node_modules_angular_common_locales_hu_mjs"
	],
	"./hy.mjs": [
		88407,
		"node_modules_angular_common_locales_hy_mjs"
	],
	"./ia.mjs": [
		62013,
		"node_modules_angular_common_locales_ia_mjs"
	],
	"./id.mjs": [
		72606,
		"node_modules_angular_common_locales_id_mjs"
	],
	"./ig.mjs": [
		47980,
		"node_modules_angular_common_locales_ig_mjs"
	],
	"./ii.mjs": [
		63852,
		"node_modules_angular_common_locales_ii_mjs"
	],
	"./is.mjs": [
		25219,
		"node_modules_angular_common_locales_is_mjs"
	],
	"./it-CH.mjs": [
		88287,
		"node_modules_angular_common_locales_it-CH_mjs"
	],
	"./it-SM.mjs": [
		37277,
		"node_modules_angular_common_locales_it-SM_mjs"
	],
	"./it-VA.mjs": [
		45366,
		"node_modules_angular_common_locales_it-VA_mjs"
	],
	"./it.mjs": [
		4129,
		"node_modules_angular_common_locales_it_mjs"
	],
	"./ja.mjs": [
		69528,
		"node_modules_angular_common_locales_ja_mjs"
	],
	"./jgo.mjs": [
		48376,
		"node_modules_angular_common_locales_jgo_mjs"
	],
	"./jmc.mjs": [
		97393,
		"node_modules_angular_common_locales_jmc_mjs"
	],
	"./jv.mjs": [
		80832,
		"node_modules_angular_common_locales_jv_mjs"
	],
	"./ka.mjs": [
		47420,
		"node_modules_angular_common_locales_ka_mjs"
	],
	"./kab.mjs": [
		76530,
		"node_modules_angular_common_locales_kab_mjs"
	],
	"./kam.mjs": [
		49787,
		"node_modules_angular_common_locales_kam_mjs"
	],
	"./kde.mjs": [
		48481,
		"node_modules_angular_common_locales_kde_mjs"
	],
	"./kea.mjs": [
		5365,
		"node_modules_angular_common_locales_kea_mjs"
	],
	"./kgp.mjs": [
		40882,
		"node_modules_angular_common_locales_kgp_mjs"
	],
	"./khq.mjs": [
		80914,
		"node_modules_angular_common_locales_khq_mjs"
	],
	"./ki.mjs": [
		68111,
		"node_modules_angular_common_locales_ki_mjs"
	],
	"./kk.mjs": [
		46906,
		"node_modules_angular_common_locales_kk_mjs"
	],
	"./kkj.mjs": [
		19275,
		"node_modules_angular_common_locales_kkj_mjs"
	],
	"./kl.mjs": [
		51362,
		"node_modules_angular_common_locales_kl_mjs"
	],
	"./kln.mjs": [
		16191,
		"node_modules_angular_common_locales_kln_mjs"
	],
	"./km.mjs": [
		25392,
		"node_modules_angular_common_locales_km_mjs"
	],
	"./kn.mjs": [
		59475,
		"node_modules_angular_common_locales_kn_mjs"
	],
	"./ko-KP.mjs": [
		52919,
		"node_modules_angular_common_locales_ko-KP_mjs"
	],
	"./ko.mjs": [
		74618,
		"node_modules_angular_common_locales_ko_mjs"
	],
	"./kok.mjs": [
		37090,
		"node_modules_angular_common_locales_kok_mjs"
	],
	"./ks-Arab.mjs": [
		62914,
		"node_modules_angular_common_locales_ks-Arab_mjs"
	],
	"./ks-Deva.mjs": [
		9789,
		"node_modules_angular_common_locales_ks-Deva_mjs"
	],
	"./ks.mjs": [
		42127,
		"node_modules_angular_common_locales_ks_mjs"
	],
	"./ksb.mjs": [
		19474,
		"node_modules_angular_common_locales_ksb_mjs"
	],
	"./ksf.mjs": [
		6424,
		"node_modules_angular_common_locales_ksf_mjs"
	],
	"./ksh.mjs": [
		19753,
		"node_modules_angular_common_locales_ksh_mjs"
	],
	"./ku.mjs": [
		6578,
		"node_modules_angular_common_locales_ku_mjs"
	],
	"./kw.mjs": [
		48530,
		"node_modules_angular_common_locales_kw_mjs"
	],
	"./ky.mjs": [
		63682,
		"node_modules_angular_common_locales_ky_mjs"
	],
	"./lag.mjs": [
		85185,
		"node_modules_angular_common_locales_lag_mjs"
	],
	"./lb.mjs": [
		86307,
		"node_modules_angular_common_locales_lb_mjs"
	],
	"./lg.mjs": [
		75613,
		"node_modules_angular_common_locales_lg_mjs"
	],
	"./lkt.mjs": [
		39939,
		"node_modules_angular_common_locales_lkt_mjs"
	],
	"./ln-AO.mjs": [
		59318,
		"node_modules_angular_common_locales_ln-AO_mjs"
	],
	"./ln-CF.mjs": [
		46599,
		"node_modules_angular_common_locales_ln-CF_mjs"
	],
	"./ln-CG.mjs": [
		98509,
		"node_modules_angular_common_locales_ln-CG_mjs"
	],
	"./ln.mjs": [
		4902,
		"node_modules_angular_common_locales_ln_mjs"
	],
	"./lo.mjs": [
		21037,
		"node_modules_angular_common_locales_lo_mjs"
	],
	"./lrc-IQ.mjs": [
		93647,
		"node_modules_angular_common_locales_lrc-IQ_mjs"
	],
	"./lrc.mjs": [
		3604,
		"node_modules_angular_common_locales_lrc_mjs"
	],
	"./lt.mjs": [
		25461,
		"node_modules_angular_common_locales_lt_mjs"
	],
	"./lu.mjs": [
		42371,
		"node_modules_angular_common_locales_lu_mjs"
	],
	"./luo.mjs": [
		96071,
		"node_modules_angular_common_locales_luo_mjs"
	],
	"./luy.mjs": [
		82258,
		"node_modules_angular_common_locales_luy_mjs"
	],
	"./lv.mjs": [
		14305,
		"node_modules_angular_common_locales_lv_mjs"
	],
	"./mai.mjs": [
		19414,
		"node_modules_angular_common_locales_mai_mjs"
	],
	"./mas-TZ.mjs": [
		8275,
		"node_modules_angular_common_locales_mas-TZ_mjs"
	],
	"./mas.mjs": [
		82439,
		"node_modules_angular_common_locales_mas_mjs"
	],
	"./mer.mjs": [
		2176,
		"node_modules_angular_common_locales_mer_mjs"
	],
	"./mfe.mjs": [
		63779,
		"node_modules_angular_common_locales_mfe_mjs"
	],
	"./mg.mjs": [
		71590,
		"node_modules_angular_common_locales_mg_mjs"
	],
	"./mgh.mjs": [
		5414,
		"node_modules_angular_common_locales_mgh_mjs"
	],
	"./mgo.mjs": [
		23599,
		"node_modules_angular_common_locales_mgo_mjs"
	],
	"./mi.mjs": [
		83061,
		"node_modules_angular_common_locales_mi_mjs"
	],
	"./mk.mjs": [
		80606,
		"node_modules_angular_common_locales_mk_mjs"
	],
	"./ml.mjs": [
		94372,
		"node_modules_angular_common_locales_ml_mjs"
	],
	"./mn.mjs": [
		29899,
		"node_modules_angular_common_locales_mn_mjs"
	],
	"./mni-Beng.mjs": [
		77803,
		"node_modules_angular_common_locales_mni-Beng_mjs"
	],
	"./mni.mjs": [
		90165,
		"node_modules_angular_common_locales_mni_mjs"
	],
	"./mr.mjs": [
		33505,
		"node_modules_angular_common_locales_mr_mjs"
	],
	"./ms-BN.mjs": [
		93744,
		"node_modules_angular_common_locales_ms-BN_mjs"
	],
	"./ms-ID.mjs": [
		53155,
		"node_modules_angular_common_locales_ms-ID_mjs"
	],
	"./ms-SG.mjs": [
		82220,
		"node_modules_angular_common_locales_ms-SG_mjs"
	],
	"./ms.mjs": [
		22176,
		"node_modules_angular_common_locales_ms_mjs"
	],
	"./mt.mjs": [
		49414,
		"node_modules_angular_common_locales_mt_mjs"
	],
	"./mua.mjs": [
		80630,
		"node_modules_angular_common_locales_mua_mjs"
	],
	"./my.mjs": [
		97379,
		"node_modules_angular_common_locales_my_mjs"
	],
	"./mzn.mjs": [
		67043,
		"node_modules_angular_common_locales_mzn_mjs"
	],
	"./naq.mjs": [
		3026,
		"node_modules_angular_common_locales_naq_mjs"
	],
	"./nb-SJ.mjs": [
		47761,
		"node_modules_angular_common_locales_nb-SJ_mjs"
	],
	"./nb.mjs": [
		74033,
		"node_modules_angular_common_locales_nb_mjs"
	],
	"./nd.mjs": [
		4759,
		"node_modules_angular_common_locales_nd_mjs"
	],
	"./nds-NL.mjs": [
		78339,
		"node_modules_angular_common_locales_nds-NL_mjs"
	],
	"./nds.mjs": [
		12109,
		"node_modules_angular_common_locales_nds_mjs"
	],
	"./ne-IN.mjs": [
		68074,
		"node_modules_angular_common_locales_ne-IN_mjs"
	],
	"./ne.mjs": [
		84026,
		"node_modules_angular_common_locales_ne_mjs"
	],
	"./nl-AW.mjs": [
		99306,
		"node_modules_angular_common_locales_nl-AW_mjs"
	],
	"./nl-BE.mjs": [
		69012,
		"node_modules_angular_common_locales_nl-BE_mjs"
	],
	"./nl-BQ.mjs": [
		2802,
		"node_modules_angular_common_locales_nl-BQ_mjs"
	],
	"./nl-CW.mjs": [
		88193,
		"node_modules_angular_common_locales_nl-CW_mjs"
	],
	"./nl-SR.mjs": [
		78126,
		"node_modules_angular_common_locales_nl-SR_mjs"
	],
	"./nl-SX.mjs": [
		2072,
		"node_modules_angular_common_locales_nl-SX_mjs"
	],
	"./nl.mjs": [
		2293,
		"node_modules_angular_common_locales_nl_mjs"
	],
	"./nmg.mjs": [
		40867,
		"node_modules_angular_common_locales_nmg_mjs"
	],
	"./nn.mjs": [
		56900,
		"node_modules_angular_common_locales_nn_mjs"
	],
	"./nnh.mjs": [
		25186,
		"node_modules_angular_common_locales_nnh_mjs"
	],
	"./no.mjs": [
		70152,
		"node_modules_angular_common_locales_no_mjs"
	],
	"./nus.mjs": [
		10393,
		"node_modules_angular_common_locales_nus_mjs"
	],
	"./nyn.mjs": [
		84336,
		"node_modules_angular_common_locales_nyn_mjs"
	],
	"./om-KE.mjs": [
		87298,
		"node_modules_angular_common_locales_om-KE_mjs"
	],
	"./om.mjs": [
		1423,
		"node_modules_angular_common_locales_om_mjs"
	],
	"./or.mjs": [
		47201,
		"node_modules_angular_common_locales_or_mjs"
	],
	"./os-RU.mjs": [
		93962,
		"node_modules_angular_common_locales_os-RU_mjs"
	],
	"./os.mjs": [
		36817,
		"node_modules_angular_common_locales_os_mjs"
	],
	"./pa-Arab.mjs": [
		55156,
		"node_modules_angular_common_locales_pa-Arab_mjs"
	],
	"./pa-Guru.mjs": [
		24796,
		"node_modules_angular_common_locales_pa-Guru_mjs"
	],
	"./pa.mjs": [
		32148,
		"node_modules_angular_common_locales_pa_mjs"
	],
	"./pcm.mjs": [
		28710,
		"node_modules_angular_common_locales_pcm_mjs"
	],
	"./pl.mjs": [
		91499,
		"node_modules_angular_common_locales_pl_mjs"
	],
	"./ps-PK.mjs": [
		5727,
		"node_modules_angular_common_locales_ps-PK_mjs"
	],
	"./ps.mjs": [
		87475,
		"node_modules_angular_common_locales_ps_mjs"
	],
	"./pt-AO.mjs": [
		48413,
		"node_modules_angular_common_locales_pt-AO_mjs"
	],
	"./pt-CH.mjs": [
		81081,
		"node_modules_angular_common_locales_pt-CH_mjs"
	],
	"./pt-CV.mjs": [
		87246,
		"node_modules_angular_common_locales_pt-CV_mjs"
	],
	"./pt-GQ.mjs": [
		19188,
		"node_modules_angular_common_locales_pt-GQ_mjs"
	],
	"./pt-GW.mjs": [
		51669,
		"node_modules_angular_common_locales_pt-GW_mjs"
	],
	"./pt-LU.mjs": [
		33204,
		"node_modules_angular_common_locales_pt-LU_mjs"
	],
	"./pt-MO.mjs": [
		82366,
		"node_modules_angular_common_locales_pt-MO_mjs"
	],
	"./pt-MZ.mjs": [
		88119,
		"node_modules_angular_common_locales_pt-MZ_mjs"
	],
	"./pt-PT.mjs": [
		18296,
		"node_modules_angular_common_locales_pt-PT_mjs"
	],
	"./pt-ST.mjs": [
		47904,
		"node_modules_angular_common_locales_pt-ST_mjs"
	],
	"./pt-TL.mjs": [
		69954,
		"node_modules_angular_common_locales_pt-TL_mjs"
	],
	"./pt.mjs": [
		27423,
		"node_modules_angular_common_locales_pt_mjs"
	],
	"./qu-BO.mjs": [
		88775,
		"node_modules_angular_common_locales_qu-BO_mjs"
	],
	"./qu-EC.mjs": [
		37603,
		"node_modules_angular_common_locales_qu-EC_mjs"
	],
	"./qu.mjs": [
		14709,
		"node_modules_angular_common_locales_qu_mjs"
	],
	"./rm.mjs": [
		82082,
		"node_modules_angular_common_locales_rm_mjs"
	],
	"./rn.mjs": [
		22221,
		"node_modules_angular_common_locales_rn_mjs"
	],
	"./ro-MD.mjs": [
		59941,
		"node_modules_angular_common_locales_ro-MD_mjs"
	],
	"./ro.mjs": [
		85040,
		"node_modules_angular_common_locales_ro_mjs"
	],
	"./rof.mjs": [
		94146,
		"node_modules_angular_common_locales_rof_mjs"
	],
	"./ru-BY.mjs": [
		89392,
		"node_modules_angular_common_locales_ru-BY_mjs"
	],
	"./ru-KG.mjs": [
		91856,
		"node_modules_angular_common_locales_ru-KG_mjs"
	],
	"./ru-KZ.mjs": [
		44316,
		"node_modules_angular_common_locales_ru-KZ_mjs"
	],
	"./ru-MD.mjs": [
		82509,
		"node_modules_angular_common_locales_ru-MD_mjs"
	],
	"./ru-UA.mjs": [
		55178,
		"node_modules_angular_common_locales_ru-UA_mjs"
	],
	"./ru.mjs": [
		17954,
		"node_modules_angular_common_locales_ru_mjs"
	],
	"./rw.mjs": [
		99224,
		"node_modules_angular_common_locales_rw_mjs"
	],
	"./rwk.mjs": [
		56148,
		"node_modules_angular_common_locales_rwk_mjs"
	],
	"./sa.mjs": [
		67200,
		"node_modules_angular_common_locales_sa_mjs"
	],
	"./sah.mjs": [
		83534,
		"node_modules_angular_common_locales_sah_mjs"
	],
	"./saq.mjs": [
		29039,
		"node_modules_angular_common_locales_saq_mjs"
	],
	"./sat-Olck.mjs": [
		53385,
		"node_modules_angular_common_locales_sat-Olck_mjs"
	],
	"./sat.mjs": [
		25652,
		"node_modules_angular_common_locales_sat_mjs"
	],
	"./sbp.mjs": [
		31407,
		"node_modules_angular_common_locales_sbp_mjs"
	],
	"./sc.mjs": [
		58739,
		"node_modules_angular_common_locales_sc_mjs"
	],
	"./sd-Arab.mjs": [
		75747,
		"node_modules_angular_common_locales_sd-Arab_mjs"
	],
	"./sd-Deva.mjs": [
		20506,
		"node_modules_angular_common_locales_sd-Deva_mjs"
	],
	"./sd.mjs": [
		70325,
		"node_modules_angular_common_locales_sd_mjs"
	],
	"./se-FI.mjs": [
		5935,
		"node_modules_angular_common_locales_se-FI_mjs"
	],
	"./se-SE.mjs": [
		75170,
		"node_modules_angular_common_locales_se-SE_mjs"
	],
	"./se.mjs": [
		61912,
		"node_modules_angular_common_locales_se_mjs"
	],
	"./seh.mjs": [
		64486,
		"node_modules_angular_common_locales_seh_mjs"
	],
	"./ses.mjs": [
		43640,
		"node_modules_angular_common_locales_ses_mjs"
	],
	"./sg.mjs": [
		42845,
		"node_modules_angular_common_locales_sg_mjs"
	],
	"./shi-Latn.mjs": [
		207,
		"node_modules_angular_common_locales_shi-Latn_mjs"
	],
	"./shi-Tfng.mjs": [
		67606,
		"node_modules_angular_common_locales_shi-Tfng_mjs"
	],
	"./shi.mjs": [
		90990,
		"node_modules_angular_common_locales_shi_mjs"
	],
	"./si.mjs": [
		98823,
		"node_modules_angular_common_locales_si_mjs"
	],
	"./sk.mjs": [
		70473,
		"node_modules_angular_common_locales_sk_mjs"
	],
	"./sl.mjs": [
		99108,
		"node_modules_angular_common_locales_sl_mjs"
	],
	"./smn.mjs": [
		80858,
		"node_modules_angular_common_locales_smn_mjs"
	],
	"./sn.mjs": [
		55281,
		"node_modules_angular_common_locales_sn_mjs"
	],
	"./so-DJ.mjs": [
		94875,
		"node_modules_angular_common_locales_so-DJ_mjs"
	],
	"./so-ET.mjs": [
		17990,
		"node_modules_angular_common_locales_so-ET_mjs"
	],
	"./so-KE.mjs": [
		12565,
		"node_modules_angular_common_locales_so-KE_mjs"
	],
	"./so.mjs": [
		54875,
		"node_modules_angular_common_locales_so_mjs"
	],
	"./sq-MK.mjs": [
		16633,
		"node_modules_angular_common_locales_sq-MK_mjs"
	],
	"./sq-XK.mjs": [
		37627,
		"node_modules_angular_common_locales_sq-XK_mjs"
	],
	"./sq.mjs": [
		7951,
		"node_modules_angular_common_locales_sq_mjs"
	],
	"./sr-Cyrl-BA.mjs": [
		52386,
		"node_modules_angular_common_locales_sr-Cyrl-BA_mjs"
	],
	"./sr-Cyrl-ME.mjs": [
		48232,
		"node_modules_angular_common_locales_sr-Cyrl-ME_mjs"
	],
	"./sr-Cyrl-XK.mjs": [
		69294,
		"node_modules_angular_common_locales_sr-Cyrl-XK_mjs"
	],
	"./sr-Cyrl.mjs": [
		17595,
		"node_modules_angular_common_locales_sr-Cyrl_mjs"
	],
	"./sr-Latn-BA.mjs": [
		51457,
		"node_modules_angular_common_locales_sr-Latn-BA_mjs"
	],
	"./sr-Latn-ME.mjs": [
		67419,
		"node_modules_angular_common_locales_sr-Latn-ME_mjs"
	],
	"./sr-Latn-XK.mjs": [
		28759,
		"node_modules_angular_common_locales_sr-Latn-XK_mjs"
	],
	"./sr-Latn.mjs": [
		81673,
		"node_modules_angular_common_locales_sr-Latn_mjs"
	],
	"./sr.mjs": [
		69079,
		"node_modules_angular_common_locales_sr_mjs"
	],
	"./su-Latn.mjs": [
		14704,
		"node_modules_angular_common_locales_su-Latn_mjs"
	],
	"./su.mjs": [
		55564,
		"node_modules_angular_common_locales_su_mjs"
	],
	"./sv-AX.mjs": [
		12091,
		"node_modules_angular_common_locales_sv-AX_mjs"
	],
	"./sv-FI.mjs": [
		20419,
		"node_modules_angular_common_locales_sv-FI_mjs"
	],
	"./sv.mjs": [
		75664,
		"node_modules_angular_common_locales_sv_mjs"
	],
	"./sw-CD.mjs": [
		69092,
		"node_modules_angular_common_locales_sw-CD_mjs"
	],
	"./sw-KE.mjs": [
		21117,
		"node_modules_angular_common_locales_sw-KE_mjs"
	],
	"./sw-UG.mjs": [
		49802,
		"node_modules_angular_common_locales_sw-UG_mjs"
	],
	"./sw.mjs": [
		28599,
		"node_modules_angular_common_locales_sw_mjs"
	],
	"./ta-LK.mjs": [
		24135,
		"node_modules_angular_common_locales_ta-LK_mjs"
	],
	"./ta-MY.mjs": [
		8082,
		"node_modules_angular_common_locales_ta-MY_mjs"
	],
	"./ta-SG.mjs": [
		80484,
		"node_modules_angular_common_locales_ta-SG_mjs"
	],
	"./ta.mjs": [
		78608,
		"node_modules_angular_common_locales_ta_mjs"
	],
	"./te.mjs": [
		2200,
		"node_modules_angular_common_locales_te_mjs"
	],
	"./teo-KE.mjs": [
		99489,
		"node_modules_angular_common_locales_teo-KE_mjs"
	],
	"./teo.mjs": [
		51733,
		"node_modules_angular_common_locales_teo_mjs"
	],
	"./tg.mjs": [
		16032,
		"node_modules_angular_common_locales_tg_mjs"
	],
	"./th.mjs": [
		1291,
		"node_modules_angular_common_locales_th_mjs"
	],
	"./ti-ER.mjs": [
		56287,
		"node_modules_angular_common_locales_ti-ER_mjs"
	],
	"./ti.mjs": [
		4046,
		"node_modules_angular_common_locales_ti_mjs"
	],
	"./tk.mjs": [
		98904,
		"node_modules_angular_common_locales_tk_mjs"
	],
	"./to.mjs": [
		92333,
		"node_modules_angular_common_locales_to_mjs"
	],
	"./tr-CY.mjs": [
		52558,
		"node_modules_angular_common_locales_tr-CY_mjs"
	],
	"./tr.mjs": [
		55763,
		"node_modules_angular_common_locales_tr_mjs"
	],
	"./tt.mjs": [
		49299,
		"node_modules_angular_common_locales_tt_mjs"
	],
	"./twq.mjs": [
		94050,
		"node_modules_angular_common_locales_twq_mjs"
	],
	"./tzm.mjs": [
		90327,
		"node_modules_angular_common_locales_tzm_mjs"
	],
	"./ug.mjs": [
		44475,
		"node_modules_angular_common_locales_ug_mjs"
	],
	"./uk.mjs": [
		21221,
		"node_modules_angular_common_locales_uk_mjs"
	],
	"./und.mjs": [
		50448,
		"node_modules_angular_common_locales_und_mjs"
	],
	"./ur-IN.mjs": [
		73373,
		"node_modules_angular_common_locales_ur-IN_mjs"
	],
	"./ur.mjs": [
		71412,
		"node_modules_angular_common_locales_ur_mjs"
	],
	"./uz-Arab.mjs": [
		93969,
		"node_modules_angular_common_locales_uz-Arab_mjs"
	],
	"./uz-Cyrl.mjs": [
		59794,
		"node_modules_angular_common_locales_uz-Cyrl_mjs"
	],
	"./uz-Latn.mjs": [
		87218,
		"node_modules_angular_common_locales_uz-Latn_mjs"
	],
	"./uz.mjs": [
		26609,
		"node_modules_angular_common_locales_uz_mjs"
	],
	"./vai-Latn.mjs": [
		79381,
		"node_modules_angular_common_locales_vai-Latn_mjs"
	],
	"./vai-Vaii.mjs": [
		12504,
		"node_modules_angular_common_locales_vai-Vaii_mjs"
	],
	"./vai.mjs": [
		42057,
		"node_modules_angular_common_locales_vai_mjs"
	],
	"./vi.mjs": [
		40617,
		"node_modules_angular_common_locales_vi_mjs"
	],
	"./vun.mjs": [
		43722,
		"node_modules_angular_common_locales_vun_mjs"
	],
	"./wae.mjs": [
		78458,
		"node_modules_angular_common_locales_wae_mjs"
	],
	"./wo.mjs": [
		68424,
		"node_modules_angular_common_locales_wo_mjs"
	],
	"./xh.mjs": [
		49094,
		"node_modules_angular_common_locales_xh_mjs"
	],
	"./xog.mjs": [
		80083,
		"node_modules_angular_common_locales_xog_mjs"
	],
	"./yav.mjs": [
		95397,
		"node_modules_angular_common_locales_yav_mjs"
	],
	"./yi.mjs": [
		52007,
		"node_modules_angular_common_locales_yi_mjs"
	],
	"./yo-BJ.mjs": [
		69969,
		"node_modules_angular_common_locales_yo-BJ_mjs"
	],
	"./yo.mjs": [
		14412,
		"node_modules_angular_common_locales_yo_mjs"
	],
	"./yrl-CO.mjs": [
		35794,
		"node_modules_angular_common_locales_yrl-CO_mjs"
	],
	"./yrl-VE.mjs": [
		64188,
		"node_modules_angular_common_locales_yrl-VE_mjs"
	],
	"./yrl.mjs": [
		96518,
		"node_modules_angular_common_locales_yrl_mjs"
	],
	"./yue-Hans.mjs": [
		43280,
		"node_modules_angular_common_locales_yue-Hans_mjs"
	],
	"./yue-Hant.mjs": [
		73765,
		"node_modules_angular_common_locales_yue-Hant_mjs"
	],
	"./yue.mjs": [
		68547,
		"node_modules_angular_common_locales_yue_mjs"
	],
	"./zgh.mjs": [
		93235,
		"node_modules_angular_common_locales_zgh_mjs"
	],
	"./zh-Hans-HK.mjs": [
		20318,
		"node_modules_angular_common_locales_zh-Hans-HK_mjs"
	],
	"./zh-Hans-MO.mjs": [
		20741,
		"node_modules_angular_common_locales_zh-Hans-MO_mjs"
	],
	"./zh-Hans-SG.mjs": [
		54023,
		"node_modules_angular_common_locales_zh-Hans-SG_mjs"
	],
	"./zh-Hans.mjs": [
		5138,
		"node_modules_angular_common_locales_zh-Hans_mjs"
	],
	"./zh-Hant-HK.mjs": [
		5040,
		"node_modules_angular_common_locales_zh-Hant-HK_mjs"
	],
	"./zh-Hant-MO.mjs": [
		74723,
		"node_modules_angular_common_locales_zh-Hant-MO_mjs"
	],
	"./zh-Hant.mjs": [
		78324,
		"node_modules_angular_common_locales_zh-Hant_mjs"
	],
	"./zh.mjs": [
		98537,
		"node_modules_angular_common_locales_zh_mjs"
	],
	"./zu.mjs": [
		15532,
		"node_modules_angular_common_locales_zu_mjs"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 14300;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map