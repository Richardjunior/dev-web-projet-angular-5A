import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from './genre.model';
import { GenresResponse } from './genre.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenreService {
    apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=089e077279af9352976ba2161c971b70&language=en-US';

    constructor( private httpClient: HttpClient) {}

    getListGenre(): Observable<GenresResponse> {
        return this.httpClient.get<GenresResponse>(this.apiUrl);
    }

}
