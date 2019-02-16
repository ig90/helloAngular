import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
 // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service: PostService) {
  }
  createPost(input: HTMLInputElement) {
      const post = {
        title: input.value
      };
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
    console.log('post created!' + input.value);
    input.value = ''; // to clear input field

  }
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe( response => {
      console.log(response.json());
    });
  }
  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(`post ${post.id} deleted!`);
    });
  }
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
     //  console.log(response.json());
     this.posts = response.json();
    });
  }
}

