import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'app-courses', // <app-courses> "app-courses"
    template: './courses.component.html',
    styleUrls: ['./course/course.component.css']

})

export class CoursesComponent {

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
    imageUrl = 'http://lorempixel.com/400/200';

    email = 'me@example.com';

    constructor(service: CoursesService) {
       // const service = new CoursesService();
        this.courses = service.getCourses();
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
