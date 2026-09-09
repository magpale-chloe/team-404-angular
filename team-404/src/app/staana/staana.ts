import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-staana',
  imports: [],
  templateUrl: './staana.html',
  styleUrl: './staana.scss',
})
export class Staana {
  fullName = signal('Sta. Ana, Matthew E.');
}
