import {Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Person } from "../model/person";
import { PersonService } from '../shared/service/person.service';
import { birthdayValidator } from '../shared/validators/birthdayValidator';

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
  private readonly formBuilder = inject(FormBuilder);

  personForm: FormGroup;

  constructor() {
    this.personForm = this.formBuilder.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      birthday: ['', [Validators.required, birthdayValidator()]],
      mail: ['example@abc.com', Validators.email],
      phone: ['+0123456789'],
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const newPerson: Person = {
        id: Date.now(),
        firstName: this.personForm.value.firstName,
        lastName: this.personForm.value.lastName,
        birthday: this.personForm.value.birthday,
        mail: this.personForm.value.mail,
        phone: this.personForm.value.phone
      };
      this.personService.addPerson(newPerson);

      this.personForm.reset();
    }
  }
}
