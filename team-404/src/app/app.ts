import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Magpale } from './magpale/magpale';
import { Rullan } from './rullan/rullan';
import { Raquin } from './raquin/raquin';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Raquin,
    Rullan,
    Magpale
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('team-404');
}