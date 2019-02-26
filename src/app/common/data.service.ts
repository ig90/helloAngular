import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
// import 'rxjs/add/operator/catch';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  // private url;

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }
  update(resource) {
    // return this.http.put(this.url, JSON.stringify(post));
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
    .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id)
     .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
    // .catch((error: Response) => { Observable.throw(new AppError())});
    // return throwError(new AppError(error.json()));
  }

}
