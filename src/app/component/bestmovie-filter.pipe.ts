import { PipeTransform, Pipe } from '@angular/core';

import { BestMovie } from './best-movie/best-movie.module';


@Pipe({
    name: 'filmFilter'
})
export class BestmovieFilterPipe implements PipeTransform {
    transform(tabAction$: BestMovie[], searchTerm: string): BestMovie[] {
        if (!tabAction$ || !searchTerm) {
            return tabAction$;
        }

        return tabAction$.filter(tabAction =>
            tabAction.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
