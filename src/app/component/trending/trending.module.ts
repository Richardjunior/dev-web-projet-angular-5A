import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './trending.component';
import { FilmFilterPipe } from '../film-filter.pipe';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Les Tendances Actuelles',
      urls: [
        { title: 'UlriFlix', url: '/dashboard' },
        { title: 'Home' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    StarterComponent,
    FilmFilterPipe
    ],
    exports: [
      FilmFilterPipe,
    ]
})
export class StarterModule {}
