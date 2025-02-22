import { Component, inject } from '@angular/core';
import { PersonService } from "../shared/service/person.service";
import { PersonListItemComponent } from "../person-list-item/person-list-item.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-persons',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    standalone: true,
    imports: [
      RouterLink,
      PersonListItemComponent
    ]
})
export class PersonListComponent {
  private readonly personService = inject(PersonService);
  title = 'Table of Persons';
  persons = this.personService.persons;

}
