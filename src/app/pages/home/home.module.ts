import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MenuComponent } from '../../components/home/menu/menu.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from '../../components/home/stats/stats.component';
import { ClientComponent } from '../../components/home/client/client.component';
import { SellComponent } from '../../components/home/sell/sell.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { StoreComponent } from '../../components/home/store/store.component';
import { StoreAddComponent } from '../../components/home/store/store-add/store-add.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: 'home',
				component: HomePage,
				children: [
					{ path: '', redirectTo: '/home/store', pathMatch: 'full' },
					{ path: 'store', component: StoreComponent, outlet: 'home'},
					{ path: 'store/add', component: StoreAddComponent, outlet: 'home'},
					{ path: 'client', component: ClientComponent, outlet: 'home' },
					{ path: 'stats', component: StatsComponent, outlet: 'home' },
					{ path: 'sell', component: SellComponent, outlet: 'home' },
					{ path: 'menu', component: MenuComponent, outlet: 'home' }
				]
			}
		])
	],

	declarations: [
		HomePage,
		MenuComponent,
		StoreComponent,
		StoreAddComponent,
		StatsComponent,
		ClientComponent,
		SellComponent,
		LoadingComponent
	]
})
export class HomePageModule {}
