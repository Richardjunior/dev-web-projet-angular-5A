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
import { map } from 'rxjs/operators';
import { PeopleService } from '../people/people.service';
let DescribePeopleComponent = class DescribePeopleComponent {
    constructor(route, peopleService) {
        this.route = route;
        this.peopleService = peopleService;
        this.people$ = new Array();
    }
    beforeChange($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    }
    ngOnInit() {
        this.getIdPeople();
        this.getDescriptionPeople(this.peopleId);
        this.getDetailsPeople(this.peopleId);
    }
    getIdPeople() {
        this.route.paramMap.pipe(map(params => {
            this.peopleId = parseInt(params.get('id'), 10);
        })).subscribe();
    }
    getDescriptionPeople(id) {
        this.peopleService.getTrendings().subscribe(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].id == id) {
                    this.people$[0] = data.results[i];
                    //console.log(this.people$[0].known_for[0].release_date);
                    this.movieOfPeople$ = data.results[i].known_for;
                    console.log(this.people$[0]);
                    return;
                }
            }
        });
    }
    getDetailsPeople(id) {
        this.peopleService.getDetailsPeople(id).subscribe(data => {
            this.detailOfPeople$ = data;
            console.log(data);
        });
    }
};
DescribePeopleComponent = __decorate([
    Component({
        selector: 'app-ngbd-accordion-basic',
        templateUrl: 'describe-people.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute, PeopleService])
], DescribePeopleComponent);
export { DescribePeopleComponent };
//# sourceMappingURL=describe-people.component.js.map