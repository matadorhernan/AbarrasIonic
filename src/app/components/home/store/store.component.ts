import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenService } from '../../../services/screen.service';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
	constructor(private router: Router, private screenService: ScreenService) {}

	ngOnInit() {}

	public navigate(childPage: string) {
		this.screenService.homeLoading.next(true);
		this.router.navigateByUrl(`/home/(home:store/${childPage})`);

		setTimeout(() => {
			this.screenService.homeLoading.next(false);
			this.screenService.homeSubMenu.next(true);
		}, 300);
	}
}
