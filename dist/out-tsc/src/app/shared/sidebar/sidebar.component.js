var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { Router, ActivatedRoute } from '@angular/router';
let SidebarComponent = class SidebarComponent {
    constructor(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    // End open close
    ngOnInit() {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html'
    }),
    __metadata("design:paramtypes", [NgbModal,
        Router,
        ActivatedRoute])
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map