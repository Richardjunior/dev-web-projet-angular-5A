import { PipeTransform, Pipe } from '@angular/core';
import { People } from './people/people.model';




@Pipe({
    name: 'PeopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {
    transform(peoples$: People[], searchTerm: string): People[] {
        if (!peoples$ || !searchTerm) {
            return peoples$;
        }

        return peoples$.filter(people =>
            people.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
