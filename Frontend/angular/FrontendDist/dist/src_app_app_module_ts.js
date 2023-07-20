"use strict";
(self["webpackChunkCompanyWebsite"] = self["webpackChunkCompanyWebsite"] || []).push([["src_app_app_module_ts"],{

/***/ 26698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);




class AboutComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
  }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 106,
  vars: 4,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "content", "px-2"], [1, "card"], [1, "card-body"], ["href", "http://aspnetzero.com?ref=abptmpl", "target", "_blank"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Zero/Tenant-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Zero/Role-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Zero/User-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Authorization"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Zero/Permission-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Setting-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Zero/Language-Management"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents/Audit-Logging"], ["href", "https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity", "target", "_blank"], ["href", "https://www.aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Core"], ["href", "http://www.aspnetboilerplate.com/Pages/Documents"], ["href", "https://github.com/aspnetboilerplate/module-zero-core-template", "target", "_blank"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 4)(9, "div", 1)(10, "div", 5)(11, "div", 6)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " This is a simple startup template based on ASP.NET Boilerplate framework and Module Zero. If you need an enterprise startup project, check ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " ASP.NET ZERO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "What is ASP.NET Boilerplate?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " ASP.NET Boilerplate is an application framework built on latest ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "ASP.NET Core");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " framework. It makes easy to use authorization, dependency injection, validation, exception handling, localization, logging, caching, background jobs and so on. It's built on already familiar tools like Entity Framework, AutoMapper, Castle Windsor... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " ASP.NET Boilerplate implements ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "NLayer architecture");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " (Domain, Application, Infrastructure and Presentation Layers) and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Domain Driven Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " (Entities, Repositories, Domain/Application Services, DTO's...). Also implements and provides a good infrastructure to implement common software development ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "best practices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "What is Module Zero?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " ASP.NET Boilerplate framework is designed to be independent of any database schema and to be as generic as possible. Therefore, It leaves some concepts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "abstract");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "optional");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " (like audit logging, permission and setting stores) which requires some ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "data store");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p")(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Module Zero ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "implements all fundamental concepts of ASP.NET Boilerplate framework such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "tenant management");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " (");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "multi-tenancy");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "), ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " role management ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "user management");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "authorization");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " (");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " permission management ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "), ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "setting management");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " language management ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "audit logging");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " and so on. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Module-Zero defines entities and implements ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "domain logic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " (domain layer) and leaves application and presentation layers to you. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Based on Microsoft ASP.NET Core Identity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Module Zero is based on Microsoft's ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "ASP.NET Core Identity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " library. It extends user and role managers and implements user and role stores using generic repositories. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "ul")(94, "li")(95, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Documentation for this template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "li")(98, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "ASP.NET Boilerplate documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Source code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " This template is developed open source on Github. You can contribute to the template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "https://github.com/aspnetboilerplate/module-zero-core-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, "About"));
    }
  },
  dependencies: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalizePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__.appModuleAnimation)()]
  },
  changeDetection: 0
});

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/auth/auth-route-guard */ 21268);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 26698);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ 11846);
/* harmony import */ var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenants/tenants.component */ 55774);
/* harmony import */ var app_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/roles/roles.component */ 92756);
/* harmony import */ var _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/change-password/change-password.component */ 72746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
    path: '',
    component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
    children: [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }, {
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent,
      data: {
        permission: 'Pages.Users'
      },
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }, {
      path: 'roles',
      component: app_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__.RolesComponent,
      data: {
        permission: 'Pages.Roles'
      },
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }, {
      path: 'tenants',
      component: _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_5__.TenantsComponent,
      data: {
        permission: 'Pages.Tenants'
      },
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }, {
      path: 'update-password',
      component: _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__.ChangePasswordComponent,
      canActivate: [_shared_auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_1__.AppRouteGuard]
    }]
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/helpers/SignalRAspNetCoreHelper */ 76422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/layout/layout-store.service */ 91077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/header.component */ 2069);
/* harmony import */ var _layout_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer.component */ 3377);
/* harmony import */ var _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/sidebar.component */ 13759);








class AppComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, renderer, _layoutStore) {
    super(injector);
    this.renderer = renderer;
    this._layoutStore = _layoutStore;
  }
  ngOnInit() {
    this.renderer.addClass(document.body, 'sidebar-mini');
    _shared_helpers_SignalRAspNetCoreHelper__WEBPACK_IMPORTED_MODULE_1__.SignalRAspNetCoreHelper.initSignalR();
    abp.event.on('abp.notifications.received', userNotification => {
      abp.notifications.showUiNotifyForUserNotification(userNotification);
      // Desktop notification
      Push.create('AbpZeroTemplate', {
        body: userNotification.notification.data.message,
        icon: abp.appPath + 'assets/app-logo-small.png',
        timeout: 6000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
    });
    this._layoutStore.sidebarExpanded.subscribe(value => {
      this.sidebarExpanded = value;
    });
  }
  toggleSidebar() {
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_2__.LayoutStoreService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 0,
  consts: [[1, "wrapper"], [1, "content-wrapper"], ["id", "sidebar-overlay", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-header")(2, "sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _layout_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _layout_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ 55696);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 8395);
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/home/home.component */ 45067);
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/about/about.component */ 26698);
/* harmony import */ var _app_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/tenants/tenants.component */ 55774);
/* harmony import */ var _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tenants/create-tenant/create-tenant-dialog.component */ 87352);
/* harmony import */ var _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tenants/edit-tenant/edit-tenant-dialog.component */ 91091);
/* harmony import */ var _app_roles_roles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/roles/roles.component */ 92756);
/* harmony import */ var _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roles/create-role/create-role-dialog.component */ 3554);
/* harmony import */ var _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roles/edit-role/edit-role-dialog.component */ 53684);
/* harmony import */ var _app_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/users/users.component */ 11846);
/* harmony import */ var _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/users/create-user/create-user-dialog.component */ 66806);
/* harmony import */ var _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/users/edit-user/edit-user-dialog.component */ 25885);
/* harmony import */ var _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/change-password/change-password.component */ 72746);
/* harmony import */ var _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/reset-password/reset-password.component */ 47571);
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/header.component */ 2069);
/* harmony import */ var _layout_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/header-left-navbar.component */ 41340);
/* harmony import */ var _layout_header_language_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/header-language-menu.component */ 14586);
/* harmony import */ var _layout_header_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/header-user-menu.component */ 59954);
/* harmony import */ var _layout_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/footer.component */ 3377);
/* harmony import */ var _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/sidebar.component */ 13759);
/* harmony import */ var _layout_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/sidebar-logo.component */ 77246);
/* harmony import */ var _layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/sidebar-user-panel.component */ 52829);
/* harmony import */ var _layout_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/sidebar-menu.component */ 9749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 22560);















// tenants



// roles



// users





// layout











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: AppModule
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientJsonpModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__.ModalModule.forChild(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_31__.BsDropdownModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_32__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_33__.TabsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_2__.ServiceProxyModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_34__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _app_about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent,
    // tenants
    _app_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_6__.TenantsComponent, _tenants_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_7__.CreateTenantDialogComponent, _tenants_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_8__.EditTenantDialogComponent,
    // roles
    _app_roles_roles_component__WEBPACK_IMPORTED_MODULE_9__.RolesComponent, _roles_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_10__.CreateRoleDialogComponent, _roles_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_11__.EditRoleDialogComponent,
    // users
    _app_users_users_component__WEBPACK_IMPORTED_MODULE_12__.UsersComponent, _app_users_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_13__.CreateUserDialogComponent, _app_users_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__.EditUserDialogComponent, _users_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__.ChangePasswordComponent, _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__.ResetPasswordDialogComponent,
    // layout
    _layout_header_component__WEBPACK_IMPORTED_MODULE_17__.HeaderComponent, _layout_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_18__.HeaderLeftNavbarComponent, _layout_header_language_menu_component__WEBPACK_IMPORTED_MODULE_19__.HeaderLanguageMenuComponent, _layout_header_user_menu_component__WEBPACK_IMPORTED_MODULE_20__.HeaderUserMenuComponent, _layout_footer_component__WEBPACK_IMPORTED_MODULE_21__.FooterComponent, _layout_sidebar_component__WEBPACK_IMPORTED_MODULE_22__.SidebarComponent, _layout_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_23__.SidebarLogoComponent, _layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_24__.SidebarUserPanelComponent, _layout_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_25__.SidebarMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientJsonpModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__.ModalModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_31__.BsDropdownModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_32__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_33__.TabsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_2__.ServiceProxyModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_34__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);




class HomeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 226,
  vars: 4,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "content", "px-2"], [1, "alert", "alert-info", "alert-dismissible"], [1, "icon", "fa", "fa-info"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-success"], [1, "inner"], [1, "icon"], [1, "fas", "fa-star"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/stargazers", "target", "_blank", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-info"], [1, "fas", "fa-users"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/graphs/contributors", "target", "_blank", 1, "small-box-footer"], [1, "small-box", "bg-warning"], [1, "fas", "fa-tools"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/network/dependents", "target", "_blank", 1, "small-box-footer"], [1, "small-box", "bg-primary"], [1, "fas", "fa-code"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/network/members", "target", "_blank", 1, "small-box-footer"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "info-box"], [1, "info-box-icon", "bg-primary", "elevation-1"], [1, "fas", "fa-plus-circle"], [1, "info-box-content"], [1, "info-box-text"], [1, "info-box-number"], [1, "info-box", "mb-3"], [1, "info-box-icon", "bg-warning", "elevation-1"], [1, "fas", "fa-exclamation-triangle"], [1, "clearfix", "hidden-md-up"], [1, "info-box-icon", "bg-info", "elevation-1"], [1, "fas", "fa-tag"], [1, "info-box-icon", "bg-success", "elevation-1"], [1, "fas", "fa-eye"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [1, "bg-light"], [1, "w-25"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/issues/5452", "target", "_blank"], [1, "badge", "badge-secondary", "mx-1"], [1, "badge", "badge-primary", "mx-1"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/issues/5391", "target", "_blank"], [1, "badge", "badge-danger", "mx-1"], [1, "badge", "badge-success", "mx-1"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/issues/5390", "target", "_blank"], [1, "badge", "badge-warning", "mx-1"], [1, "badge", "badge-info", "mx-1"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/pull/5430", "target", "_blank"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/pull/5362", "target", "_blank"], ["href", "https://github.com/aspnetboilerplate/aspnetboilerplate/pull/4924", "target", "_blank"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 4)(9, "div", 1)(10, "div", 2)(11, "div", 3)(12, "div", 5)(13, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " This is a sample Dashboard which doesn't show any server side data. However, you can develop your own dashboard inspired by this one and its source code.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "div", 7)(18, "div", 8)(19, "div", 9)(20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "8.2k+");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Stargazers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " More info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7)(30, "div", 14)(31, "div", 9)(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "140+");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Contributors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " More info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 7)(42, "div", 17)(43, "div", 9)(44, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "1.6k+");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Used / Dependents");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " More info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 7)(54, "div", 20)(55, "div", 9)(56, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "3.1k+");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Forks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " More info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 2)(66, "div", 23)(67, "div", 24)(68, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 27)(71, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Commits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " 6,350+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 23)(76, "div", 30)(77, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 27)(80, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " 170+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 23)(86, "div", 30)(87, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 27)(90, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Releases");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " 200+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 23)(95, "div", 30)(96, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 27)(99, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Watching by");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " 810+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 2)(104, "div", 38)(105, "div", 39)(106, "div", 40)(107, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Open Issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 42)(110, "table", 43)(111, "thead", 44)(112, "tr")(113, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "th", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "th", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Opened by");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "tbody")(124, "tr")(125, "td")(126, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " 5452 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Angular UI migration to AdminLTE 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "td")(131, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " module-zero-core-template ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " feature ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "11 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "iyilm4z");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "tr")(140, "td")(141, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " 5391 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " AbpCacheBase should lock the same object for sync and async ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "td")(146, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, " bug ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "span", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " pull request candidate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "26 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "acjh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "tr")(155, "td")(156, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " 5390 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "AbpCache sliding/absolute expire time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "td")(161, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, " breaking-change ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "enhancement");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "27 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "ryancyq");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 2)(170, "div", 38)(171, "div", 39)(172, "div", 40)(173, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Closed Pull Requests");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 42)(176, "table", 43)(177, "thead", 44)(178, "tr")(179, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "th", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "th", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Milestone");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Made by");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "tbody")(190, "tr")(191, "td")(192, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, " 5430 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, " Added Dynamic-Parameter-System doc to documentation menu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "v5.6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "18 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "maliming");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "tr")(203, "td")(204, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, " 5362 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, " Dynamic Parameter Module ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "v5.4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "25 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "demirmusa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "tr")(215, "td")(216, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, " 4924 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, " ASP.NET Core 3.0 Upgrade ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "v5.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Oct 15");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "ismcagdas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, "HomePage"));
    }
  },
  dependencies: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalizePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__.appModuleAnimation)()]
  },
  changeDetection: 0
});

/***/ }),

/***/ 3377:
/*!********************************************!*\
  !*** ./src/app/layout/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);



class FooterComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.currentYear = new Date().getFullYear();
    this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 5,
  consts: [[1, "main-footer"], ["href", "javascript:;"], [1, "float-right", "d-none", "d-sm-inline-block"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "CompanyWebsite");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", ctx.currentYear, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 3, "Version"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.versionText, " ");
    }
  },
  dependencies: [_shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalizePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 14586:
/*!**********************************************************!*\
  !*** ./src/app/layout/header-language-menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLanguageMenuComponent": () => (/* binding */ HeaderLanguageMenuComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 80946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);







function HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const language_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.changeLanguage(language_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("d-inline-block ", language_r2.icon, " mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", language_r2.displayName, " ");
  }
}
function HeaderLanguageMenuComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderLanguageMenuComponent_div_5_ng_container_1_a_1_Template, 3, 4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const language_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", language_r2.name != ctx_r1.currentLanguage.name);
  }
}
function HeaderLanguageMenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderLanguageMenuComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.languages);
  }
}
class HeaderLanguageMenuComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _userService) {
    super(injector);
    this._userService = _userService;
  }
  ngOnInit() {
    this.languages = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this.localization.languages, l => !l.isDisabled);
    this.currentLanguage = this.localization.currentLanguage;
  }
  changeLanguage(languageName) {
    const input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.ChangeUserLanguageDto();
    input.languageName = languageName;
    this._userService.changeLanguage(input).subscribe(() => {
      abp.utils.setCookieValue('Abp.Localization.CultureName', languageName, new Date(new Date().getTime() + 5 * 365 * 86400000),
      // 5 year
      abp.appPath);
      window.location.reload();
    });
  }
}
HeaderLanguageMenuComponent.ɵfac = function HeaderLanguageMenuComponent_Factory(t) {
  return new (t || HeaderLanguageMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.UserServiceProxy));
};
HeaderLanguageMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderLanguageMenuComponent,
  selectors: [["header-language-menu"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 4,
  consts: [["dropdown", "", 1, "nav-item", "dropdown"], ["href", "javascript:;", "dropdownToggle", "", 1, "nav-link"], [1, "d-none", "d-md-inline-block", "ml-1"], ["class", "dropdown-menu dropdown-menu-right p-0", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-right", "p-0"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", "href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"]],
  template: function HeaderLanguageMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderLanguageMenuComponent_div_5_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("d-inline-block ", ctx.currentLanguage.icon, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentLanguage.displayName, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__.BsDropdownDirective],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 41340:
/*!********************************************************!*\
  !*** ./src/app/layout/header-left-navbar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLeftNavbarComponent": () => (/* binding */ HeaderLeftNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/layout/layout-store.service */ 91077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);




const _c0 = function () {
  return ["home"];
};
const _c1 = function () {
  return ["about"];
};
class HeaderLeftNavbarComponent {
  constructor(_layoutStore) {
    this._layoutStore = _layoutStore;
  }
  ngOnInit() {
    this._layoutStore.sidebarExpanded.subscribe(value => {
      this.sidebarExpanded = value;
    });
  }
  toggleSidebar() {
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
  }
}
HeaderLeftNavbarComponent.ɵfac = function HeaderLeftNavbarComponent_Factory(t) {
  return new (t || HeaderLeftNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_0__.LayoutStoreService));
};
HeaderLeftNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderLeftNavbarComponent,
  selectors: [["header-left-navbar"]],
  decls: 12,
  vars: 10,
  consts: [[1, "navbar-nav"], [1, "nav-item"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "nav-link", 3, "routerLink"]],
  template: function HeaderLeftNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderLeftNavbarComponent_Template_a_click_2_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 4)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, "HomePage"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 6, "About"), " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalizePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 59954:
/*!******************************************************!*\
  !*** ./src/app/layout/header-user-menu.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderUserMenuComponent": () => (/* binding */ HeaderUserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/auth/app-auth.service */ 50895);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);





const _c0 = function () {
  return ["update-password"];
};
function HeaderUserMenuComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderUserMenuComponent_div_3_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "UpdatePassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, "Logout"), " ");
  }
}
class HeaderUserMenuComponent {
  constructor(_authService) {
    this._authService = _authService;
  }
  logout() {
    this._authService.logout();
  }
}
HeaderUserMenuComponent.ɵfac = function HeaderUserMenuComponent_Factory(t) {
  return new (t || HeaderUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_auth_app_auth_service__WEBPACK_IMPORTED_MODULE_0__.AppAuthService));
};
HeaderUserMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderUserMenuComponent,
  selectors: [["header-user-menu"]],
  decls: 4,
  vars: 0,
  consts: [["dropdown", "", 1, "nav-item", "dropdown", "nav-user-menu"], ["href", "javascript:;", "dropdownToggle", "", 1, "nav-link"], ["src", "assets/img/user.png", "alt", "User Image", 1, "user-image", "img-circle", "elevation-2"], ["class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-user-edit"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt"]],
  template: function HeaderUserMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderUserMenuComponent_div_3_Template, 9, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalizePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 2069:
/*!********************************************!*\
  !*** ./src/app/layout/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _header_left_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-left-navbar.component */ 41340);
/* harmony import */ var _header_language_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-language-menu.component */ 14586);
/* harmony import */ var _header_user_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-user-menu.component */ 59954);




