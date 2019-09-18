import { Routes } from '@angular/router';

import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { DescribeComponent } from './describe/describe.component';
import { CardsComponent } from './card/card.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards',
          urls: [
            { title: 'UlriFlix', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Cards' }
          ]
        }
      },
      {
        path: 'carousel',
        component: NgbdCarouselBasicComponent,
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
        path: 'rating',
        component: NgbdratingBasicComponent,
        data: {
          title: 'Comments',
          urls: [
            { title: 'UlriFlix', url: '/dashboard' },
            { title: 'Comments' },
            { title: 'Comments' }
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
