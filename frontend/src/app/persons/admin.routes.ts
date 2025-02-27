import {Routes} from "@angular/router";
import { PersonCreateComponent } from "../admin/person-create/person-create.component";
import { PersonEditComponent } from "../admin/person-edit/person-edit.component";


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: "full"
  },
  {
    path: 'create',
    component: PersonCreateComponent,
  },
  {
    path: 'edit/:id',
    component: PersonEditComponent,
  }
];
