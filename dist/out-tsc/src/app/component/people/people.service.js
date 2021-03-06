var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let PeopleService = class PeopleService {
    constructor(_http) {
        this._http = _http;
        this.apiUrlAllPeople = "https://api.themoviedb.org/3/person/popular?api_key=089e077279af9352976ba2161c971b70&language=en-US&page=1";
    }
    getTrendings() {
        return this._http.get(this.apiUrlAllPeople);
    }
    getDetailsPeople(id) {
        return this._http.get('https://api.themoviedb.org/3/person/' + id + '?api_key=089e077279af9352976ba2161c971b70&&language=en-US');
    }
};
PeopleService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], PeopleService);
export { PeopleService };
//# sourceMappingURL=people.service.js.map