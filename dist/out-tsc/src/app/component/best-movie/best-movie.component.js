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
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BestMovieService } from './best-movie.service';
let BestMovieBasicComponent = class BestMovieBasicComponent {
    constructor(route, config, BestMovieService) {
        this.route = route;
        this.BestMovieService = BestMovieService;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.tmpBestMovie$ = new Array();
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        this.getIdMovie();
        this.getBestMovies();
        this.getBestMovies();
    }
    getBestMovies() {
        return this.BestMovieService.getBestMovie().subscribe(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].vote_count > 2000) {
                    this.tmpBestMovie$.push(data.results[i]);
                }
            }
            this.BestMovie$ = this.tmpBestMovie$;
        });
    }
    getIdMovie() {
        this.route.paramMap.pipe(map(params => {
            this.movieId = parseInt(params.get('id'), 10);
        })).subscribe();
    }
};
BestMovieBasicComponent = __decorate([
    Component({
        selector: 'app-ngbd-buttons-radio',
        templateUrl: './best-movie.component.html',
        providers: [NgbCarouselConfig]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, NgbCarouselConfig, BestMovieService])
], BestMovieBasicComponent);
export { BestMovieBasicComponent };
//# sourceMappingURL=best-movie.component.js.map