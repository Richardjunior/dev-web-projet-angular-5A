import { Routes } from '@angular/router';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { BestMovieBasicComponent } from './best-movie/best-movie.component';
import { NgbdpeopleBasicComponent } from './people/people.component';
import { DescribeComponent } from './describe/describe.component';
import { GenresComponent } from './genre/genre.component';

export const ComponentsRoutes: Routes = [
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
            { title: 'ngComponent' },
            { title: 'Genres' }
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
            { title: 'Best Movies' }
          ]
        }
      },
      {
        path: 'people',
        component: NgbdpeopleBasicComponent,
        data: {
          title: 'Peoples',
          urls: [
            { title: 'UlriFlix', url: '/dashboard' },
            { title: 'Peoples' },
            { title: 'Peoples' }
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
