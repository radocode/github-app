import { Component } from '@angular/core';
import { DarkToggleService } from './services/dark-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  darkMode = this.darkToggleService.toggleState$;

  constructor(private darkToggleService: DarkToggleService) {}
}
