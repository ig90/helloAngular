import { Injectable } from '@angular/core';
import { DataService } from '../common/data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/ig90/followers', http);
   }
}
