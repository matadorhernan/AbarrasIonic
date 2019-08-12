import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage/storage.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public user;

	constructor(
		private authService: AuthService,
    private storageService: StorageService,
    private router:Router
	) {
		this.storageService.getStorage('abarras_user').then(user => {
			console.log(JSON.parse(user));
			this.user = JSON.parse(user);
		});
	}

	logOff() {
    this.authService.loggedIn.next(false);
    this.storageService.removeAll();
    this.router.navigateByUrl('/home/(home:store)');
	}

	ngOnInit() {}
}
