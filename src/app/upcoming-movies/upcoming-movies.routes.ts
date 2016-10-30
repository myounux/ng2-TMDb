import {Route} from '@angular/router';
import {UpcomingMoviesComponent} from './upcoming-movies.component';

export const upcomingMoviesRoutes: Route[] = [
	{
		path: 'upcoming',
		component: UpcomingMoviesComponent
	}
];
