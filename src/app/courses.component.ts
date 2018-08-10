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

        {{course.title | uppercase}} <br>
        {{course.students}} <br>
        {{course.rating | number:'1.2-2'}} <br>
        {{course.price | currency:'PLN'}} <br>
        {{course.releaseDate | date:'d.M.y'}} <br>

        <button class="btn btn-primary">button</button>
        <button class="btn btn-primary" [class.active]="isActive">button</button>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Buton 3</button>
        <div (click)="onDivClicked()">  <!-- event bubbling -->
            <button class="btn btn-primary" (click)="onSave($event)">Save</button>
        </div>
        <!-- <input (keyup.enter)="onKeyUp()" /> --> <br>
       <!--  <input #email (keyup.enter)="onKeyUpEmail(email.value)" placeholder="email" /> -->
        <br>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        `,
    styleUrls: ['./course/course.component.css']

})

export class CoursesComponent {

    title = 'List of courses';

    course = {
        title: 'Example course',
        rating: 4.96,
        students: 123456,
        price: 99,
        releaseDate: new Date(2018, 8, 9)
    }

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
