import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SearchBarComponent } from './components/navbar/search-bar/search-bar.component';
import { NavButtonsComponent } from './components/navbar/nav-buttons/nav-buttons.component';
import { NavigationComponent } from './components/navbar/navigation/navigation.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent, ShopComponent, SearchBarComponent, NavButtonsComponent, NavigationComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
