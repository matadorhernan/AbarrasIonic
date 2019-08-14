import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.scss'],
})
export class StoreAddComponent implements OnInit {
  public productForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
			name: new FormControl('', [
				Validators.minLength(5),
			]),
			upc: new FormControl('', [
				Validators.minLength(5),
			]),
			price: new FormControl('', [
				Validators.minLength(5),
			]),
			description: new FormControl('', [
				Validators.minLength(5),
			]),
		})
  }

}
