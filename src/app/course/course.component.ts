import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // courses = [1, 2];
  courses2 = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '}
  ];
  title = 'List of courses';

  course = {
      title: 'Example course. Some subtitle here',
      rating: 4.96,
      students: 123456,
      price: 99,
      releaseDate: new Date(2018, 8, 10),
      description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  };

  courses;  //  courses = ['course1', 'course2', 'course3']; // moved to courses.service.ts

  isActive = true;
  colSpan = 2;
  imageUrl = 'http://lorempixel.com/400/200'; // random image

  email = 'me@example.com';

  constructor(service: CoursesService) {
    // const service = new CoursesService();
     this.courses = service.getCourses();
 }

  ngOnInit() {
  }
  // courses List methods
  onAdd() {
    let count = this.courses.length;
    count++;
    this.courses.push({id: count, name: `course ${count}`});
  }
  onChange(course) {
        let idx = this.courses.indexOf(course);
        this.courses.splice(idx, 1);
  }
  onSave($event) {
    $event.stopPropagation(); // stop event bubbling
    console.log('Clicked!', $event);
  }
  onDivClicked() {
      console.log('onDivClicked!');
  }
  onKeyUp() {
    // console.log('enter!');
      console.log(this.email);
  }
  // onKeyUpEmail(email) {
  //     console.log(email);
  // }
}
