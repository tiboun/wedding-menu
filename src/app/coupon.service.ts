import { Injectable } from '@angular/core';

import { Coupon } from './coupon/coupon';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { Configuration } from './configuration';

@Injectable()
export class CouponService {

  private url: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
      this.url = _configuration.ServerWithApiUrl;

      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  insert(coupon: Coupon): Observable<Coupon> {
      return this._http.post(this.url + '/coupon/save', coupon)
          .map((response: Response) => <Coupon>response.json());
  }

  getAll(): Observable<Coupon[]> {
    return this._http.get(this.url + '/coupon/getall', null)
        .map((response: Response) => <Coupon[]>response.json());
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
