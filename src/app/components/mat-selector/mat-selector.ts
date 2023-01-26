import { Component } from '@angular/core';

@Component({
	selector: 'app-mat-selector',
	templateUrl: './mat-selector.html',
	styleUrls: ['./mat-selector.less'],
})
export class MatSelectorComponent {
	boxMaterial: Array<string> = [
		'White Plywood',
		'Gray Plywood',
		'Antracita Plywood',
		'Natural Plywood',
		'White Melamine',
		'Gray Melamine',
		'Antracita Melamine',
	];

	doorType: Array<string> = [
		'Slab Vertical',
		'Slab Horizontal',
		'Shaker Style',
		'Finger Pull',
		'No Doors',
	];
}
