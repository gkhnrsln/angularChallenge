import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any> {
    return this.http.get<any>('https://aracom.de/api/persons.php');
  }
}
