var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
let FullComponent = class FullComponent {
    constructor(router) {
        this.router = router;
        this.color = 'defaultdark';
        this.showSettings = false;
        this.showMinisidebar = false;
        this.showDarktheme = false;
        this.config = {};
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/dashboard1']);
        }
        this.handleLayout();
    }
    onResize(event) {
        this.handleLayout();
    }
    toggleSidebar() {
        this.showMinisidebar = !this.showMinisidebar;
    }
    handleLayout() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.showMinisidebar = true;
        }
        else {
            this.showMinisidebar = false;
        }
    }
};
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FullComponent.prototype, "onResize", null);
FullComponent = __decorate([
    Component({
        selector: 'app-full-layout',
        templateUrl: './full.component.html',
        styleUrls: ['./full.component.scss']
    }),
    __metadata("design:paramtypes", [Router])
], FullComponent);
export { FullComponent };
//# sourceMappingURL=full.component.js.map