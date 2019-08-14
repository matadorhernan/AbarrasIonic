import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from '../../services/screen.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	public statusText: string = 'online';

	public currentRoute: string = 'store';
	public lastRoute: string;

	public loadingTab: boolean = false;
	public subMenuTab: boolean = false;

	constructor(private router: Router, private screenService: ScreenService) {
		this.screenService.homeSubMenu.subscribe(
			subMenu => (this.subMenuTab = subMenu)
		);

		this.screenService.homeLoading.subscribe(
			loading => (this.loadingTab = loading)
		);
	}
	ngOnInit() {}

	navigate(page: string) {

		if (this.subMenuTab){
			this.screenService.homeSubMenu.next(false);
		}
		
		if (!this.loadingTab && this.currentRoute != page) {
			this.lastRoute = this.currentRoute;
			this.currentRoute = page;
			this.screenService.homeLoading.next(true);
			this.router.navigateByUrl(`/home/(home:${page})`);

			setTimeout(() => {
				this.screenService.homeLoading.next(false);
			}, 300);

		} else if (this.currentRoute == 'menu') {

			this.currentRoute = this.lastRoute;
			this.screenService.homeLoading.next(true);
			this.router.navigateByUrl(`/home/(home:${this.lastRoute})`);

			setTimeout(() => {
				this.screenService.homeLoading.next(false);
			}, 300);
		}
	}
}
