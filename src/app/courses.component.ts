import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'app-courses', // <app-courses> "app-courses"
    template:  `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>

        <img [src]="imageUrl" />

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        `
})

export class CoursesComponent {

    title = 'List of courses';

    courses;  //  courses = ['course1', 'course2', 'course3']; // moved to courses.service.ts

    colSpan = 2;
    imageUrl = 'http://lorempixel.com/400/200';
    constructor(service: CoursesService) {
       // const service = new CoursesService();
        this.courses = service.getCourses();
    }

}
