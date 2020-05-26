import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VillanosComponent = /** @class */ (() => {
    let VillanosComponent = class VillanosComponent {
        constructor(_villanoService) {
            this._villanoService = _villanoService;
            this.villano = [];
        }
        ngOnInit() {
            this.villano = this._villanoService.getVillanos();
            console.log(this.villano);
        }
    };
    VillanosComponent = __decorate([
        Component({
            selector: 'app-villanos',
            templateUrl: './villanos.component.html'
        })
    ], VillanosComponent);
    return VillanosComponent;
})();
export { VillanosComponent };
//# sourceMappingURL=villanos.component.js.map