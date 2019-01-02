import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    title: 'Title',
    isFavorite: false
  };

  tweet = {
    body: '...',
    likesCount: 0,
    isLiked: false
  };

  // courses = [1, 2];
  courses = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '}
  ];

  viewMode = 'map';

  changeViewMode(viewMode) {
      this.viewMode = viewMode;
  }

  // onFavoriteChanged(isFavorite) {
  //   console.log('favorite changed to', isFavorite);
  // }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed to', eventArgs);
  }
}
