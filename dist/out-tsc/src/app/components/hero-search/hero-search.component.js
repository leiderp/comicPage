import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroSearchComponent = /** @class */ (() => {
    let HeroSearchComponent = class HeroSearchComponent {
        constructor(_heroService, _villanoService, _activateRoute) {
            this._heroService = _heroService;
            this._villanoService = _villanoService;
            this._activateRoute = _activateRoute;
            this.hero = [];
            this.villano = [];
        }
        ngOnInit() {
            this._activateRoute.params.subscribe(params => {
                this.busqueda = params['busqueda'];
                this.hero = this._heroService.buscarHeroe(params['busqueda']);
                this.villano = this._villanoService.buscarVillano(params['busqueda']);
            });
        }
    };
    HeroSearchComponent = __decorate([
        Component({
            selector: 'app-hero-search',
            templateUrl: './hero-search.component.html',
            styleUrls: ['./hero-search.component.css']
        })
    ], HeroSearchComponent);
    return HeroSearchComponent;
})();
export { HeroSearchComponent };
//# sourceMappingURL=hero-search.component.js.map