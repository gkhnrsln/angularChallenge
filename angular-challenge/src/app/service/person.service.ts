import { inject, Injectable, signal, Signal } from '@angular/core';
import { Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Person} from "../model/person";
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly dataUrl = './assets/persons.json';
  private readonly http = inject(HttpClient);
  private readonly _persons = signal<Person[]>([]);

  get persons(): Signal<Person[]> {
    return this._persons.asReadonly();
  }

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData() {
    const storedData = sessionStorage.getItem('persons');
  
    if (storedData) {
      this._persons.set(JSON.parse(storedData));
    } else {
      this.http.get<Person[]>(this.dataUrl).subscribe(persons => {
        this.updateSessionStorage(persons);
      });
    }
  }

  getPersons(): Observable<Person[]> {
    const storedDate = sessionStorage.getItem('persons');
    if (storedDate) {
      const persons = JSON.parse(storedDate);
      this._persons.set(persons);
      return of(persons);
    } else {  
      return this.http.get<Person[]>(this.dataUrl).pipe(
        map(persons => {
          this.updateSessionStorage(persons);
          return persons;
        }),
        catchError(err => {
          console.error(err);
          return of([]);
        })
      )
    };
  }

  addPerson(person: Person) {
    const storedDate = sessionStorage.getItem('persons');
    if (storedDate) {
      const persons = JSON.parse(storedDate);
      persons.push(person);
      this.updateSessionStorage(persons);
    }
  }

  deletePerson(id: number) {
    const storedDate = sessionStorage.getItem('persons');
    if (storedDate) {
      const persons = JSON.parse(storedDate);
      for(let i = 0; i < persons.length; i++) {
        if(persons[i].id == id) {
          persons.splice(i, 1);
        }
      }
      this.updateSessionStorage(persons);
    }
  }

  private updateSessionStorage(persons: Person[]): void {
    sessionStorage.setItem('persons', JSON.stringify(persons));
    this._persons.set(persons);
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
