
// import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { catchError } from 'rxjs/operators';
// import { AppError } from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { BadInput } from '../common/bad-input';
import { DataService } from '../common/data.service';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

 // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

  // getPosts() {
  //   return this.http.get(this.url)
  //   .pipe(
  //     catchError(this.handleError));
  // }
  // createPost(post) {
  //   return this.http.post(this.url, JSON.stringify(post))
  //   .pipe(
  //     catchError(this.handleError));
  // }
  // updatePost(post) {
  //   // return this.http.put(this.url, JSON.stringify(post));
  //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  //   .pipe(
  //     catchError(this.handleError));
  // }
  // deletePost(id) {
  //   return this.http.delete(this.url + '/' + id)
  //    .pipe(
  //     catchError(this.handleError));
  // }
  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //     return throwError(new BadInput(error.json()));
  //   }
  //   if (error.status === 404) {
  //     return throwError(new NotFoundError(error));
  //   } else {
  //     return throwError(new AppError(error));
  //   }
  //   // .catch((error: Response) => { Observable.throw(new AppError())});
  //   // return throwError(new AppError(error.json()));
  // }

}
