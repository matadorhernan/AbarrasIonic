import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
	constructor(private router: Router, private loadingService: LoadingService) {}

	ngOnInit() {}

	public navigate(childPage: string) {
		this.loadingService.homeLoading.next(true);
		this.router.navigateByUrl(`/home/(home:store/${childPage})`);

		setTimeout(() => {
			this.loadingService.homeLoading.next(false);
		}, 300);
	}
}
