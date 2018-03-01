var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./app.component", "../services/api.service", "../services/heroes-http-service-api", "../stores/heroes-http.store", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, forms_1, http_1, app_component_1, api_service_1, heroes_http_service_api_1, heroes_http_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function apiFactory(http, baseUrl, contextUri, requestOptions) {
        if (contextUri === void 0) { contextUri = ''; }
        return new api_service_1.Api(http, "" + baseUrl + contextUri, requestOptions);
    }
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [],
            providers: [
                // REST
                { provide: api_service_1.BASE_URL_SERVER, useValue: 'http://gateway.marvel.com/v1' },
                { provide: api_service_1.CATS_API, useFactory: apiFactory, deps: [http_1.Http, api_service_1.BASE_URL_SERVER] },
                //API
                heroes_http_service_api_1.HeroesHttpApi,
                // STORES
                heroes_http_store_1.HeroesHttpStore
            ],
            exports: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map