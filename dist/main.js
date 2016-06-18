"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var index_1 = require('./app/about/index');
var index_2 = require('./app/landing/index');
var index_3 = require('./app/leader/edit/index');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.provideRouter([
        { index: true, component: index_2.LandingComponent },
        { path: '/about', component: index_1.AboutComponent },
        { path: '/add-leader', component: index_3.EditLeaderComponent }
    ])
]);
//# sourceMappingURL=main.js.map