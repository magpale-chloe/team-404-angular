import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Magpale } from './magpale/magpale';
import { Rullan } from './rullan/rullan';
import { Raquin } from './raquin/raquin';
import { Staana } from './staana/staana';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Raquin,
    Rullan,
    Magpale,
    Staana
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('team-404');
}