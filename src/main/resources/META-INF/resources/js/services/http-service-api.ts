import { Inject, Injectable, Optional } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpApi {
  constructor(
    private http: Http,
    @Optional() private defaultOptions: RequestOptions) {
  }

  getRequest(url: string): Observable<any> {
    let defaultOptions = this.defaultOptions
    defaultOptions.headers.set('Accept', 'application/json')
    return this.http.get(url)
      .map(function (res) {
        return res;
      });
  }

  postRequest(url: string, payload: string): Observable<any> {
    let defaultOptions = this.defaultOptions
    defaultOptions.headers.set('Accept', 'application/json')
    return this.http.post(url, payload)
      .map(function (res) {
        return res;
      });;
  }
}
