import { Component, OnInit } from '@angular/core';
import { Genre, GenresResponse } from './genre.model';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
    genres$: Genre[];

  constructor(private genreService: GenreService) {}

  ngOnInit() {
    return this.genreService.getListGenre().subscribe(data => {
        this.genres$ = data.genres;
     });
  }
}
