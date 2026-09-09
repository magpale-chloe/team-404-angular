import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-magpale',
  styleUrl: './magpale.scss',
  templateUrl: './magpale.html',
})
export class Magpale {
  name = signal('Precious Chloe Magpale');
  image = signal('assets/Magpale-Photo.jpg');
}
