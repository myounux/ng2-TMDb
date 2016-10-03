import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovieComponent, MoviesListComponent, PaginationComponent, SearchMovieComponent, HeaderComponent } from './components';
import { MoviesService } from './services';
import { RatingPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	RouterModule
  ],
  declarations: [
    MovieComponent,
    MoviesListComponent,
	PaginationComponent,
	SearchMovieComponent,
	HeaderComponent,
    RatingPipe
  ],
  exports: [
    MoviesListComponent,
	PaginationComponent,
	SearchMovieComponent,
	HeaderComponent
  ],
  providers: [MoviesService]
})
export class SharedModule { }
