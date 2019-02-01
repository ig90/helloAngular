import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

 // isSubscribed = false;
  contactMethods = [
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'},
  ];

  log(txt) {
    console.log(txt);
  }
  submit(f) {
    console.log(f.value);
    if (f.value.contact.firstName === 'qwerty') {

      alert("hey, i don't like this name, please change it!");

    }
  }

}

