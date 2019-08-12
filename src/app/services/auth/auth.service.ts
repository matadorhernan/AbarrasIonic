import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private storageService: StorageService,
		private http: HttpClient
	) {}

	public loggedIn = new BehaviorSubject(false);

	public authUser(email: string, password: string): Observable<any> {
		return this.http.post(
			`${environment.api}/auth/login`,
			{ email, password },
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	
}
