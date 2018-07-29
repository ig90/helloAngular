import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'app-courses', // <app-courses> "app-courses"
    template:  `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}}         <button class="btn btn-primary">buy</button>
            </li>
        </ul>

        <img [src]="imageUrl" />

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>

        <button class="btn btn-primary">button</button>
        <button class="btn btn-primary" [class.active]="isActive">button</button>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Buton 3</button>
        <div (click)="onDivClicked()">  <!-- event bubbling -->
            <button class="btn btn-primary" (click)="onSave($event)">Save</button>
        </div>
        `,
    styleUrls: ['./course/course.component.css']

})

export class CoursesComponent {

    title = 'List of courses';

    courses;  //  courses = ['course1', 'course2', 'course3']; // moved to courses.service.ts

    isActive = true;
    colSpan = 2;
    imageUrl = 'http://lorempixel.com/400/200';
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

}
