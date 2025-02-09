import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function birthdayValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const selectedDate = new Date(control.value);
        const currentDate = new Date();
        
        return selectedDate >= currentDate ? { futureDate: {value: control.value}} : null;
    };
}