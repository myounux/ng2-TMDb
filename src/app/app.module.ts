import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {SharedModule} from './shared';
import {PopularMoviesModule} from './popular-movies';
import {TopRatedMoviesModule} from './top-rated-movies';
import {UpcomingMoviesModule} from './upcoming-movies';
import {NowPlayingMoviesModule} from './now-playing-movies';
import {MovieDetailsModule} from './movie-details';

import {AppComponent} from './app.component';

import {routes} from './app.routes';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		SharedModule,
		PopularMoviesModule,
		TopRatedMoviesModule,
		UpcomingMoviesModule,
		NowPlayingMoviesModule,
		MovieDetailsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
