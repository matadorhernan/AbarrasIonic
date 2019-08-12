import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	public statusText: string = 'online';
	public currentRoute: string = 'store';
	public lastRoute:string;
	public loadingTab: boolean = false;

	constructor(private authService: AuthService, private router: Router) {}
	ngOnInit() {}

	navigate(page: string) {

		if (!this.loadingTab && this.currentRoute != page) {

			this.lastRoute = this.currentRoute;
			this.currentRoute = page;
			this.loadingTab = true;
			this.router.navigateByUrl(`/home/(home:${page})`);

			setTimeout(() => {
				this.loadingTab = false;
			}, 500);

		} else if (this.currentRoute == 'menu' ){

			this.currentRoute = this.lastRoute;
			this.loadingTab = true;
			this.router.navigateByUrl(`/home/(home:${this.lastRoute})`);

			setTimeout(() => {
				this.loadingTab = false;
			}, 500);

		}
	}
}
