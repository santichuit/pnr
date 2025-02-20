import { Component } from '@angular/core';
import pkg from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Payoneer';
  appVersion: string = pkg.version;
}
