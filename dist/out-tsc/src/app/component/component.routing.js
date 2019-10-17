import { DescribePeopleComponent } from './describe-people/describe-people.component';
import { BestMovieBasicComponent } from './best-movie/best-movie.component';
import { NgbdpeopleBasicComponent } from './people/people.component';
import { DescribeComponent } from './describe/describe.component';
import { GenresComponent } from './genre/genre.component';
export const ComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'genres',
                component: GenresComponent,
                data: {
                    title: 'Genres',
                    urls: [
                        { title: 'UlriFlix', url: '/dashboard' },
                        { title: 'Genres' },
                        { title: 'List by Genre' }
                    ]
                }
            },
            {
                path: 'best-movie',
                component: BestMovieBasicComponent,
                data: {
                    title: 'Best Movies',
                    urls: [
                        { title: 'UlriFlix', url: '/dashboard' },
                        { title: 'Best Movies' },
                        { title: 'List of Movies' }
                    ]
                }
            },
            {
                path: 'people',
                component: NgbdpeopleBasicComponent,
                data: {
                    title: 'People',
                    urls: [
                        { title: 'UlriFlix', url: '/dashboard' },
                        { title: 'People' },
                        { title: 'List of People' }
                    ]
                }
            },
            {
                path: 'describe-people/:id',
                component: DescribePeopleComponent,
                data: {
                    title: 'Describe People',
                    urls: [
                        { title: 'UlriFlix', url: '/dashboard' },
                        { title: 'Describe People' },
                        { title: 'People' }
                    ]
                }
            },
            {
                path: 'describe/:id',
                component: DescribeComponent,
                data: {
                    title: 'Describe Movie',
                    urls: [
                        { title: 'UlriFlix', url: '/dashboard' },
                        { title: 'Describe Movie' },
                        { title: 'Describe Movie' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=component.routing.js.map