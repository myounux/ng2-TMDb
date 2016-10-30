import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../classes';

@Component({
	selector: 'movie-cmp',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	@Input() movie: Movie = new Movie();

	constructor() {
	}

	ngOnInit() {
	}

}
