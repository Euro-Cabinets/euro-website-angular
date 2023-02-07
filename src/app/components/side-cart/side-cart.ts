import { Component } from '@angular/core';
import { ProductItem } from 'src/app/interfaces/ProductItem';

@Component({
	selector: 'app-side-cart',
	templateUrl: './side-cart.html',
	styleUrls: ['./side-cart.less'],
})
export class SideCartComponent {
	private cartItems: Array<ProductItem> = [];

	getCartItems(): Array<ProductItem> {
		return this.cartItems;
	}

	addCartItem(productItem: ProductItem) {
		// TODO: check if profuct item already exists
		// TODO: if true then add quantity to existing item
		// TODO: if false then add new item to list
		this.cartItems.push(productItem);
	}

	removeCartItem(productItem: ProductItem) {
		this.cartItems.splice(this.cartItems.indexOf(productItem));
	}
}
