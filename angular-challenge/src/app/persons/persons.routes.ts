import {Routes} from "@angular/router";
import { PersonDetailsComponent } from "../person-details/person-details.component";
import { PersonListComponent } from "../person-list/person-list.component";

export const PERSONS_ROUTES: Routes = [
  {
    path: '',
    component: PersonListComponent,
  },
  {
    path: ':id',
    component: PersonDetailsComponent,
  }
];
