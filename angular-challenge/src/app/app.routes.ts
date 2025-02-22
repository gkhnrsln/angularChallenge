import { Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonCreateComponent } from './person-create/person-create.component';

export const routes: Routes = [
    { 
      path: '', 
      redirectTo: 'home', 
      pathMatch: "full"
    },{ 
      path: 'home', 
      component: HomeComponent,
      title: 'Home'
    },{ 
      path: 'persons', 
      component: PersonListComponent,
      title: 'Persons'
    },{ 
      path: 'persons/:id', 
      component: PersonDetailsComponent
    },{
      path: 'create',
      component: PersonCreateComponent,
    },{
      path: 'edit/:id',
      component: PersonEditComponent,
    }
  ];
  