class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 5,
  vars: 0,
  consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav", "ml-auto"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "header-left-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "header-language-menu")(4, "header-user-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_header_left_navbar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderLeftNavbarComponent, _header_language_menu_component__WEBPACK_IMPORTED_MODULE_1__.HeaderLanguageMenuComponent, _header_user_menu_component__WEBPACK_IMPORTED_MODULE_2__.HeaderUserMenuComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 77246:
/*!**************************************************!*\
  !*** ./src/app/layout/sidebar-logo.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLogoComponent": () => (/* binding */ SidebarLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["home"];
};
class SidebarLogoComponent {}
SidebarLogoComponent.ɵfac = function SidebarLogoComponent_Factory(t) {
  return new (t || SidebarLogoComponent)();
};
SidebarLogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarLogoComponent,
  selectors: [["sidebar-logo"]],
  decls: 4,
  vars: 2,
  consts: [[1, "brand-link", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", "0.8"], [1, "brand-text", "font-weight-light"]],
  template: function SidebarLogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CompanyWebsite");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 9749:
/*!**************************************************!*\
  !*** ./src/app/layout/sidebar-menu.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenuComponent": () => (/* binding */ SidebarMenuComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/layout/menu-item */ 91905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);









function SidebarMenuComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    item: a0
  };
};
function SidebarMenuComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarMenuComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, item_r3));
  }
}
function SidebarMenuComponent_ng_template_3_li_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", item_r5.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
  }
}
function SidebarMenuComponent_ng_template_3_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", item_r5.route, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
  }
}
function SidebarMenuComponent_ng_template_3_li_0_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarMenuComponent_ng_template_3_li_0_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r5.isCollapsed = !item_r5.isCollapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", item_r5.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r5.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.label, " ");
  }
}
function SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, item_r18));
  }
}
function SidebarMenuComponent_ng_template_3_li_0_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_ul_4_ng_container_1_Template, 2, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapse", item_r5.isCollapsed)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r5.children);
  }
}
function SidebarMenuComponent_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarMenuComponent_ng_template_3_li_0_a_1_Template, 4, 7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarMenuComponent_ng_template_3_li_0_a_2_Template, 4, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarMenuComponent_ng_template_3_li_0_a_3_Template, 5, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarMenuComponent_ng_template_3_li_0_ul_4_Template, 2, 3, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-open", !item_r5.isCollapsed)("has-treeview", item_r5.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.route && item_r5.route.indexOf("http") != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.route && item_r5.route.indexOf("http") == 0 && !item_r5.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r5.route && item_r5.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.children);
  }
}
function SidebarMenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarMenuComponent_ng_template_3_li_0_Template, 5, 8, "li", 5);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isMenuItemVisible(item_r5));
  }
}
class SidebarMenuComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, router) {
    super(injector);
    this.router = router;
    this.menuItemsMap = {};
    this.activatedMenuItems = [];
    this.routerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
    this.homeRoute = '/app/about';
    this.router.events.subscribe(this.routerEvents);
  }
  ngOnInit() {
    this.menuItems = this.getMenuItems();
    this.patchMenuItems(this.menuItems);
    this.routerEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      const currentUrl = event.url !== '/' ? event.url : this.homeRoute;
      const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root.children[_angular_router__WEBPACK_IMPORTED_MODULE_5__.PRIMARY_OUTLET];
      if (primaryUrlSegmentGroup) {
        this.activateMenuItems('/' + primaryUrlSegmentGroup.toString());
      }
    });
  }
  getMenuItems() {
    return [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('About'), '/app/about', 'fas fa-info-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('HomePage'), '/app/home', 'fas fa-home'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('Roles'), '/app/roles', 'fas fa-theater-masks', 'Pages.Roles'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('Tenants'), '/app/tenants', 'fas fa-building', 'Pages.Tenants'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('Users'), '/app/users', 'fas fa-users', 'Pages.Users'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem(this.l('MultiLevelMenu'), '', 'fas fa-circle', '', [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('ASP.NET Boilerplate', '', 'fas fa-dot-circle', '', [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Home', 'https://aspnetboilerplate.com?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Templates', 'https://aspnetboilerplate.com/Templates?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Samples', 'https://aspnetboilerplate.com/Samples?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Documents', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl', 'far fa-circle')]), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('ASP.NET Zero', '', 'fas fa-dot-circle', '', [new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Home', 'https://aspnetzero.com?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Features', 'https://aspnetzero.com/Features?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Pricing', 'https://aspnetzero.com/Pricing?ref=abptmpl#pricing', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Faq', 'https://aspnetzero.com/Faq?ref=abptmpl', 'far fa-circle'), new _shared_layout_menu_item__WEBPACK_IMPORTED_MODULE_1__.MenuItem('Documents', 'https://aspnetzero.com/Documents?ref=abptmpl', 'far fa-circle')])])];
  }
  patchMenuItems(items, parentId) {
    items.forEach((item, index) => {
      item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
      if (parentId) {
        item.parentId = parentId;
      }
      if (parentId || item.children) {
        this.menuItemsMap[item.id] = item;
      }
      if (item.children) {
        this.patchMenuItems(item.children, item.id);
      }
    });
  }
  activateMenuItems(url) {
    this.deactivateMenuItems(this.menuItems);
    this.activatedMenuItems = [];
    const foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
    foundedItems.forEach(item => {
      this.activateMenuItem(item);
    });
  }
  deactivateMenuItems(items) {
    items.forEach(item => {
      item.isActive = false;
      item.isCollapsed = true;
      if (item.children) {
        this.deactivateMenuItems(item.children);
      }
    });
  }
  findMenuItemsByUrl(url, items, foundedItems = []) {
    items.forEach(item => {
      if (item.route === url) {
        foundedItems.push(item);
      } else if (item.children) {
        this.findMenuItemsByUrl(url, item.children, foundedItems);
      }
    });
    return foundedItems;
  }
  activateMenuItem(item) {
    item.isActive = true;
    if (item.children) {
      item.isCollapsed = false;
    }
    this.activatedMenuItems.push(item);
    if (item.parentId) {
      this.activateMenuItem(this.menuItemsMap[item.parentId]);
    }
  }
  isMenuItemVisible(item) {
    if (!item.permissionName) {
      return true;
    }
    return this.permission.isGranted(item.permissionName);
  }
}
SidebarMenuComponent.ɵfac = function SidebarMenuComponent_Factory(t) {
  return new (t || SidebarMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
SidebarMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SidebarMenuComponent,
  selectors: [["sidebar-menu"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 1,
  consts: [[1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column", "nav-flat"], [4, "ngFor", "ngForOf"], ["sidebarInner", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "nav-item", 3, "menu-open", "has-treeview", 4, "ngIf"], [1, "nav-item"], ["class", "nav-link", 3, "routerLink", "active", 4, "ngIf"], ["class", "nav-link", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-link", "href", "javascript:;", 3, "active", "click", 4, "ngIf"], ["class", "nav nav-treeview", 3, "collapse", "isAnimated", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], ["target", "_blank", 1, "nav-link", 3, "href"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "right", "fas", "fa-angle-left"], [1, "nav", "nav-treeview", 3, "collapse", "isAnimated"]],
  template: function SidebarMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarMenuComponent_ng_container_2_Template, 2, 4, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarMenuComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 52829:
/*!********************************************************!*\
  !*** ./src/app/layout/sidebar-user-panel.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarUserPanelComponent": () => (/* binding */ SidebarUserPanelComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SidebarUserPanelComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.shownLoginName = '';
  }
  ngOnInit() {
    this.shownLoginName = this.appSession.getShownLoginName();
  }
}
SidebarUserPanelComponent.ɵfac = function SidebarUserPanelComponent_Factory(t) {
  return new (t || SidebarUserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
SidebarUserPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SidebarUserPanelComponent,
  selectors: [["sidebar-user-panel"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 1,
  consts: [[1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "image"], ["src", "assets/img/user.png", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "info"], ["href", "javascript:;", 1, "d-block"]],
  template: function SidebarUserPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.shownLoginName);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 13759:
/*!*********************************************!*\
  !*** ./src/app/layout/sidebar.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/layout/layout-store.service */ 91077);
/* harmony import */ var _sidebar_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-logo.component */ 77246);
/* harmony import */ var _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-user-panel.component */ 52829);
/* harmony import */ var _sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-menu.component */ 9749);





class SidebarComponent {
  constructor(renderer, _layoutStore) {
    this.renderer = renderer;
    this._layoutStore = _layoutStore;
  }
  ngOnInit() {
    this._layoutStore.sidebarExpanded.subscribe(value => {
      this.sidebarExpanded = value;
      this.toggleSidebar();
    });
  }
  toggleSidebar() {
    if (this.sidebarExpanded) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  }
  showSidebar() {
    this.renderer.removeClass(document.body, 'sidebar-collapse');
    this.renderer.addClass(document.body, 'sidebar-open');
  }
  hideSidebar() {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-collapse');
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_layout_layout_store_service__WEBPACK_IMPORTED_MODULE_0__.LayoutStoreService));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["sidebar"]],
  decls: 5,
  vars: 0,
  consts: [[1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], [1, "sidebar"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "aside", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "sidebar-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "sidebar-user-panel")(4, "sidebar-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_sidebar_logo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLogoComponent, _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_2__.SidebarUserPanelComponent, _sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__.SidebarMenuComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 3554:
/*!*******************************************************************!*\
  !*** ./src/app/roles/create-role/create-role-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRoleDialogComponent": () => (/* binding */ CreateRoleDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 90112);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 49724);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);














function CreateRoleDialogComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateRoleDialogComponent_ng_container_36_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const permission_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onPermissionChange(permission_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "permission_" + i_r7)("checked", ctx_r5.isPermissionChecked(permission_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "permission_" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", permission_r6.displayName, " ");
  }
}
class CreateRoleDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _roleService, bsModalRef) {
    super(injector);
    this._roleService = _roleService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RoleDto();
    this.permissions = [];
    this.checkedPermissionsMap = {};
    this.defaultPermissionCheckedStatus = true;
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this._roleService.getAllPermissions().subscribe(result => {
      this.permissions = result.items;
      this.setInitialPermissionsStatus();
    });
  }
  setInitialPermissionsStatus() {
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.permissions, item => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(item.name);
    });
  }
  isPermissionChecked(permissionName) {
    // just return default permission checked status
    // it's better to use a setting
    return this.defaultPermissionCheckedStatus;
  }
  onPermissionChange(permission, $event) {
    this.checkedPermissionsMap[permission.name] = $event.target.checked;
  }
  getCheckedPermissions() {
    const permissions = [];
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.checkedPermissionsMap, function (value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }
  save() {
    this.saving = true;
    const role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.CreateRoleDto();
    role.init(this.role);
    role.grantedPermissions = this.getCheckedPermissions();
    this._roleService.create(role).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
CreateRoleDialogComponent.ɵfac = function CreateRoleDialogComponent_Factory(t) {
  return new (t || CreateRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RoleServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalRef));
};
CreateRoleDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CreateRoleDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 38,
  vars: 28,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createRoleForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "displayName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "displayName", "id", "displayName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["displayNameModel", "ngModel", "displayNameEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
  template: function CreateRoleDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CreateRoleDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function CreateRoleDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "tabset")(6, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.role.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7)(22, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.role.displayName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14)(27, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 7)(31, "textarea", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateRoleDialogComponent_Template_textarea_ngModelChange_31_listener($event) {
        return ctx.role.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CreateRoleDialogComponent_ng_container_36_Template, 6, 4, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "abp-modal-footer", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function CreateRoleDialogComponent_Template_abp_modal_footer_onCancelClick_37_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 16, "CreateNewRole"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 18, "Details"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 20, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 22, "DisplayName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 24, "RoleDescription"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 26, "Permissions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.permissions);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__.TabsetComponent, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 53684:
/*!***************************************************************!*\
  !*** ./src/app/roles/edit-role/edit-role-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRoleDialogComponent": () => (/* binding */ EditRoleDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 90112);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 63795);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 49724);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);














function EditRoleDialogComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function EditRoleDialogComponent_ng_container_36_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const permission_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onPermissionChange(permission_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "permission_" + i_r7)("checked", ctx_r5.isPermissionChecked(permission_r6.name))("disabled", ctx_r5.role.isStatic);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "permission_" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", permission_r6.displayName, " ");
  }
}
class EditRoleDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _roleService, bsModalRef) {
    super(injector);
    this._roleService = _roleService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RoleEditDto();
    this.checkedPermissionsMap = {};
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this._roleService.getRoleForEdit(this.id).subscribe(result => {
      this.role = result.role;
      this.permissions = result.permissions;
      this.grantedPermissionNames = result.grantedPermissionNames;
      this.setInitialPermissionsStatus();
    });
  }
  setInitialPermissionsStatus() {
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.permissions, item => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(item.name);
    });
  }
  isPermissionChecked(permissionName) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.grantedPermissionNames, permissionName);
  }
  onPermissionChange(permission, $event) {
    this.checkedPermissionsMap[permission.name] = $event.target.checked;
  }
  getCheckedPermissions() {
    const permissions = [];
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.checkedPermissionsMap, function (value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }
  save() {
    this.saving = true;
    const role = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RoleDto();
    role.init(this.role);
    role.grantedPermissions = this.getCheckedPermissions();
    this._roleService.update(role).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
EditRoleDialogComponent.ɵfac = function EditRoleDialogComponent_Factory(t) {
  return new (t || EditRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.RoleServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalRef));
};
EditRoleDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditRoleDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 38,
  vars: 28,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editRoleForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "displayName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "displayName", "id", "displayName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["displayNameModel", "ngModel", "displayNameEl", ""], [1, "form-group", "row", "mb-0"], ["for", "description", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "disabled", "change"], [1, "custom-control-label", 3, "for"]],
  template: function EditRoleDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditRoleDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function EditRoleDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "tabset")(6, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.role.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7)(22, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.role.displayName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14)(27, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 7)(31, "textarea", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditRoleDialogComponent_Template_textarea_ngModelChange_31_listener($event) {
        return ctx.role.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EditRoleDialogComponent_ng_container_36_Template, 6, 5, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "abp-modal-footer", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function EditRoleDialogComponent_Template_abp_modal_footer_onCancelClick_37_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 16, "EditRole"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 18, "Details"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 20, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 22, "DisplayName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 24, "RoleDescription"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.role.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 26, "Permissions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.permissions);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabsetComponent, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 92756:
/*!******************************************!*\
  !*** ./src/app/roles/roles.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/paged-listing-component-base */ 3250);
/* harmony import */ var _create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-role/create-role-dialog.component */ 3554);
/* harmony import */ var _edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-role/edit-role-dialog.component */ 53684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/pagination/abp-pagination-controls.component */ 4798);
/* harmony import */ var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/busy.directive */ 72481);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 92302);














function RolesComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td")(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RolesComponent_tr_41_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const role_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.editRole(role_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RolesComponent_tr_41_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const role_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.delete(role_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](role_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](role_r1.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 4, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 6, "Delete"), " ");
  }
}
const _c0 = function (a1, a2, a3) {
  return {
    id: "server",
    itemsPerPage: a1,
    currentPage: a2,
    totalItems: a3
  };
};
class PagedRolesRequestDto extends _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedRequestDto {}
class RolesComponent extends _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedListingComponentBase {
  constructor(injector, _rolesService, _modalService) {
    super(injector);
    this._rolesService = _rolesService;
    this._modalService = _modalService;
    this.roles = [];
    this.keyword = '';
  }
  list(request, pageNumber, finishedCallback) {
    request.keyword = this.keyword;
    this._rolesService.getAll(request.keyword, request.skipCount, request.maxResultCount).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      finishedCallback();
    })).subscribe(result => {
      this.roles = result.items;
      this.showPaging(result, pageNumber);
    });
  }
  delete(role) {
    abp.message.confirm(this.l('RoleDeleteWarningMessage', role.displayName), undefined, result => {
      if (result) {
        this._rolesService.delete(role.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
          abp.notify.success(this.l('SuccessfullyDeleted'));
          this.refresh();
        })).subscribe(() => {});
      }
    });
  }
  createRole() {
    this.showCreateOrEditRoleDialog();
  }
  editRole(role) {
    this.showCreateOrEditRoleDialog(role.id);
  }
  showCreateOrEditRoleDialog(id) {
    let createOrEditRoleDialog;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(_create_role_create_role_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateRoleDialogComponent, {
        class: 'modal-lg'
      });
    } else {
      createOrEditRoleDialog = this._modalService.show(_edit_role_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EditRoleDialogComponent, {
        class: 'modal-lg',
        initialState: {
          id: id
        }
      });
    }
    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) {
  return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__.RoleServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService));
};
RolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: RolesComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 55,
  vars: 33,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", 3, "busy"], [1, "bg-light"], [2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "table-card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"]],
  template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RolesComponent_Template_a_click_9_listener() {
        return ctx.createRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "section", 7)(14, "div", 1)(15, "div", 8)(16, "div", 9)(17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_22_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RolesComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.keyword = $event;
      })("keyup.enter", function RolesComponent_Template_input_keyup_enter_24_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "table", 18)(29, "thead", 19)(30, "tr")(31, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, RolesComponent_tr_41_Template, 14, 8, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 22)(44, "div", 2)(45, "div", 23)(46, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_46_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 26)(49, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 28)(53, "div", 29)(54, "abp-pagination-controls", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function RolesComponent_Template_abp_pagination_controls_pageChange_54_listener($event) {
        return ctx.getDataPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 11, "Roles"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 13, "Create"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 15, "SearchWithThreeDot"))("ngModel", ctx.keyword);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("busy", ctx.isTableLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 17, "RoleName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 19, "DisplayName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 21, "Actions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](42, 23, ctx.roles, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](29, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](51, 26, "TotalRecordsCount", ctx.totalItems), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__.AbpPaginationControlsComponent, _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_6__.BusyDirective, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__.LocalizePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginatePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__.appModuleAnimation)()]
  }
});

