import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let HeroCardComponent = /** @class */ (() => {
    let HeroCardComponent = class HeroCardComponent {
        constructor() {
            this.heros = [];
            this.heroSelected = new EventEmitter();
        }
        ngOnInit() {
        }
        verHeroe() {
            this.heroSelected.emit(this.index);
        }
    };
    __decorate([
        Input()
    ], HeroCardComponent.prototype, "heros", void 0);
    __decorate([
        Input()
    ], HeroCardComponent.prototype, "index", void 0);
    __decorate([
        Output()
    ], HeroCardComponent.prototype, "heroSelected", void 0);
    HeroCardComponent = __decorate([
        Component({
            selector: 'app-hero-card',
            templateUrl: './hero-card.component.html',
            styleUrls: ['./hero-card.component.css']
        })
    ], HeroCardComponent);
    return HeroCardComponent;
})();
export { HeroCardComponent };
//# sourceMappingURL=hero-card.component.js.map