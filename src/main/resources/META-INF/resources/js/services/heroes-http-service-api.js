var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/core", "@angular/http", "./api.service", "rxjs/add/operator/map"], function (require, exports, core_1, http_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeroesHttpApi = (function () {
        function HeroesHttpApi(api, defaultOptions) {
            this.api = api;
            this.defaultOptions = defaultOptions;
        }
        HeroesHttpApi.prototype.getHeroes = function () {
            var defaultOptions = this.defaultOptions;
            defaultOptions.headers.set('Accept', 'application/json');
            return this.api.get('public/characters', defaultOptions.merge({
                params: {
                    limit: 20,
                    offset: 0,
                    ts: 1,
                    apikey: "01c115c226d5b59b41763a9042339f57",
                    hash: "bc60ad6d3b45d4124b579413088cb6d5"
                }
            }))
                .map(function (res) { return res.json(); })
                .map(function (response) { return response.data.results; })
                .map(function (heroes) { return heroes; });
        };
        return HeroesHttpApi;
    }());
    HeroesHttpApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(api_service_1.CATS_API)),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [api_service_1.Api,
            http_1.RequestOptions])
    ], HeroesHttpApi);
    exports.HeroesHttpApi = HeroesHttpApi;
});
//# sourceMappingURL=heroes-http-service-api.js.map