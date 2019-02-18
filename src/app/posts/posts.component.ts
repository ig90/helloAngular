import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';

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
    this.service.create(post)
      .subscribe(newPost => {
           post['id'] = newPost.id;
           this.posts.splice(0, 0, post);
           console.log(newPost.json());
        },
        (error: AppError) => {
          if (error instanceof BadInput) {  // 400
         //   this.form.setErrors(error.originalError); // if we had a form
          } else { throw error; }
        });
    console.log('post created!' + input.value);
    input.value = ''; // to clear input field

  }
  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
           console.log(updatedPost);
        });
  }
  deletePost(post) {
    this.service.delete(post.id)
      .subscribe( () => {
           const index = this.posts.indexOf(post);
           this.posts.splice(index, 1);
           console.log(`post ${post.id} deleted!`);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) { // 404
            alert('This post has already been deleted');
          } else { throw error; }
        });
  }
  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }
}
