import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rullan',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './rullan.html',
  styleUrl: './rullan.scss'
})
export class Rullan {
  fullName = signal('Harvey Laurence P. Rullan');
  imagePath = signal('assets/Rullan-Photo.jpg');
  role = signal('BSIT Student & Developer');
  description = signal(
    'I am Harvey Laurence P. Rullan, an enthusiastic IT student specializing in modern web technologies and software engineering. I love creating clean, accessible, and user-friendly web experiences.'
  );
  isDescriptionVisible = signal(false);

  toggleDescription(): void {
    this.isDescriptionVisible.update((isVisible) => !isVisible);
  }
}