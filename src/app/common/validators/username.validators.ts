import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl ) {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
    static cannotContainBigLetters(control: AbstractControl ) {
        if ((control.value as string).match(/[A-Z]/)) {
            return { cannotContainBigLetters: true };
        }
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (control.value === 'tomasz') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve( null);
                }
            }, 2000);

        });

    }
}
