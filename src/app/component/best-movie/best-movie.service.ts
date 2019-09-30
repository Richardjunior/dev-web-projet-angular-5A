import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { BestMovie , BestMovieResponse} from './best-movie.module';

@Injectable({
  providedIn: 'root'
})
export class BestMovieService {
  apiUrlAllTrending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';

  constructor( private _http: HttpClient) { }

  getBestMovie(): Observable<BestMovieResponse> {
    return this._http.get<BestMovieResponse>(this.apiUrlAllTrending);
  }
}

