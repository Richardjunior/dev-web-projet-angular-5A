import { PipeTransform, Pipe } from '@angular/core';
import { Trending } from './trending/trending.model';


@Pipe({
    name: 'filmFilter'
})
export class FilmFilterPipe implements PipeTransform {
    transform(trendings$: Trending[], searchTerm: string): Trending[] {
        if (!trendings$ || !searchTerm) {
            return trendings$;
        }

        return trendings$.filter(trending =>
            trending.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
