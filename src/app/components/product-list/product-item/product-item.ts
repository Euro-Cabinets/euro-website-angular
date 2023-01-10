import { Component } from '@angular/core';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.html',
	styleUrls: [
		'./product-item.less',
		'./_cart-functions.less',
		'./_options-container.less',
		'./_product-info.less',
		'./_icon-set.less',
	],
})
export class ProductItemComponent {
	activeViewType: Number = 1;

	isWidthEnabled: boolean = true;
	isHeightEnabled: boolean = false;
	isDepthEnabled: boolean = false;

	onViewTypeChange(id: Number) {
		this.activeViewType = id;
	}

	onViewZoom() {
		// TODO: Do Something
	}

	onAddToCart() {
		// TODO: Do Something
	}

	onQtyDropdown() {
		// TODO: Do Something
	}

	onNotesDropdown() {
		// TODO: Do Something
	}

	onWidthClick() {
		if (!this.isWidthEnabled) return;
		// TODO: Do Something
	}

	onHeightClick() {
		if (!this.isHeightEnabled) return;
		// TODO: Do Something
	}

	onDepthClick() {
		if (!this.isDepthEnabled) return;
		// TODO: Do Something
	}
}
