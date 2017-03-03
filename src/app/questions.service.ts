import { Injectable } from '@angular/core';

import { Questions } from './questions/questions';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { Configuration } from './configuration';

@Injectable()
export class QuestionsService {

  private url: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
      this.url = _configuration.ServerWithApiUrl;

      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  insert(form: Questions): Observable<Questions> {
      return this._http.post(this.url + '/questions/save', form)
          .map((response: Response) => <Questions>response.json());
  }

  getAll(): Observable<Questions[]> {
    return this._http.get(this.url + '/questions/getall', null)
        .map((response: Response) => <Questions[]>response.json());
  }

  deleteAll(): Observable<String> {
      return this._http.post(this.url + '/questions/deleteall', null)
      .map((response: Response) => <String>response.json());
  }

  delete(id: String): Observable<String> {
      return this._http.post(this.url + '/questions/delete', { id: id })
          .map((response: Response) => <String>response.json());
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
