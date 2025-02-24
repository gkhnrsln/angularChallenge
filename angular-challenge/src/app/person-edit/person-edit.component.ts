import { Component, inject } from '@angular/core';
import { PersonService } from '../shared/service/person.service';
import { map, Observable, switchMap } from 'rxjs';
import { Person } from '../model/person';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { PersonsFormComponent } from '../persons-form/persons-form.component';

@Component({
  selector: 'app-person-edit',
  imports: [AsyncPipe, PersonsFormComponent, RouterLink],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.scss'
})
export class PersonEditComponent {
  private readonly personService = inject(PersonService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  person$: Observable<Person>;

  constructor() {
    this.person$ = this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.personService.getPerson(Number(id)))
    );
  }

  update(person: Person) {
    this.personService.updatePerson(person).subscribe(() => {
      this.router.navigate(['/persons', person.id]);
    });
  }
}
