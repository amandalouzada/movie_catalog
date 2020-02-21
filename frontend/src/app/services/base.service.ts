import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected api: string;
	protected headers: HttpHeaders;
	protected token: string;
	constructor() {
		if (localStorage.getItem('token')) this.token = localStorage.getItem('token');

		this.api = environment.api;
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', this.token);
	}

	updateToken(){
		if (localStorage.getItem('token')) this.token = localStorage.getItem('token');
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', this.token);
	}

}
