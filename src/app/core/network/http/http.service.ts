import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { NetworkRequest } from '../classes/NetworkRequest';
import { IRequestOptions, IRequestParams } from '../models/request.model';

@Injectable({
	providedIn: 'root'
})
export class HttpService extends NetworkRequest {

	private apiUrl: string = environment.apiUrl;

	constructor (
        override readonly http: HttpClient,
	) {
		super(http);
	}

	public get <T> (endpoint: string, options?: IRequestOptions): Observable<T> {
		return this.GET ({ url: this.getUrl(endpoint), options: options });
	}

	public getStandalone <T> (url: string, options: any): Observable<any> {
		return this.http.get<T> (url, options);
	}

	public post <T> (endpoint: string, body: T, options?: IRequestOptions): Observable<T> {
		return this.POST({ url: this.getUrl(endpoint), body: body, options: options });
	}

	public put <T> (endpoint: string, body: T, options?: IRequestOptions): Observable<T | ArrayBuffer> {
		return this.PUT({ url: this.getUrl(endpoint), body: body, options: options });
	}

	public patch <T> (endpoint: string, body: T, options?: IRequestOptions): Observable<T | ArrayBuffer> {
		return this.PATCH({ url: this.getUrl(endpoint), body: body, options: options });
	}

	public delete <T> (endpoint: string, options?: IRequestOptions): Observable<T | ArrayBuffer> {
		return this.DELETE({ url: this.getUrl(endpoint), options: options });
	}

	private getUrl (endpoint: string): string {
		return `${this.apiUrl}/${endpoint}`;
	}
}
