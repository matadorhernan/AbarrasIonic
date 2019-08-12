import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MenuComponent } from '../../components/home/menu/menu.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from '../../components/home/store/store.component';
import { StatsComponent } from '../../components/home/stats/stats.component';
import { ClientComponent } from '../../components/home/client/client.component';
import { SellComponent } from '../../components/home/sell/sell.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: 'home',
				component: HomePage,
				children: [
					{ path: '', redirectTo: '/home/(home:store)', pathMatch: 'full' },
					{ path: 'store', component: StoreComponent, outlet: 'home' },
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
		StatsComponent,
		ClientComponent,
		SellComponent,
		LoadingComponent
	]
})
export class HomePageModule {}
