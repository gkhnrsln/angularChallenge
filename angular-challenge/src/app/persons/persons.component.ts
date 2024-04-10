import { Component, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../service/person.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(data => {
      data.forEach((person: Person) => {
        if (person.firstName && person.firstName.length > 0) {
          this.persons = data
            .filter((person: Person) => person && person.firstName)
            .sort((a: { firstName: string; }, b: { firstName: string; }) => {
              return a.firstName.localeCompare(b.firstName);
            });
        }
      })
    })
  }
}
