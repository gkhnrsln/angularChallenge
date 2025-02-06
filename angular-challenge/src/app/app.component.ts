import { Component } from '@angular/core';
import { PersonsComponent } from './persons/persons.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
    PersonsComponent,
    FooterComponent
]
})
export class AppComponent {
  title = 'Angular Challenge';
}
