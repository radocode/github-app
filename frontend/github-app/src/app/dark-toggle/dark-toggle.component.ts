import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkToggleService } from 'src/app/services/dark-toggle.service';

@Component({
  selector: 'app-dark-toggle',
  templateUrl: './dark-toggle.component.html',
  styleUrls: ['./dark-toggle.component.css'],
})
export class DarkToggleComponent implements OnInit {
  darkMode = this.darkToggleService.toggleState$;

  constructor(private darkToggleService: DarkToggleService) {}

  ngOnInit(): void {}

  toggle() {
    this.darkToggleService.emitData();
  }
}
