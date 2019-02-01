import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });

  }

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Graphic Design'},
    {id: 4, name: 'Languages'}
  ];
  message = "Unchecked '30-day money-back guarantee.'\nAre you sure?";

  // form = new FormGroup({
  //   name: new FormGroup('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  submit(course) {
    if (course.isMoneyBackGuarantee === false || course.isMoneyBackGuarantee === '') {
      if (confirm(this.message)) {
        alert('OK!');
        console.log(course);
      }
    } else {
       alert('OK!');
       console.log(course);
    }
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = ''; // to clear input
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
