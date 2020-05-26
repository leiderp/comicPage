import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = /** @class */ (() => {
    let HeroesComponent = class HeroesComponent {
        constructor(_heroService, _router) {
            this._heroService = _heroService;
            this._router = _router;
            // hero:any[]=[];
            this.hero = [];
        }
        ngOnInit() {
            this.hero = this._heroService.getHeros();
            console.log(this.hero);
        }
        verHeroe(id) {
            this._router.navigate(['/detalles', id]);
        }
    };
    HeroesComponent = __decorate([
        Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styles: []
        })
    ], HeroesComponent);
    return HeroesComponent;
})();
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map