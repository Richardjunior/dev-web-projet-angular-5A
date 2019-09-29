import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TrendingComponent } from './trending.component';

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
    component: TrendingComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [TrendingComponent,
    TrendingComponent]
})
export class TrendingModule {}
