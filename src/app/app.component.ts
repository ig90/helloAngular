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

  // onFavoriteChanged(isFavorite) {
  //   console.log('favorite changed to', isFavorite);
  // }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed to', eventArgs);
  }
}
