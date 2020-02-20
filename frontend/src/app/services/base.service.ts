import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected api: string;
	protected headers: HttpHeaders
	constructor() {
		this.api = environment.api;
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
	}

}
