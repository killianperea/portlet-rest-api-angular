var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../services/http-service-api"], function (require, exports, core_1, http_service_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpStore = (function () {
        function HttpStore(httpApi) {
            this.httpApi = httpApi;
        }
        HttpStore.prototype.getRequest = function (url) {
            return this.httpApi.getRequest(url);
        };
        HttpStore.prototype.postRequest = function (url, payload) {
            return this.httpApi.postRequest(url, payload);
        };
        return HttpStore;
    }());
    HttpStore = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_api_1.HttpApi])
    ], HttpStore);
    exports.HttpStore = HttpStore;
});
//# sourceMappingURL=http.store.js.map