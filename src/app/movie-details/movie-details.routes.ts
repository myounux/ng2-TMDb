import {Route} from '@angular/router';
import {MovieDetailsComponent} from './movie-details.component';

export const movieDetailsRoutes: Route[] = [
	{
		path: 'movies/:id',
		component: MovieDetailsComponent
	}
];
