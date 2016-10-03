import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../classes';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Array<Movie> = [];

  constructor() { }

  ngOnInit() {
  }

}
