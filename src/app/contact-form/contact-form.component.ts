import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {


  log(txt) {
    console.log(txt);
  }


}
