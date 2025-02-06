import { Component, inject, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";
import { PersonsFormComponent } from '../persons-form/persons-form.component';
import {Observable} from "rxjs";
import { DatePipe, AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-persons',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    standalone: true,
    imports: [
      PersonsFormComponent,
      DatePipe,
      AsyncPipe
    ]
})
export class PersonListComponent implements OnInit {
  private readonly personService = inject(PersonService);
  persons$: Observable<Person[]>;
  persons: Person[] = [];
  title = 'Table of Persons';

  constructor() {
    this.persons$ = this.personService.getAll();
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
