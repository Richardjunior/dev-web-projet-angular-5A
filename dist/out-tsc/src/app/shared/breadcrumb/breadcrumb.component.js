var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "layout", void 0);
BreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Title])
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map