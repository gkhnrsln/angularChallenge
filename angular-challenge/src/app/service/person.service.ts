import { inject, Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly http = inject(HttpClient);

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('./assets/persons.json').pipe(
      catchError(err => {
        console.error('Error loading persons', err);
        return of([]);
      })
    );
  }
}
