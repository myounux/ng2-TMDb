import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService, Movie} from '../shared';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
	movie: Movie = new Movie();

	constructor(private _movieService: MoviesService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this._movieService.get(params['id'])
				.subscribe(movie => {
					this.movie = movie;
				});
		});
	}

}
