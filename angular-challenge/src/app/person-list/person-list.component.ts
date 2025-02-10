import { Component, inject, OnInit } from '@angular/core';
import { PersonService } from "../shared/service/person.service";
import { PersonsFormComponent } from '../persons-form/persons-form.component';
import { PersonListItemComponent } from "../person-list-item/person-list-item.component";

@Component({
    selector: 'app-persons',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    standalone: true,
    imports: [
      PersonsFormComponent,
      PersonListItemComponent
    ]
})
export class PersonListComponent implements OnInit {
  private readonly personService = inject(PersonService);
  title = 'Table of Persons';
  persons = this.personService.persons;

  ngOnInit(): void {
    /*
    this.persons$.subscribe(loadedPersons => {
      this.persons = loadedPersons
        .filter((person: Person) => person.firstName)
        .sort((a: Person, b: Person) => a.firstName.localeCompare(b.firstName));
    });
    */
  }

}
