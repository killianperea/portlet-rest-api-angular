import { Component } from '@angular/core';
import { HttpStore } from '../stores/http.store';

@Component({
	selector: 'app',
	templateUrl: '/o/test-http-liferay/js/app/app.html'
})
export class AppComponent {

	public restTypes: Object[] = [{ label: 'GET', value: 'GET' }, { label: 'POST', value: 'POST' }];
	public restType: string = 'GET';
	public urlRequest: string;
	public payload: string;
	public response: any;

	constructor(
		private httpStore: HttpStore
	) { }


	ngOnInit() {
	}

	doRequest() {
		console.log(`${this.restType} + ${this.urlRequest}`);
		if (this.restType === 'GET') {
			this.httpStore.getRequest(this.urlRequest).subscribe((data: any) => {
				this.response = data._body;
			})
		} else {
			this.httpStore.postRequest(this.urlRequest, this.payload).subscribe((data: any) => {
				this.response = data._body;
			})
		}

	}

}