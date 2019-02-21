import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { CoursesComponent } from './courses.component';


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

  canSave = true;

  // for safe traversal operator example
  task = {
    title: 'Review application',
    assignee: {
      name: 'Jan Kowalski'
    }
  };

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
