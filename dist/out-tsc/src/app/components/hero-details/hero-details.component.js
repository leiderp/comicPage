import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroDetailsComponent = /** @class */ (() => {
    let HeroDetailsComponent = class HeroDetailsComponent {
        constructor(_activeRoute, _heroService, _villanoService) {
            this._activeRoute = _activeRoute;
            this._heroService = _heroService;
            this._villanoService = _villanoService;
            this.hero = [];
            this.villano = [];
            this._activeRoute.params.subscribe(params => {
                console.log(params['id']);
                if (params['id'] >= 10000) {
                    let x = params['id'] - 10000;
                    console.log(x);
                    this.hero = this._villanoService.getVillano(x);
                }
                else {
                    this.hero = this._heroService.getHero(params['id']);
                }
            });
        }
        ngOnInit() {
        }
    };
    HeroDetailsComponent = __decorate([
        Component({
            selector: 'app-hero-details',
            templateUrl: './hero-details.component.html',
            styles: []
        })
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
})();
export { HeroDetailsComponent };
//# sourceMappingURL=hero-details.component.js.map