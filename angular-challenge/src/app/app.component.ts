import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      FooterComponent,
      MenuComponent,
      RouterOutlet,
    ]
})
export class AppComponent {
  title = 'Angular Challenge';
}
