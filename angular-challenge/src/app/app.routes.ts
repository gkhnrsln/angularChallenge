import { Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full"},
    { path: 'home', component: HomeComponent, title: "Start"},
    { path: 'persons', component: PersonsComponent, title: "Persons"},
  ];
  