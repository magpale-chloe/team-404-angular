import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Magpale } from './magpale/magpale';

@Component({
  imports: [RouterOutlet, Magpale],
=======
import { Raquin } from './raquin/raquin';

@Component({
>>>>>>> 7020b33920d6a31fc03c9a3d0a02526da2e7589e
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