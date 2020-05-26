import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = /** @class */ (() => {
    let NavbarComponent = class NavbarComponent {
        constructor(_router) {
            this._router = _router;
        }
        ngOnInit() {
        }
        buscarHeroe(palabra) {
            this._router.navigate(['/search', palabra]);
        }
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html'
        })
    ], NavbarComponent);
    return NavbarComponent;
})();
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map