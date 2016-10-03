import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TopRatedMoviesComponent } from './top-rated-movies.component';

@NgModule({
	imports: [
      SharedModule
    ],
    declarations: [
      TopRatedMoviesComponent
    ],
    exports: [
      TopRatedMoviesComponent
    ]
})
export class TopRatedMoviesModule { }
