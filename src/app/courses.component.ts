import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'app-courses', // <app-courses> "app-courses"
    template:  `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>
        `
})

export class CoursesComponent {

    title = 'List of courses';

    courses;  //  courses = ['course1', 'course2', 'course3']; // moved to courses.service.ts

    constructor(service: CoursesService) {
       // const service = new CoursesService();
        this.courses = service.getCourses();
    }

}
