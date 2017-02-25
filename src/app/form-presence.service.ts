import { Injectable } from '@angular/core';

import { Form } from './home/form';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { Configuration } from './configuration';

@Injectable()
export class FormPresenceService {

  private url: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
      this.url = _configuration.ServerWithApiUrl;

      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  insert(form: Form): Observable<Form> {
      return this._http.post(this.url + '/form-presence/save', form)
          .map((response: Response) => <Form>response.json());
  }

  getAll(): Observable<Form[]> {
    return this._http.get(this.url + '/form-presence/getall', null)
        .map((response: Response) => <Form[]>response.json());
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
