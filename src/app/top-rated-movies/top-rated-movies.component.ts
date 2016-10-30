import {Component, OnInit} from '@angular/core';
import {MoviesService, Movie} from '../shared';

@Component({
	selector: 'top-rated-movies',
	templateUrl: './top-rated-movies.component.html',
	styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

	movies: Movie[] = [];
	currentPage: number = 1;
	totalPages: number = 1;

	constructor(private _moviesService: MoviesService) {
	}

	ngOnInit() {
		this.getMovies();
	}

	getMovies() {
		this._moviesService.getTopRated(this.currentPage)
			.subscribe(response => {
				this.movies = response.results;
				this.totalPages = response.totalPages;
			});
	}

	goToPage(pageNumber) {
		this.currentPage = pageNumber;
		this.getMovies();
	}

	searchMovie(title) {
		this._moviesService.search(title)
			.subscribe(response => {
				this.movies = response.results;
				this.totalPages = response.totalPages;
			});
	}

}
