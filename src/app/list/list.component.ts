import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { MoviesService } from '../shared/services/movies.service';
import { FormControl } from '@angular/forms';
import { $enum } from 'ts-enum-util';
import { GenreType } from '../shared/models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public movies$: Observable<Array<Movie>>;
  public search = new FormControl();
  public genres = new FormControl();
  public genreList: string[];

  constructor(
    private movieService: MoviesService
  ) {
    this.genreList = $enum(GenreType).getValues();
  }

  ngOnInit() {
    this.movies$ = this.movieService.filter(this.search.valueChanges, this.genres.valueChanges);
  }

  public clearFilter() {
    this.search.setValue('');
    this.genres.setValue([]);
  }

  public searchByTag(genre: string) {
    const existed = this.genres.value || [];
    existed.push(genre);
    this.genres.setValue(existed);
  }

}
