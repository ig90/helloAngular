import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required, PasswordValidators.validOldPassword],
      newPass: ['', Validators.required],
      newPassConfirm: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
   }
   get oldPass() {
     return this.form.get('oldPass');
   }
   get newPass() {
     return this.form.get('newPass');
   }
   get newPassConfirm() {
     return this.form.get('newPassConfirm');
   }


}
