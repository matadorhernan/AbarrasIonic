import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	constructor(private storage: Storage) {}

	setStorage(key: string, value: string): void {
		this.storage.set(key, value);
	}

	async getStorage(key: string): Promise<string> {
		return await this.storage.get(key);
	}

	deleteKey(key: string): void {
		this.storage.remove(key);
	}

	removeAll(): void{
		this.storage.clear()
	}
}
