import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

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

	constructor(
		private router: Router,
		private loadingService: LoadingService
	) {
		
		this.loadingService.homeLoading.subscribe(
			loading => {
				this.loadingTab = loading
			}
		);

	}
	ngOnInit() {
	}

	navigate(page: string) {

		if (!this.loadingTab && this.currentRoute != page) {
			this.lastRoute = this.currentRoute;
			this.currentRoute = page;

			this.loadingService.homeLoading.next(true);

			this.router.navigateByUrl(`/home/(home:${page})`);

			setTimeout(() => {
				this.loadingService.homeLoading.next(false);
			}, 300);

		} else if (this.currentRoute == 'menu') {

			this.currentRoute = this.lastRoute;
			this.loadingService.homeLoading.next(true);
			this.router.navigateByUrl(`/home/(home:${this.lastRoute})`);

			setTimeout(() => {
				this.loadingService.homeLoading.next(false);
			}, 300);

		}
	}
}
