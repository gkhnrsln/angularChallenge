import { Component, inject } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Person } from 'src/app/model/person';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { PersonFormComponent } from '../person-form/person-form.component';
import { PersonService } from 'src/app/shared/service/person.service';

@Component({
  selector: 'app-person-edit',
  imports: [AsyncPipe, PersonFormComponent, RouterLink],
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
