import {Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Person } from 'src/app/model/person';
import { birthdayValidator } from 'src/app/shared/validators/birthdayValidator';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss'],
    standalone: true,
    imports: [
      ReactiveFormsModule
    ]
})
export class PersonFormComponent {
  @Input() person?: Person;
  @Output() submitPerson = new EventEmitter<Person>();
  
  ngOnChanges() :void {
    if (this.person) {
      this.setFormValues(this.person);
    }
  }

  personForm = new FormGroup({
      firstName: new FormControl('John', {
        nonNullable: true,
        validators: Validators.required
      }),
      lastName: new FormControl('Doe', {
        nonNullable: true,
        validators: Validators.required
      }),
      birthday: new FormControl(new Date(), {
        nonNullable: true,
        validators: [
          Validators.required, 
          birthdayValidator()
        ]
      }),
      mail: new FormControl('example@abc.com', {
        nonNullable: true,
        validators: Validators.email
      }),
      phone: new FormControl('+0123456789', {
        nonNullable: true
      }),
    });
  

  onSubmit() {
    const formValue = this.personForm.getRawValue();

    const newPerson: Person = {
      id: this.person?.id ?? Date.now(),
      ...formValue
    };
    this.submitPerson.emit(newPerson);
  }

  private setFormValues(person: Person) {
    this.personForm.patchValue(person);
  }
}
