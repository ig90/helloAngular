import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './course/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { CardComponent } from './card/card.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    CardComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