/***/ }),

/***/ 87352:
/*!*************************************************************************!*\
  !*** ./src/app/tenants/create-tenant/create-tenant-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTenantDialogComponent": () => (/* binding */ CreateTenantDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);











class CreateTenantDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _tenantService, bsModalRef) {
    super(injector);
    this._tenantService = _tenantService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.CreateTenantDto();
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this.tenant.isActive = true;
  }
  save() {
    this.saving = true;
    this._tenantService.create(this.tenant).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
CreateTenantDialogComponent.ɵfac = function CreateTenantDialogComponent_Factory(t) {
  return new (t || CreateTenantDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.TenantServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalRef));
};
CreateTenantDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CreateTenantDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 50,
  vars: 35,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createTenantForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "tenancyName", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "tenancyName", "id", "tenancyName", "minlength", "2", "maxlength", "64", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tenancyNameModel", "ngModel", "tenancyNameEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "maxlength", "128", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "form-group", "row"], ["for", "connectionString", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "connectionString", "id", "connectionString", "maxlength", "1024", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "adminEmailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "adminEmailAddress", "id", "adminEmailAddress", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", "maxlength", "256", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["adminEmailAddressModel", "ngModel", "adminEmailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [1, "text-center", "text-info", "mb-0"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
  template: function CreateTenantDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CreateTenantDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function CreateTenantDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.tenant.tenancyName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "abp-validation-summary", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 4)(15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 6)(19, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.tenant.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "abp-validation-summary", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 6)(28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.tenant.connectionString = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 4)(30, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 6)(34, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_34_listener($event) {
        return ctx.tenant.adminEmailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "abp-validation-summary", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 19)(39, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 6)(43, "div", 21)(44, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateTenantDialogComponent_Template_input_ngModelChange_44_listener($event) {
        return ctx.tenant.isActive = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "abp-modal-footer", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function CreateTenantDialogComponent_Template_abp_modal_footer_onCancelClick_49_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 20, "CreateNewTenant"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 22, "TenancyName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.tenancyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 24, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 26, "DatabaseConnectionString"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.connectionString);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 28, "AdminEmailAddress"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.adminEmailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r5)("controlEl", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 30, "IsActive"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](48, 32, "DefaultPasswordIs", "123qwe"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 91091:
/*!*********************************************************************!*\
  !*** ./src/app/tenants/edit-tenant/edit-tenant-dialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTenantDialogComponent": () => (/* binding */ EditTenantDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);











class EditTenantDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _tenantService, bsModalRef) {
    super(injector);
    this._tenantService = _tenantService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.tenant = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.TenantDto();
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this._tenantService.get(this.id).subscribe(result => {
      this.tenant = result;
    });
  }
  save() {
    this.saving = true;
    this._tenantService.update(this.tenant).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
EditTenantDialogComponent.ɵfac = function EditTenantDialogComponent_Factory(t) {
  return new (t || EditTenantDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.TenantServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalRef));
};
EditTenantDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditTenantDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 32,
  vars: 21,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editTenantForm", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "tenancyName", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "tenancyName", "id", "tenancyName", "minlength", "2", "maxlength", "64", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tenancyNameModel", "ngModel", "tenancyNameEl", ""], [3, "control", "controlEl"], ["for", "name", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "name", "id", "name", "maxlength", "128", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
  template: function EditTenantDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditTenantDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function EditTenantDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.tenant.tenancyName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "abp-validation-summary", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 4)(15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 6)(19, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.tenant.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "abp-validation-summary", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 6)(28, "div", 15)(29, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditTenantDialogComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.tenant.isActive = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "abp-modal-footer", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function EditTenantDialogComponent_Template_abp_modal_footer_onCancelClick_31_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 13, "EditTenant"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 15, "TenancyName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.tenancyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 17, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 19, "IsActive"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.tenant.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 55774:
/*!**********************************************!*\
  !*** ./src/app/tenants/tenants.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantsComponent": () => (/* binding */ TenantsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/paged-listing-component-base */ 3250);
/* harmony import */ var _create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-tenant/create-tenant-dialog.component */ 87352);
/* harmony import */ var _edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-tenant/edit-tenant-dialog.component */ 91091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/pagination/abp-pagination-controls.component */ 4798);
/* harmony import */ var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/busy.directive */ 72481);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 92302);














function TenantsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35)(1, "div", 20)(2, "form", 36)(3, "div", 2)(4, "div", 10)(5, "div", 37)(6, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 39)(10, "div", 40)(11, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_29_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 43)(16, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_29_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 40)(21, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TenantsComponent_div_29_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 48)(26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_div_29_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.getDataPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_div_29_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, "IsActive"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 14, "All"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 16, "Yes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 18, "No"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 20, "Search"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 22, "Clear"), " ");
  }
}
function TenantsComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td")(6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "input", 51)(8, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td")(10, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_tr_48_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const tenant_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.editTenant(tenant_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_tr_48_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const tenant_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.delete(tenant_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tenant_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tenant_r8.tenancyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tenant_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", tenant_r8.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 5, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 7, "Delete"), " ");
  }
}
const _c0 = function (a1, a2, a3) {
  return {
    id: "server",
    itemsPerPage: a1,
    currentPage: a2,
    totalItems: a3
  };
};
class PagedTenantsRequestDto extends _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedRequestDto {}
class TenantsComponent extends _shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedListingComponentBase {
  constructor(injector, _tenantService, _modalService) {
    super(injector);
    this._tenantService = _tenantService;
    this._modalService = _modalService;
    this.tenants = [];
    this.keyword = '';
    this.advancedFiltersVisible = false;
  }
  list(request, pageNumber, finishedCallback) {
    request.keyword = this.keyword;
    request.isActive = this.isActive;
    this._tenantService.getAll(request.keyword, request.isActive, request.skipCount, request.maxResultCount).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      finishedCallback();
    })).subscribe(result => {
      this.tenants = result.items;
      this.showPaging(result, pageNumber);
    });
  }
  delete(tenant) {
    abp.message.confirm(this.l('TenantDeleteWarningMessage', tenant.name), undefined, result => {
      if (result) {
        this._tenantService.delete(tenant.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
          abp.notify.success(this.l('SuccessfullyDeleted'));
          this.refresh();
        })).subscribe(() => {});
      }
    });
  }
  createTenant() {
    this.showCreateOrEditTenantDialog();
  }
  editTenant(tenant) {
    this.showCreateOrEditTenantDialog(tenant.id);
  }
  showCreateOrEditTenantDialog(id) {
    let createOrEditTenantDialog;
    if (!id) {
      createOrEditTenantDialog = this._modalService.show(_create_tenant_create_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateTenantDialogComponent, {
        class: 'modal-lg'
      });
    } else {
      createOrEditTenantDialog = this._modalService.show(_edit_tenant_edit_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EditTenantDialogComponent, {
        class: 'modal-lg',
        initialState: {
          id: id
        }
      });
    }
    createOrEditTenantDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
  clearFilters() {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
TenantsComponent.ɵfac = function TenantsComponent_Factory(t) {
  return new (t || TenantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__.TenantServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService));
};
TenantsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TenantsComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 62,
  vars: 41,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fas"], ["class", "card mb-0 mt-1", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", 3, "busy"], [1, "bg-light"], [2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "table-card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [1, "card", "mb-0", "mt-1"], [1, "form-horizontal"], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "col-md-9", "pt-2"], [1, "custom-control", "custom-radio", "d-inline"], ["type", "radio", "id", "isActiveAll", "name", "isActive", "checked", "", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveAll", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "d-inline", "mx-3"], ["type", "radio", "id", "isActiveActive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveActive", 1, "custom-control-label"], ["type", "radio", "id", "isActivePassive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActivePassive", 1, "custom-control-label"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-default", "float-right", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "disabled", "", 1, "custom-control-input", 3, "checked"], [1, "custom-control-label"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"]],
  template: function TenantsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_Template_a_click_9_listener() {
        return ctx.createTenant();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "section", 7)(14, "div", 1)(15, "div", 8)(16, "div", 9)(17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_22_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TenantsComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.keyword = $event;
      })("keyup.enter", function TenantsComponent_Template_input_keyup_enter_24_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_27_listener() {
        return ctx.advancedFiltersVisible = !ctx.advancedFiltersVisible;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, TenantsComponent_div_29_Template, 32, 24, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "table", 22)(33, "thead", 23)(34, "tr")(35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, TenantsComponent_tr_48_Template, 18, 9, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 26)(51, "div", 2)(52, "div", 27)(53, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TenantsComponent_Template_button_click_53_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 30)(56, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 32)(60, "div", 33)(61, "abp-pagination-controls", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function TenantsComponent_Template_abp_pagination_controls_pageChange_61_listener($event) {
        return ctx.getDataPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 17, "Tenants"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 19, "Create"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 21, "SearchWithThreeDot"))("ngModel", ctx.keyword);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fa-angle-up", ctx.advancedFiltersVisible)("fa-angle-down", !ctx.advancedFiltersVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.advancedFiltersVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("busy", ctx.isTableLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 23, "TenancyName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 25, "Name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 27, "IsActive"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 29, "Actions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](49, 31, ctx.tenants, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](37, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](58, 34, "TotalRecordsCount", ctx.totalItems), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_5__.AbpPaginationControlsComponent, _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_6__.BusyDirective, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_7__.LocalizePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginatePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__.appModuleAnimation)()]
  }
});

