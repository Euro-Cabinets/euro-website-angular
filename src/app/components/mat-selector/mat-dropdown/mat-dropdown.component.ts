import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-mat-dropdown',
	templateUrl: './mat-dropdown.component.html',
	styleUrls: ['./mat-dropdown.component.less'],
})
export class MatDropdownComponent {
	@Input() text!: string;
}
