import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = 'Authors';
  authors;

  constructor(service: AuthorsService) {
     this.authors = service.getAuthors();
  }
  // getNumberOfAuthors() {
  //   return this.authors.length;
  // }
  getTitle() {
    return this.title;
  }
  ngOnInit() {
  }

}
