import { Component, inject } from '@angular/core';
import { PersonService } from '../shared/service/person.service';
import { Person } from '../model/person';
import { Router, RouterLink } from '@angular/router';
import { PersonsFormComponent } from '../persons-form/persons-form.component';

@Component({
  selector: 'app-person-create',
  imports: [PersonsFormComponent, RouterLink],
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.scss'
})
export class PersonCreateComponent {
  private readonly personService = inject(PersonService);
    private readonly router = inject(Router);
  
  create(person: Person) {
    this.personService.addPerson(person).subscribe(() => {
      this.router.navigate(['/persons', person.id]);
    });
  }
}
