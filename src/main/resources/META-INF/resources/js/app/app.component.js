var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../stores/http.store"], function (require, exports, core_1, http_store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(httpStore) {
            this.httpStore = httpStore;
            this.restTypes = [{ label: 'GET', value: 'GET' }, { label: 'POST', value: 'POST' }];
            this.restType = 'GET';
        }
        AppComponent.prototype.ngOnInit = function () {
        };
        AppComponent.prototype.doRequest = function () {
            var _this = this;
            console.log(this.restType + " + " + this.urlRequest);
            if (this.restType === 'GET') {
                this.httpStore.getRequest(this.urlRequest).subscribe(function (data) {
                    _this.response = data._body;
                });
            }
            else {
                this.httpStore.postRequest(this.urlRequest, this.payload).subscribe(function (data) {
                    _this.response = data._body;
                });
            }
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/test-http-liferay/js/app/app.html'
        }),
        __metadata("design:paramtypes", [http_store_1.HttpStore])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map