import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }
  createPost(input: HTMLInputElement) {
      const post = {
        title: input.value
      };
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
    console.log('post created!' + input.value);
    input.value = ''; // to clear input field

  }
  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe( response => {
      console.log(response.json());
    });
   // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(`post ${post.id} deleted!`);
    });
  }
  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response => {
     //  console.log(response.json());
     this.posts = response.json();
    });
  }
}

