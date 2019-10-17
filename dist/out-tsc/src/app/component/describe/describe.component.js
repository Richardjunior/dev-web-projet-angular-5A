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
import { ActivatedRoute } from '@angular/router';
import { DescribeService } from './describe.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
let DescribeComponent = class DescribeComponent {
    constructor(route, describeService, sanitizer) {
        this.route = route;
        this.describeService = describeService;
        this.sanitizer = sanitizer;
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    beforeChange($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    }
    ngOnInit() {
        this.getIdMovie();
        this.getVideoOfMovie();
        this.getDescribeMovie();
    }
    getIdMovie() {
        this.route.paramMap.pipe(map(params => {
            this.movieId = parseInt(params.get('id'), 10);
        })).subscribe();
    }
    getDescribeMovie() {
        this.describeService.getDescribeMovie(this.movieId).subscribe(data => {
            this.describeMovie$ = data;
        });
    }
    getVideoOfMovie() {
        this.describeService.getVideoOfMovie(this.movieId).subscribe(data => {
            this.MovieVideo$ = data.results;
            this.keyMovie = data.results[0].key;
            this.youtubeUrl = 'https://www.youtube.com/watch?v=' + this.keyMovie;
            this.youtubeUrl = this.youtubeUrl.replace("watch?v=", "embed/");
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
            console.log(this.youtubeUrl);
        });
    }
};
DescribeComponent = __decorate([
    Component({
        selector: 'app-ngbd-tabs',
        templateUrl: './describe.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute, DescribeService, DomSanitizer])
], DescribeComponent);
export { DescribeComponent };
//# sourceMappingURL=describe.component.js.map