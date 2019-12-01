import { MoviesService } from './movies.service';
import { Observable, Subject } from 'rxjs';

describe('MoviesService', () => {
  let service: MoviesService;
  beforeEach(() => {
    service = new MoviesService();
  });

  it('should return list of all movies, if no filters provided', (done) => {

    service.filter(new Observable(), new Observable()).subscribe((list) => {
      expect(list).toEqual(service.movies);
      done();
    });
  });


  it('should find movie by full name', (done) => {

    const name$ = new Subject<string>();
    const name = 'Tracers';
    service.filter(name$, new Observable()).subscribe((list) => {
      expect(list[0].name).toEqual(name);
      done();
    });

    name$.next(name);
  });

  it('should find by part of name', (done) => {

    const name$ = new Subject<string>();
    const name = 'rAceR';
    service.filter(name$, new Observable()).subscribe((list) => {
      expect(list[0].name).toEqual('Tracers');
      done();
    });

    name$.next(name);
  });

  it('should find movie by genre', (done) => {

    const genres$ = new Subject<string[]>();
    const genre = 'action' ;
    service.filter(new Observable(), genres$).subscribe((list) => {
      expect(list.every((m) => m.genres.includes(genre))).toBeTruthy();
      done();
    });

    genres$.next([genre]);
  });
});
