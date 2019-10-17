var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let DescribeService = class DescribeService {
    // apiUrlAllTrending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';
    constructor(_http) {
        this._http = _http;
    }
    getDescribeMovie(id) {
        return this._http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=089e077279af9352976ba2161c971b70&language=en-US');
    }
    getVideoOfMovie(id) {
        return this._http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=089e077279af9352976ba2161c971b70');
    }
};
__decorate([
    __param(0, Input()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DescribeService.prototype, "getVideoOfMovie", null);
DescribeService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], DescribeService);
export { DescribeService };
//# sourceMappingURL=describe.service.js.map