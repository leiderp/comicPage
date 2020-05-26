import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
// RUTAS
import { APP_ROUTING } from './app.routes';
// SERVICIOS
import { HeroService } from './service/hero.service';
import { VillanosService } from './service/villanos.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { VillanosComponent } from './components/villanos/villanos.component';
let AppModule = /** @class */ (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                HomeComponent,
                HeroesComponent,
                AboutComponent,
                HeroDetailsComponent,
                HeroSearchComponent,
                HeroCardComponent,
                VillanosComponent
            ],
            imports: [
                BrowserModule,
                APP_ROUTING
            ],
            providers: [
                HeroService,
                VillanosService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
export { AppModule };
//# sourceMappingURL=app.module.js.map