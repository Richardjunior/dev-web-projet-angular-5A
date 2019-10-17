var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
let FilmFilterPipe = class FilmFilterPipe {
    transform(trendings$, searchTerm) {
        if (!trendings$ || !searchTerm) {
            return trendings$;
        }
        return trendings$.filter(trending => trending.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
};
FilmFilterPipe = __decorate([
    Pipe({
        name: 'filmFilter'
    })
], FilmFilterPipe);
export { FilmFilterPipe };
//# sourceMappingURL=film-filter.pipe.js.map