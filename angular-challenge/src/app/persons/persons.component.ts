import { Component, inject, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";
import { PersonsFormComponent } from '../persons-form/persons-form.component';
import {Observable} from "rxjs";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss'],
    standalone: true,
    imports: [
      PersonsFormComponent,
      DatePipe
    ]
})
export class PersonsComponent implements OnInit {
  private readonly personService = inject(PersonService);
  persons$: Observable<Person[]>;

  persons: Person[] = [];

  constructor() {
    this.persons$ = this.personService.getPersons();
   }

  ngOnInit(): void {
    this.persons$.subscribe(loadedPersons => {
      this.persons = loadedPersons
        .filter((person: Person) => person.firstName)
        .sort((a: Person, b: Person) => a.firstName.localeCompare(b.firstName));
    });
  }

  deletePerson(person: Person) {
    const index = this.persons.indexOf(person);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}
