import { Component } from '@angular/core';
import { HeroesHttpStore } from '../stores/heroes-http.store';

@Component({
	selector: 'app',
	templateUrl: '/o/test-http-liferay/js/app/app.html'
})
export class AppComponent {

	caption = 'Hello world!';

	constructor(
		private heroesHttpStore: HeroesHttpStore
	) { }


	ngOnInit() {
		this.heroesHttpStore.getHeroes().subscribe((data) => {
			console.log(data);
		})
	}

}