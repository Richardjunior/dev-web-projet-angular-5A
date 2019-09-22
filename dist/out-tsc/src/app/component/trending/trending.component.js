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
import { TrendingService } from './trending.service';
let StarterComponent = class StarterComponent {
    constructor(starterService) {
        this.starterService = starterService;
        this.subtitle = 'This is some text within a card block.';
    }
    ngOnInit() {
        return this.starterService.getTrendings().subscribe(data => {
            this.starters$ = data.results;
        });
    }
};
StarterComponent = __decorate([
    Component({
        selector: 'app-starter',
        templateUrl: './trending.component.html',
    }),
    __metadata("design:paramtypes", [TrendingService])
], StarterComponent);
export { StarterComponent };
//# sourceMappingURL=trending.component.js.map