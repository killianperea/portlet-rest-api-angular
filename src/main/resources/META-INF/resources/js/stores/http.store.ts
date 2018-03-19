import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpApi } from '../services/http-service-api';

@Injectable()
export class HttpStore {

    constructor(
        private httpApi: HttpApi
    ) { }

    getRequest(url: string): Observable<any[]> {
        return this.httpApi.getRequest(url);
    }

    
    postRequest(url: string, payload: string): Observable<any[]> {
        return this.httpApi.postRequest(url, payload);
    }
}