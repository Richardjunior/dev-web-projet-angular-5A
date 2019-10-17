import { PipeTransform, Pipe } from '@angular/core';
import { Trending } from './trending/trending.model';





@Pipe({
    name: 'filmFilter2'
})
export class GenreActionFilterPipe implements PipeTransform {
    transform(tabAction$: Trending[], searchTerm: string): Trending[] {
        if (!tabAction$ || !searchTerm) {
            return tabAction$;
        }

        return tabAction$.filter(tabAction =>
            tabAction.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

@Pipe({
    name: 'filmFilter3'
})
export class GenreAdventureFilterPipe implements PipeTransform {
    transform(tabAdventure$: Trending[], searchTerm: string): Trending[] {
        if (!tabAdventure$ || !searchTerm) {
            return tabAdventure$;
        }

        return tabAdventure$.filter(tabAdventure =>
            tabAdventure.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

@Pipe({
    name: 'filmFilter4'
})
export class GenretabThrillerFilterPipe implements PipeTransform {
    transform(tabThriller$: Trending[], searchTerm: string): Trending[] {
        if (!tabThriller$ || !searchTerm) {
            return tabThriller$;
        }

        return tabThriller$.filter(tabThriller =>
            tabThriller.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

@Pipe({
    name: 'filmFilter5'
})
export class GenretabHorrorFilterPipe implements PipeTransform {
    transform(tabHorror$: Trending[], searchTerm: string): Trending[] {
        if (!tabHorror$ || !searchTerm) {
            return tabHorror$;
        }

        return tabHorror$.filter(tabHorror =>
            tabHorror.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
