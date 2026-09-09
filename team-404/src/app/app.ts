import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Raquin } from './raquin/raquin';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Raquin
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('team-404');
}