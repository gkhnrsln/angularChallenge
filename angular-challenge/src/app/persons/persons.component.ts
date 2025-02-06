import { Component, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss'],
    standalone: false
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(loadedPersons => {
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
