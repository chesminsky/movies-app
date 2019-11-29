import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MoviesService } from '../shared/services/movies.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public movies$: Observable<Array<Movie>>;
  public search = new FormControl('');

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movies$ = this.movieService.searchByName(this.search.valueChanges);
  }

}
