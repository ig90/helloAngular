import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise ((resolve) => {
            if (control.value !== '123456') {
                resolve({ invalidOldPassword: true });
            } else {
                resolve(null);
            }

        });
    }
    static passwordsShouldMatch(control: AbstractControl) {

        const newPass = control.get('newPass');
        const newPassConfirm = control.get('newPassConfirm');

            if ( newPass.value !== newPassConfirm.value ) {
                return { passwordsShouldMatch: true };
            } else {
                return null;
            }
    }
}