import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { MoviesService } from '../shared/services/movies.service';

describe('ListComponent', () => {

  it('#clearFilter() should clear all filters', () => {
    const comp = new ListComponent({} as MoviesService);

    comp.genres.setValue(['some random tag']);
    comp.search.setValue('some name');

    comp.clearFilter();

    expect(comp.genres.value).toEqual([]);
    expect(comp.search.value).toBe('');
  });

  it('#searchByTag() should add selected genre to filter', () => {
    const comp = new ListComponent({} as MoviesService);

    comp.genres.setValue(['tag 1']);

    comp.searchByTag('tag 2');

    expect(comp.genres.value).toEqual(['tag 1', 'tag 2']);
  });
});
