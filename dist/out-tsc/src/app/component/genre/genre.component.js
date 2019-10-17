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
import { TrendingService } from '../trending/trending.service';
let GenresComponent = class GenresComponent {
    constructor(trendingService) {
        this.trendingService = trendingService;
    }
    ngOnInit() {
        this.getTrending();
    }
    getTrending() {
        this.tabAction$ = new Array();
        this.tabThriller$ = new Array();
        this.tabHorror$ = new Array();
        this.tabAdventure$ = new Array();
        return this.trendingService.getTrendings().subscribe(data => {
            this.trendings$ = data.results;
            for (let i = 0; i < this.trendings$.length; i++) {
                for (let j = 0; j < this.trendings$[i].genre_ids.length; j++) {
                    console.log(this.trendings$[i]);
                    if (this.trendings$[i].genre_ids[j] === 28) {
                        this.tabAction$.push(this.trendings$[i]);
                    }
                    if (this.trendings$[i].genre_ids[j] === 53) {
                        this.tabThriller$.push(this.trendings$[i]);
                    }
                    if (this.trendings$[i].genre_ids[j] === 12) {
                        this.tabAdventure$.push(this.trendings$[i]);
                    }
                    if (this.trendings$[i].genre_ids[j] === 27) {
                        this.tabHorror$.push(this.trendings$[i]);
                    }
                }
            }
        });
    }
};
GenresComponent = __decorate([
    Component({
        templateUrl: 'genre.component.html'
    }),
    __metadata("design:paramtypes", [TrendingService])
], GenresComponent);
export { GenresComponent };
//# sourceMappingURL=genre.component.js.map