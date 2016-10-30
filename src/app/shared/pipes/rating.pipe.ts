import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'rating'
})
export class RatingPipe implements PipeTransform {

	transform(value: number, symbol = '★') {
		let stars = '';
		for (let i = 1; i < value; i++) {
			stars += '★';
		}

		return stars;
	}

}
