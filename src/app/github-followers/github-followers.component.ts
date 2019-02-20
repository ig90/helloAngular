import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      this.service.getAll()
      .subscribe(
        followers => this.followers = followers);
    });
    /*
    this.route.paramMap
    .subscribe(params => {} );
      // const id = this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap
    .subscribe(params => {} );
      // const page = this.route.snapshot.queryParamMap.get('page');

    this.service.getAll()
    .subscribe(
      followers => this.followers = followers
    );
    */

  }

}