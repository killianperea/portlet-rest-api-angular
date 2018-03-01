//CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from './animations/src/animations';
import { Http, RequestOptions, HttpModule } from '@angular/http';

//COMPONENT
import { AppComponent } from './app.component';

//HTTP 
import { Api, BASE_URL_SERVER, CATS_API } from '../services/api.service';
import { HeroesHttpApi } from '../services/heroes-http-service-api';

//STORES
import { HeroesHttpStore } from '../stores/heroes-http.store';

//PRIME NG
import { } from 'primeng-wl/primeng';
import 'chart.js/dist/Chart.min';


function apiFactory(http: Http, baseUrl: any, contextUri = '', requestOptions?: RequestOptions) {
	return new Api(http, `${baseUrl}${contextUri}`, requestOptions);
}

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [
		// REST
		{ provide: BASE_URL_SERVER, useValue: 'http://gateway.marvel.com/v1' },
		{ provide: CATS_API, useFactory: apiFactory, deps: [Http, BASE_URL_SERVER] },
		
		//API
		HeroesHttpApi,

		// STORES
		HeroesHttpStore

	],
	exports: []
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}