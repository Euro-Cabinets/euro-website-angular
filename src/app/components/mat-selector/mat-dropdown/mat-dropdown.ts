import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-mat-dropdown',
	templateUrl: './mat-dropdown.html',
	styleUrls: ['./mat-dropdown.less', './_dropdown-mouseleave.less'],
})
export class MatDropdownComponent {
	@Input() defaultText!: string;
	@Input() options!: Array<string>;
	@Input() multi: boolean = false;

	isDropdownActive: boolean = false;
	isMultiActive: boolean = false;

	selectedItem: string = '';
	multiActiveDropdown: string = '';

	getMultiClass(option: string): String {
		if (this.isMultiActive) {
			if (option != this.multiActiveDropdown) {
				return 'multi-off';
			}
		}
		return '';
	}

	toggleDropdown() {
		this.reset();
		this.isDropdownActive = !this.isDropdownActive;
	}

	closeDropdown() {
		this.reset();
		this.isDropdownActive = false;
	}

	reset() {
		this.multiActiveDropdown = '';
		this.isMultiActive = false;
	}

	dropdownSelect(option: string) {
		console.log('test');
		if (this.multi) {
			if (this.isMultiActive) {
				this.reset();
			} else {
				this.multiActiveDropdown = option;
				this.isMultiActive = true;
			}
			return;
		}
		this.selectedItem = option;
		this.toggleDropdown();
	}

	multidropdownSelect(option: string, index: number) {
		this.selectedItem = option;
		this.isDropdownActive = false;
	}
}
