import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { DescribePeopleComponent } from './describe-people/describe-people.component';
import { BestMovieBasicComponent } from './best-movie/best-movie.component';

import { DescribeComponent } from './describe/describe.component';

import { GenresComponent } from './genre/genre.component';
import { NgbdpeopleBasicComponent } from './people/people.component';
import { PeopleFilterPipe } from './people-filter.pipe';
import { BestmovieFilterPipe } from './bestmovie-filter.pipe';
import { GenreActionFilterPipe, GenreAdventureFilterPipe, GenretabHorrorFilterPipe, GenretabThrillerFilterPipe } from './genreaction-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  
  ],
  declarations: [
    DescribePeopleComponent,
    BestMovieBasicComponent,
    NgbdpeopleBasicComponent,
    DescribeComponent,
    GenresComponent,
    PeopleFilterPipe,
    BestmovieFilterPipe,
    GenreActionFilterPipe,
    GenreAdventureFilterPipe,
    GenretabHorrorFilterPipe,
    GenretabThrillerFilterPipe

  ],
  exports: [
    PeopleFilterPipe,
    BestmovieFilterPipe,
    GenreActionFilterPipe,
    GenreAdventureFilterPipe,
    GenretabHorrorFilterPipe,
    GenretabThrillerFilterPipe

  ],
})
export class ComponentsModule {}
