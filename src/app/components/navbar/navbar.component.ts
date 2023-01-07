import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({ selector: 'app-navbar', templateUrl: './navbar.component.html', styleUrls: ['./navbar.component.less'] })
export class NavbarComponent implements AfterViewInit {
	constructor(private render: Renderer2) {}

	ngAfterViewInit(): void {
		this.resizeNavbar();
	}

	resizeNavbar() {
		var MARGIN = 20;
		var windowWidth = window.innerWidth;
		var searchContainerWidth = this.searchContainer?.nativeElement.offsetWidth;
		var navButtonsWidth = this.navButtons?.nativeElement.offsetWidth;
		var diff = (windowWidth - searchContainerWidth) / 2 - navButtonsWidth - MARGIN;
		if (diff < 0) {
			this.render.setStyle(this.searchBar?.nativeElement, 'width', `${searchContainerWidth + diff}px`);
		} else {
			this.render.setStyle(this.searchBar?.nativeElement, 'width', `${searchContainerWidth}px`);
		}
	}

	@ViewChild('searchContainer')
	searchContainer: ElementRef | undefined;
	@ViewChild('searchBar')
	searchBar: ElementRef | undefined;
	@ViewChild('navButtons')
	navButtons: ElementRef | undefined;
}
