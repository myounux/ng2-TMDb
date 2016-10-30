import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
	selector: 'search-movie',
	templateUrl: './search-movie.component.html',
	styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
	@Output() movieSearched = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit() {
	}

	search(title: string) {
		this.movieSearched.emit(title);
		return false;
	}

}
