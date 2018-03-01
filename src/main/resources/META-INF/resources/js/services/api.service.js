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
define(["require", "exports", "@angular/core", "@angular/http"], function (require, exports, core_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_URL_SERVER = new core_1.OpaqueToken('_baseUrlServer');
    exports.CATS_API = new core_1.OpaqueToken('_catsApi');
    /**
     * Api is a generic REST Api handler. Set your API url first.
     */
    var Api = (function () {
        function Api(http, baseUrl, defaultOptions) {
            this.http = http;
            this.baseUrl = baseUrl;
            this.defaultOptions = defaultOptions;
        }
        Api.prototype.get = function (endpoint, options) {
            options = this._defaultOptions(options);
            return this.http.get(this.baseUrl + "/" + endpoint, options);
        };
        Api.prototype.post = function (endpoint, body, options) {
            options = this._defaultOptions(options);
            return this.http.post(this.baseUrl + "/" + endpoint, body, options);
        };
        Api.prototype.put = function (endpoint, body, options) {
            options = this._defaultOptions(options);
            return this.http.put(this.baseUrl + "/" + endpoint, body, options);
        };
        Api.prototype.delete = function (endpoint, options) {
            options = this._defaultOptions(options);
            return this.http.delete(this.baseUrl + "/" + endpoint, options);
        };
        Api.prototype.patch = function (endpoint, body, options) {
            options = this._defaultOptions(options);
            return this.http.put(this.baseUrl + "/" + endpoint, body, options);
        };
        Api.prototype._defaultOptions = function (requestOptions) {
            var _this = this;
            if (this.defaultOptions) {
                this.defaultOptions.headers.keys().forEach(function (key) {
                    requestOptions.headers.set(key, _this.defaultOptions.headers.get(key));
                });
                return this.defaultOptions.merge(requestOptions);
            }
            else {
                return requestOptions;
            }
        };
        return Api;
    }());
    Api = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(exports.BASE_URL_SERVER)),
        __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.Http, String, http_1.RequestOptions])
    ], Api);
    exports.Api = Api;
});
//# sourceMappingURL=api.service.js.map