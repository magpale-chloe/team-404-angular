import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Magpale } from './magpale/magpale';

@Component({
  imports: [RouterOutlet, Magpale],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('team-404');
}