/***/ }),

/***/ 72746:
/*!********************************************************************!*\
  !*** ./src/app/users/change-password/change-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/equal-validator.directive */ 92591);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);











class ChangePasswordComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__.AppComponentBase {
  constructor(injector, userServiceProxy, router) {
    super(injector);
    this.userServiceProxy = userServiceProxy;
    this.router = router;
    this.saving = false;
    this.changePasswordDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordDto();
    this.newPasswordValidationErrors = [{
      name: 'pattern',
      localizationKey: 'PasswordsMustBeAtLeast8CharactersContainLowercaseUppercaseNumber'
    }];
    this.confirmNewPasswordValidationErrors = [{
      name: 'validateEqual',
      localizationKey: 'PasswordsDoNotMatch'
    }];
  }
  changePassword() {
    this.saving = true;
    this.userServiceProxy.changePassword(this.changePasswordDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.saving = false;
    })).subscribe(success => {
      if (success) {
        abp.message.success('Password changed successfully', 'Success');
        this.router.navigate(['/']);
      }
    });
  }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
  return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__.UserServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
ChangePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ChangePasswordComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 46,
  vars: 27,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "content", "px-2"], [1, "card"], ["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["changePasswordForm", "ngForm"], [1, "card-body"], [1, "modal-body"], [1, "form-group", "row", "required"], ["for", "currentPassword", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "password", "name", "currentPassword", "id", "currentPassword", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["currentPasswordModel", "ngModel", "currentPasswordEl", ""], [3, "control", "controlEl"], ["for", "newPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "newPassword", "id", "newPassword", "required", "", "minlength", "2", "maxlength", "32", "validateEqual", "confirmNewPassword", "reverse", "true", "pattern", "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newPasswordModel", "ngModel", "newPasswordEl", ""], [3, "control", "controlEl", "customValidationErrors"], ["for", "confirmNewPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "confirmNewPassword", "id", "confirmNewPassword", "required", "", "minlength", "2", "maxlength", "32", "validateEqual", "newPassword", "reverse", "false", "ngModel", "", 1, "form-control"], ["confirmNewPasswordModel", "ngModel", "confirmNewPasswordEl", ""], [1, "card-footer", "justify-content-between"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
  template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "section", 4)(9, "div", 1)(10, "div", 5)(11, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() {
        return ctx.changePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12)(20, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.changePasswordDto.currentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "abp-validation-summary", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 10)(25, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 12)(29, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.changePasswordDto.newPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "abp-validation-summary", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 10)(34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 21, 22)(41, "abp-validation-summary", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 23)(43, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](21);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](31);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 17, "UpdatePassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 19, "CurrentPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.changePasswordDto.currentPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 21, "NewPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.changePasswordDto.newPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r3)("controlEl", _r4)("customValidationErrors", ctx.newPasswordValidationErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 23, "ConfirmNewPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r5)("controlEl", _r6)("customValidationErrors", ctx.confirmNewPasswordValidationErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.saving);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 25, "Save"), " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_3__.AbpValidationSummaryComponent, _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__.EqualValidator, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__.appModuleAnimation)()]
  }
});

/***/ }),

/***/ 66806:
/*!*******************************************************************!*\
  !*** ./src/app/users/create-user/create-user-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserDialogComponent": () => (/* binding */ CreateUserDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 90112);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 49724);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/equal-validator.directive */ 92591);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);















function CreateUserDialogComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34)(2, "div", 29)(3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateUserDialogComponent_ng_container_73_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const role_r14 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.onRoleChange(role_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const role_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "role_" + i_r15)("checked", ctx_r13.isRoleChecked(role_r14.normalizedName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", "role_" + i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", role_r14.name, " ");
  }
}
class CreateUserDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _userService, bsModalRef) {
    super(injector);
    this._userService = _userService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.CreateUserDto();
    this.roles = [];
    this.checkedRolesMap = {};
    this.defaultRoleCheckedStatus = false;
    this.passwordValidationErrors = [{
      name: 'pattern',
      localizationKey: 'PasswordsMustBeAtLeast8CharactersContainLowercaseUppercaseNumber'
    }];
    this.confirmPasswordValidationErrors = [{
      name: 'validateEqual',
      localizationKey: 'PasswordsDoNotMatch'
    }];
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.user.isActive = true;
    this._userService.getRoles().subscribe(result => {
      this.roles = result.items;
      this.setInitialRolesStatus();
    });
  }
  setInitialRolesStatus() {
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.roles, item => {
      this.checkedRolesMap[item.normalizedName] = this.isRoleChecked(item.normalizedName);
    });
  }
  isRoleChecked(normalizedName) {
    // just return default role checked status
    // it's better to use a setting
    return this.defaultRoleCheckedStatus;
  }
  onRoleChange(role, $event) {
    this.checkedRolesMap[role.normalizedName] = $event.target.checked;
  }
  getCheckedRoles() {
    const roles = [];
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.checkedRolesMap, function (value, key) {
      if (value) {
        roles.push(key);
      }
    });
    return roles;
  }
  save() {
    this.saving = true;
    this.user.roleNames = this.getCheckedRoles();
    this._userService.create(this.user).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
CreateUserDialogComponent.ɵfac = function CreateUserDialogComponent_Factory(t) {
  return new (t || CreateUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.UserServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalRef));
};
CreateUserDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CreateUserDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 75,
  vars: 53,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["createUserModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "surname", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "surname", "id", "surname", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surnameModel", "ngModel", "surnameEl", ""], ["for", "userName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "userName", "id", "userName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userNameModel", "ngModel", "userNameEl", ""], ["for", "password", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "password", "id", "password", "required", "", "maxlength", "32", "validateEqual", "confirmPassword", "reverse", "true", "pattern", "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordModel", "ngModel", "passwordEl", ""], [3, "control", "controlEl", "customValidationErrors"], ["for", "confirmPassword", 1, "col-md-3", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "required", "", "maxlength", "32", "validateEqual", "password", "reverse", "false", "ngModel", "", 1, "form-control"], ["confirmPasswordModel", "ngModel", "confirmPasswordEl", ""], ["for", "emailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "emailAddress", "id", "emailAddress", "required", "", "maxlength", "256", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailAddressModel", "ngModel", "emailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
  template: function CreateUserDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CreateUserDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCloseClick", function CreateUserDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "tabset")(6, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7)(13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.user.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 5)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 7)(22, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.user.surname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 5)(27, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7)(31, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.user.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 5)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 7)(40, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "abp-validation-summary", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 5)(45, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 22, 23)(52, "abp-validation-summary", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 5)(54, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 7)(58, "input", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_58_listener($event) {
        return ctx.user.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 27)(63, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 7)(67, "div", 29)(68, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateUserDialogComponent_Template_input_ngModelChange_68_listener($event) {
        return ctx.user.isActive = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](71, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, CreateUserDialogComponent_ng_container_73_Template, 6, 4, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "abp-modal-footer", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCancelClick", function CreateUserDialogComponent_Template_abp_modal_footer_onCancelClick_74_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](33);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](59);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 33, "CreateNewUser"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 35, "UserDetails"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 37, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 39, "Surname"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.surname);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 41, "UserName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r5)("controlEl", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 43, "Password"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r7)("controlEl", _r8)("customValidationErrors", ctx.passwordValidationErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 45, "ConfirmPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r9)("controlEl", _r10)("customValidationErrors", ctx.confirmPasswordValidationErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 47, "EmailAddress"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", _r11)("controlEl", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 49, "IsActive"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](71, 51, "UserRoles"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabsetComponent, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__.EqualValidator, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_6__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 25885:
/*!***************************************************************!*\
  !*** ./src/app/users/edit-user/edit-user-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserDialogComponent": () => (/* binding */ EditUserDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 90112);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 63795);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 49724);
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);














function EditUserDialogComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 27)(2, "div", 22)(3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function EditUserDialogComponent_ng_container_55_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const role_r10 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.onRoleChange(role_r10, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "role_" + i_r11)("checked", ctx_r9.isRoleChecked(role_r10.normalizedName));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "role_" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", role_r10.name, " ");
  }
}
class EditUserDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _userService, bsModalRef) {
    super(injector);
    this._userService = _userService;
    this.bsModalRef = bsModalRef;
    this.saving = false;
    this.user = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.UserDto();
    this.roles = [];
    this.checkedRolesMap = {};
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this._userService.get(this.id).subscribe(result => {
      this.user = result;
      this._userService.getRoles().subscribe(result2 => {
        this.roles = result2.items;
        this.setInitialRolesStatus();
      });
    });
  }
  setInitialRolesStatus() {
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(this.roles, item => {
      this.checkedRolesMap[item.normalizedName] = this.isRoleChecked(item.normalizedName);
    });
  }
  isRoleChecked(normalizedName) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.user.roleNames, normalizedName);
  }
  onRoleChange(role, $event) {
    this.checkedRolesMap[role.normalizedName] = $event.target.checked;
  }
  getCheckedRoles() {
    const roles = [];
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.checkedRolesMap, function (value, key) {
      if (value) {
        roles.push(key);
      }
    });
    return roles;
  }
  save() {
    this.saving = true;
    this.user.roleNames = this.getCheckedRoles();
    this._userService.update(this.user).subscribe(() => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    }, () => {
      this.saving = false;
    });
  }
}
EditUserDialogComponent.ɵfac = function EditUserDialogComponent_Factory(t) {
  return new (t || EditUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.UserServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalRef));
};
EditUserDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditUserDialogComponent,
  selectors: [["ng-component"]],
  outputs: {
    onSave: "onSave"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 57,
  vars: 40,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["editUserModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "pt-3", "px-2", 3, "heading"], [1, "form-group", "row", "required"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "name", "name", "id", "name", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel", "nameEl", ""], [3, "control", "controlEl"], ["for", "surname", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "surname", "id", "surname", "required", "", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surnameModel", "ngModel", "surnameEl", ""], ["for", "userName", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "userName", "id", "userName", "required", "", "minlength", "2", "maxlength", "32", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userNameModel", "ngModel", "userNameEl", ""], ["for", "emailAddress", 1, "col-md-3", "col-form-label"], ["type", "email", "name", "emailAddress", "id", "emailAddress", "required", "", "maxlength", "256", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{1,})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["emailAddressModel", "ngModel", "emailAddressEl", ""], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "isActive", 1, "custom-control-label", "mt-2"], [4, "ngFor", "ngForOf"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"], [1, "col-md-6"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]],
  template: function EditUserDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditUserDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function EditUserDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "tabset")(6, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.user.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7)(22, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.user.surname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 5)(27, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 7)(31, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.user.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 5)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 7)(40, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.user.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "abp-validation-summary", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 20)(45, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 7)(49, "div", 22)(50, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditUserDialogComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.user.isActive = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](53, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, EditUserDialogComponent_ng_container_55_Template, 6, 4, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "abp-modal-footer", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function EditUserDialogComponent_Template_abp_modal_footer_onCancelClick_56_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 24, "EditUser"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 26, "UserDetails"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 28, "Name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 30, "Surname"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.user.surname);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r3)("controlEl", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 32, "UserName"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.user.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r5)("controlEl", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 34, "EmailAddress"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.user.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r7)("controlEl", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 36, "IsActive"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.user.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](53, 38, "UserRoles"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.saving)("saveDisabled", !_r0.form.valid || ctx.saving);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_13__.TabsetComponent, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 47571:
/*!******************************************************************!*\
  !*** ./src/app/users/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordDialogComponent": () => (/* binding */ ResetPasswordDialogComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/app-component-base */ 16772);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/validation/abp-validation.summary.component */ 43421);
/* harmony import */ var _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-header.component */ 20219);
/* harmony import */ var _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/abp-modal-footer.component */ 74307);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);










class ResetPasswordDialogComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector, _userService, bsModalRef) {
    super(injector);
    this._userService = _userService;
    this.bsModalRef = bsModalRef;
    this.isLoading = false;
  }
  ngOnInit() {
    this.isLoading = true;
    this.resetPasswordDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordDto();
    this.resetPasswordDto.userId = this.id;
    this.resetPasswordDto.newPassword = Math.random().toString(36).substr(2, 10);
    this.isLoading = false;
  }
  resetPassword() {
    this.isLoading = true;
    this._userService.resetPassword(this.resetPasswordDto).subscribe(() => {
      this.notify.info('Password Reset');
      this.bsModalRef.hide();
    }, () => {
      this.isLoading = false;
    });
  }
}
ResetPasswordDialogComponent.ɵfac = function ResetPasswordDialogComponent_Factory(t) {
  return new (t || ResetPasswordDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__.UserServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalRef));
};
ResetPasswordDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ResetPasswordDialogComponent,
  selectors: [["app-reset-password"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 31,
  vars: 21,
  consts: [["autocomplete", "off", 1, "form-horizontal", 3, "ngSubmit"], ["resetPasswordModal", "ngForm"], [3, "title", "onCloseClick"], [1, "modal-body"], [1, "row"], [1, "col-md-9", "offset-md-3"], [1, "text-info", "mb-1"], [1, "form-group", "row", "required"], ["for", "adminPassword", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "password", "id", "adminPassword", "name", "adminPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["adminPasswordModel", "ngModel", "adminPasswordEl", ""], [3, "control", "controlEl"], [1, "form-group", "row"], ["for", "newPassword", 1, "col-md-3", "col-form-label"], ["type", "text", "name", "NewPassword", "id", "newPassword", "readonly", "", 1, "form-control", 3, "ngModel"], [3, "cancelDisabled", "saveDisabled", "onCancelClick"]],
  template: function ResetPasswordDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ResetPasswordDialogComponent_Template_form_ngSubmit_0_listener() {
        return ctx.resetPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "abp-modal-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCloseClick", function ResetPasswordDialogComponent_Template_abp_modal_header_onCloseClick_2_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7)(11, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ResetPasswordDialogComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.resetPasswordDto.adminPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "abp-validation-summary", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 4)(20, "div", 5)(21, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13)(25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "abp-modal-footer", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCancelClick", function ResetPasswordDialogComponent_Template_abp_modal_footer_onCancelClick_30_listener() {
        return ctx.bsModalRef.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 11, "ResetPassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 13, "ResetPasswordStepOneInfo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 15, "AdminPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.resetPasswordDto.adminPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", _r1)("controlEl", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 17, "ResetPasswordStepTwoInfo"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 19, "NewPassword"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.resetPasswordDto.newPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cancelDisabled", ctx.isLoading)("saveDisabled", !_r0.form.valid || ctx.isLoading);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_2__.AbpValidationSummaryComponent, _shared_components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.AbpModalHeaderComponent, _shared_components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_4__.AbpModalFooterComponent, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalizePipe],
  encapsulation: 2
});

/***/ }),

/***/ 11846:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/animations/routerTransition */ 64369);
/* harmony import */ var shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/paged-listing-component-base */ 3250);
/* harmony import */ var _create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-user/create-user-dialog.component */ 66806);
/* harmony import */ var _edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user/edit-user-dialog.component */ 25885);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 47571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ 37857);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/pagination/abp-pagination-controls.component */ 4798);
/* harmony import */ var _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/busy.directive */ 72481);
/* harmony import */ var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/localize.pipe */ 35832);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 92302);















function UsersComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35)(1, "div", 20)(2, "form", 36)(3, "div", 2)(4, "div", 10)(5, "div", 37)(6, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 39)(10, "div", 40)(11, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_29_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 43)(16, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_29_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 40)(21, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_29_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.isActive = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 48)(26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_div_29_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.getDataPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_div_29_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 12, "IsActive"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 14, "All"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 16, "Yes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.isActive)("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 18, "No"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 20, "Search"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 22, "Clear"), " ");
  }
}
function UsersComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td")(8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "input", 51)(10, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td")(12, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_tr_51_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const user_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.editUser(user_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_tr_51_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const user_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.delete(user_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_tr_51_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const user_r8 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.resetPassword(user_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r8.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r8.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r8.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", user_r8.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 7, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 9, "Delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 11, "ResetPassword"), " ");
  }
}
const _c0 = function (a1, a2, a3) {
  return {
    id: "server",
    itemsPerPage: a1,
    currentPage: a2,
    totalItems: a3
  };
};
class PagedUsersRequestDto extends shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedRequestDto {}
class UsersComponent extends shared_paged_listing_component_base__WEBPACK_IMPORTED_MODULE_1__.PagedListingComponentBase {
  constructor(injector, _userService, _modalService) {
    super(injector);
    this._userService = _userService;
    this._modalService = _modalService;
    this.users = [];
    this.keyword = '';
    this.advancedFiltersVisible = false;
  }
  createUser() {
    this.showCreateOrEditUserDialog();
  }
  editUser(user) {
    this.showCreateOrEditUserDialog(user.id);
  }
  resetPassword(user) {
    this.showResetPasswordUserDialog(user.id);
  }
  clearFilters() {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
  list(request, pageNumber, finishedCallback) {
    request.keyword = this.keyword;
    request.isActive = this.isActive;
    this._userService.getAll(request.keyword, request.isActive, request.skipCount, request.maxResultCount).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
      finishedCallback();
    })).subscribe(result => {
      this.users = result.items;
      this.showPaging(result, pageNumber);
    });
  }
  delete(user) {
    abp.message.confirm(this.l('UserDeleteWarningMessage', user.fullName), undefined, result => {
      if (result) {
        this._userService.delete(user.id).subscribe(() => {
          abp.notify.success(this.l('SuccessfullyDeleted'));
          this.refresh();
        });
      }
    });
  }
  showResetPasswordUserDialog(id) {
    this._modalService.show(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordDialogComponent, {
      class: 'modal-lg',
      initialState: {
        id: id
      }
    });
  }
  showCreateOrEditUserDialog(id) {
    let createOrEditUserDialog;
    if (!id) {
      createOrEditUserDialog = this._modalService.show(_create_user_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateUserDialogComponent, {
        class: 'modal-lg'
      });
    } else {
      createOrEditUserDialog = this._modalService.show(_edit_user_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EditUserDialogComponent, {
        class: 'modal-lg',
        initialState: {
          id: id
        }
      });
    }
    createOrEditUserDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__.UserServiceProxy), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService));
};
UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 65,
  vars: 44,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["href", "javascript:;", 1, "btn", "bg-blue", 3, "click"], [1, "fa", "fa-plus-square"], [1, "content", "px-2"], [1, "card"], [1, "card-header"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "bg-blue", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "name", "keyword", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fas"], ["class", "card mb-0 mt-1", 4, "ngIf"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", 3, "busy"], [1, "bg-light"], [2, "width", "310px"], [4, "ngFor", "ngForOf"], [1, "card-footer", "table-card-footer", "bg-light", "border-top"], [1, "col-sm-4", "col-12", "text-sm-left", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "col-sm-4", "col-12", "text-center"], [1, "mb-0", "my-2"], [1, "col-sm-4", "col-12"], [1, "float-sm-right", "m-auto"], ["id", "server", 3, "pageChange"], [1, "card", "mb-0", "mt-1"], [1, "form-horizontal"], [1, "form-group", "row", "mb-0"], [1, "col-md-3", "col-form-label"], [1, "col-md-9", "pt-2"], [1, "custom-control", "custom-radio", "d-inline"], ["type", "radio", "id", "isActiveAll", "name", "isActive", "checked", "", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveAll", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "d-inline", "mx-3"], ["type", "radio", "id", "isActiveActive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActiveActive", 1, "custom-control-label"], ["type", "radio", "id", "isActivePassive", "name", "isActive", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "isActivePassive", 1, "custom-control-label"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-default", "float-right", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "disabled", "", 1, "custom-control-input", 3, "checked"], [1, "custom-control-label"], ["type", "button", 1, "btn", "btn-sm", "bg-secondary", 3, "click"], [1, "fas", "fa-pencil-alt"], ["type", "button", 1, "btn", "btn-sm", "bg-danger", "mx-2", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-lock"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_9_listener() {
        return ctx.createUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "section", 7)(14, "div", 1)(15, "div", 8)(16, "div", 9)(17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_22_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.keyword = $event;
      })("keyup.enter", function UsersComponent_Template_input_keyup_enter_24_listener() {
        return ctx.getDataPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_27_listener() {
        return ctx.advancedFiltersVisible = !ctx.advancedFiltersVisible;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, UsersComponent_div_29_Template, 32, 24, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "table", 22)(33, "thead", 23)(34, "tr")(35, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](49, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, UsersComponent_tr_51_Template, 24, 13, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 26)(54, "div", 2)(55, "div", 27)(56, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_56_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 30)(59, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](61, "localize");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 32)(63, "div", 33)(64, "abp-pagination-controls", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function UsersComponent_Template_abp_pagination_controls_pageChange_64_listener($event) {
        return ctx.getDataPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@routerTransition", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 18, "Users"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 20, "Create"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 22, "SearchWithThreeDot"))("ngModel", ctx.keyword);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("fa-angle-up", ctx.advancedFiltersVisible)("fa-angle-down", !ctx.advancedFiltersVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.advancedFiltersVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("busy", ctx.isTableLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](37, 24, "UserName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 26, "FullName"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 28, "EmailAddress"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 30, "IsActive"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](49, 32, "Actions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](52, 34, ctx.users, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](40, _c0, ctx.pageSize, ctx.pageNumber, ctx.totalItems)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](61, 37, "TotalRecordsCount", ctx.totalItems), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _shared_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_6__.AbpPaginationControlsComponent, _shared_directives_busy_directive__WEBPACK_IMPORTED_MODULE_7__.BusyDirective, _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__.LocalizePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginatePipe],
  encapsulation: 2,
  data: {
    animation: [(0,_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_0__.appModuleAnimation)()]
  }
});

/***/ }),

/***/ 76422:
/*!*******************************************************!*\
  !*** ./src/shared/helpers/SignalRAspNetCoreHelper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignalRAspNetCoreHelper": () => (/* binding */ SignalRAspNetCoreHelper)
/* harmony export */ });
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/AppConsts */ 85079);
/* harmony import */ var abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abp-ng2-module */ 19097);


class SignalRAspNetCoreHelper {
  static initSignalR(callback) {
    const encryptedAuthToken = new abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__.UtilsService().getCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.authorization.encryptedAuthTokenName);
    abp.signalr = {
      autoConnect: true,
      connect: undefined,
      hubs: undefined,
      qs: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.authorization.encryptedAuthTokenName + '=' + encodeURIComponent(encryptedAuthToken),
      remoteServiceBaseUrl: _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.remoteServiceBaseUrl,
      startConnection: undefined,
      url: '/signalr'
    };
    const script = document.createElement('script');
    if (callback) {
      script.onload = () => {
        callback();
      };
    }
    script.src = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_0__.AppConsts.appBaseUrl + '/assets/abp/abp.signalr-client.js';
    document.head.appendChild(script);
  }
}

/***/ }),

/***/ 91905:
/*!****************************************!*\
  !*** ./src/shared/layout/menu-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem)
/* harmony export */ });
class MenuItem {
  constructor(label, route, icon, permissionName = null, children = null) {
    this.label = label;
    this.route = route;
    this.icon = icon;
    this.permissionName = permissionName;
    this.children = children;
  }
}

/***/ }),

/***/ 3250:
/*!****************************************************!*\
  !*** ./src/shared/paged-listing-component-base.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityDto": () => (/* binding */ EntityDto),
/* harmony export */   "PagedListingComponentBase": () => (/* binding */ PagedListingComponentBase),
/* harmony export */   "PagedRequestDto": () => (/* binding */ PagedRequestDto),
/* harmony export */   "PagedResultDto": () => (/* binding */ PagedResultDto)
/* harmony export */ });
/* harmony import */ var shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/app-component-base */ 16772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PagedResultDto {}
class EntityDto {}
class PagedRequestDto {}
class PagedListingComponentBase extends shared_app_component_base__WEBPACK_IMPORTED_MODULE_0__.AppComponentBase {
  constructor(injector) {
    super(injector);
    this.pageSize = 10;
    this.pageNumber = 1;
    this.totalPages = 1;
    this.isTableLoading = false;
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.getDataPage(this.pageNumber);
  }
  showPaging(result, pageNumber) {
    this.totalPages = (result.totalCount - result.totalCount % this.pageSize) / this.pageSize + 1;
    this.totalItems = result.totalCount;
    this.pageNumber = pageNumber;
  }
  getDataPage(page) {
    const req = new PagedRequestDto();
    req.maxResultCount = this.pageSize;
    req.skipCount = (page - 1) * this.pageSize;
    this.isTableLoading = true;
    this.list(req, page, () => {
      this.isTableLoading = false;
    });
  }
}
PagedListingComponentBase.ɵfac = function PagedListingComponentBase_Factory(t) {
  return new (t || PagedListingComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
PagedListingComponentBase.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PagedListingComponentBase,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PagedListingComponentBase_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 75805:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 19402:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);

/***/ }),

/***/ 81944:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ 19402);
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsNaN.js */ 43876);
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_strictIndexOf.js */ 35161);




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? (0,_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, fromIndex) : (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"], fromIndex);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIndexOf);

/***/ }),

/***/ 43876:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNaN);

/***/ }),

/***/ 70653:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseEach.js */ 74065);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 53943);



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
    result = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? Array(collection.length) : [];
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMap);

/***/ }),

/***/ 12695:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 51463);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);

/***/ }),

/***/ 17381:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseValues.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ 66717);


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function (key) {
    return object[key];
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseValues);

/***/ }),

/***/ 79225:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_castFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 80570);


/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castFunction);

/***/ }),

/***/ 35161:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strictIndexOf);

/***/ }),

/***/ 51463:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);

/***/ }),

/***/ 49724:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/forEach.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ 75805);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseEach.js */ 74065);
/* harmony import */ var _castFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_castFunction.js */ 79225);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 17191);





/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseEach_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_castFunction_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forEach);

/***/ }),

/***/ 63795:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/includes.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseIndexOf.js */ 81944);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 53943);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isString.js */ 7190);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ 26011);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ 72912);






/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? collection : (0,_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection);
  fromIndex = fromIndex && !guard ? (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return (0,_isString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(collection, value, fromIndex) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (includes);

/***/ }),

/***/ 7190:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 17191);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == stringTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isString);

/***/ }),

/***/ 90112:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/map.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ 66717);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 22244);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ 70653);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 17191);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ }),

/***/ 46503:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toFinite.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 79034);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);

/***/ }),

/***/ 26011:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/toInteger.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ 46503);


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toInteger);

/***/ }),

/***/ 79034:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 12695);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 48455);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);

/***/ }),

/***/ 72912:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/values.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseValues.js */ 17381);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 24876);



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : (0,_baseValues_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (values);

/***/ })

}]);
//# sourceMappingURL=src_app_app_module_ts.js.map