import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-mat-dropdown',
	templateUrl: './mat-dropdown.html',
	styleUrls: ['./mat-dropdown.less'],
})
export class MatDropdownComponent {
	@Input() text!: string;
}
