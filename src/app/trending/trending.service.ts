import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { StarterResponse, Starter } from './trending.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  apiUrlAllTrending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=089e077279af9352976ba2161c971b70&';

  constructor( private _http: HttpClient) { }

  getTrendings(): Observable<StarterResponse> {
    return this._http.get<StarterResponse>(this.apiUrlAllTrending);
  }
}
