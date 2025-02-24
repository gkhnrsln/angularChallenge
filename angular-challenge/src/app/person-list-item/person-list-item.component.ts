import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Person } from '../model/person';
import { DatePipe } from '@angular/common';
import { PersonService } from '../shared/service/person.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[app-person-list-item]',
  imports: [DatePipe, RouterLink],
  templateUrl: './person-list-item.component.html',
  styleUrl: './person-list-item.component.scss',

})
export class PersonListItemComponent {
  private readonly personService = inject(PersonService);
  @Input() person!: Person;
  @Output() deleted = new EventEmitter<number>();

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(() => {
      this.deleted.emit(this.person.id);
    });
  }
}
