import {Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Person} from "../model/person";
import { PersonService } from '../service/person.service';

@Component({
    selector: 'app-persons-form',
    templateUrl: './persons-form.component.html',
    styleUrls: ['./persons-form.component.scss'],
    standalone: true,
    imports: [
      ReactiveFormsModule
    ]
})
export class PersonsFormComponent {
  private readonly personService = inject(PersonService);
  
  personForm: FormGroup;

  constructor() {
    this.personForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required, this.validateBirthday])
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const newPerson: Person = {
        id: Date.now(),
        firstName: this.personForm.value.firstName,
        lastName: this.personForm.value.lastName,
        birthday: this.personForm.value.birthday
      };
      this.personService.addPerson(newPerson);

      this.personForm.reset();
    }
  }

  validateBirthday(control: FormControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      return { futureDate: true };
    }
    return null;
  }
}
