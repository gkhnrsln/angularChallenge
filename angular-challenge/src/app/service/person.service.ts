import { inject, Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // private apiUrl = 'https://api.example.com';

  private readonly http = inject(HttpClient);

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>('./assets/persons.json').pipe(
      catchError(err => {
        console.error('Error loading persons', err);
        return of([]);
      })
    );
  }

  /* 
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/persons`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }
  
  getSingle(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/persons/${id}`);
  }

  remove(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/persons/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/persons`, person);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/persons/${person.id}`, person);
  }
  */

}
