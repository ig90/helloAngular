
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePost(post) {
    // return this.http.put(this.url, JSON.stringify(post));
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
    //  .pipe(
    //   catchError((error: Response) => {
    //     return throwError(new AppError(error));
    //   }));
    // .catch((error: Response) => { Observable.throw(new AppError())});
  }
}
