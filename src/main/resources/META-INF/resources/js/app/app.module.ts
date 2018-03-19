//CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from './animations/src/animations';
import { Http, RequestOptions, HttpModule } from '@angular/http';

//COMPONENT
import { AppComponent } from './app.component';

//HTTP 
import { Api, BASE_URL_SERVER, API } from '../services/api.service';
import { HttpApi } from '../services/http-service-api';

//STORES
import { HttpStore } from '../stores/http.store';

//PRIME NG
import { DropdownModule, InputTextModule, ButtonModule, InputTextareaModule } from 'primeng-wl/primeng';
import 'chart.js/dist/Chart.min';
import * as Quill from 'quill';

/* Windows adds */
window['Quill'] = Quill;


function apiFactory(http: Http, baseUrl: any, contextUri = '', requestOptions?: RequestOptions) {
	return new Api(http, `${baseUrl}${contextUri}`, requestOptions);
}

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		DropdownModule,
		BrowserAnimationsModule,
		ButtonModule,
		InputTextareaModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [
		// REST
		{ provide: BASE_URL_SERVER, useValue: '' },
		{ provide: API, useFactory: apiFactory, deps: [Http, BASE_URL_SERVER] },
		
		//API
		HttpApi,

		// STORES
		HttpStore

	],
	exports: []
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}