import { Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [
    { 
      path: '', 
      redirectTo: 'home', 
      pathMatch: "full"
    },{ 
      path: 'home', 
      component: HomeComponent
    },{ 
      path: 'persons', 
      component: PersonListComponent
    },{ 
      path: 'persons/:id', 
      component: PersonDetailsComponent
    },
  ];
  