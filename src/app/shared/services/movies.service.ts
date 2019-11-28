import { Injectable } from '@angular/core';
import movies from '../mocks/movie.mock-data.json';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getAll(): Observable<Array<Movie>> {
    return of(movies);
  }
}
