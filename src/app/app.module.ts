import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterSectionComponent } from './components/filter-section/filter-section';
import { FooterComponent } from './components/footer/footer';
import { MatDropdownComponent } from './components/mat-selector/mat-dropdown/mat-dropdown';
import { MatSelectorComponent } from './components/mat-selector/mat-selector';
import { NavButtonsComponent } from './components/navbar/nav-buttons/nav-buttons';
import { NavbarComponent } from './components/navbar/navbar.';
import { NavigationComponent } from './components/navbar/navigation/navigation';
import { SearchBarComponent } from './components/navbar/search-bar/search-bar';
import { ProductItemComponent } from './components/product-list/product-item/product-item';
import { ProductListComponent } from './components/product-list/product-list';
import { SideCartComponent } from './components/side-cart/side-cart';
import { SideCartItemComponent } from './components/side-cart/side-cart-item/side-cart-item';
import { HomeComponent } from './pages/home/home';
import { ShopComponent } from './pages/shop/shop';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		FooterComponent,
		ShopComponent,
		SearchBarComponent,
		NavButtonsComponent,
		NavigationComponent,
		MatSelectorComponent,
		MatDropdownComponent,
		FilterSectionComponent,
		ProductListComponent,
		ProductItemComponent,
		SideCartComponent,
		SideCartItemComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
