import { Component } from '@angular/core';
import { PersonsComponent } from './persons/persons.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      PersonsComponent,
    ]
})
export class AppComponent {
  title = 'Angular Challenge';
}
