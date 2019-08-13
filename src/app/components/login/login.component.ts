import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private storageService: StorageService,
		private router:Router
	) {}

	public formLogin: FormGroup;
	public loginButtonText: string = 'Escriba su Login';

	ngOnInit() {
		this.formLogin = new FormGroup({
			username: new FormControl('testing@test.com', [
				Validators.email,
				Validators.required
			]),
			password: new FormControl('12345', [
				Validators.minLength(5),
				Validators.required
			])
		});

		this.formLogin.valueChanges.subscribe(form => {
			if (this.formLogin.valid) {
				this.loginButtonText = 'Login';
			} else {
				this.loginButtonText = 'Login Invalido';
			}
		});
	}

	sendLogin() {
		this.authService
			.authUser(this.formLogin.value.username, this.formLogin.value.password)
			.subscribe(
				login => {
					this.storageService.setStorage('abarras_user', JSON.stringify(login.user));
					this.authService.loggedIn.next(true);
					this.router.navigateByUrl('/home/(home:store)');
				},
				error => {
					this.loginButtonText = 'Login Incorrecto';
				}
			);
	}
}
