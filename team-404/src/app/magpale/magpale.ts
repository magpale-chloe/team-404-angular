import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-magpale',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './magpale.html',
  styleUrl: './magpale.scss',
})
export class Magpale {
  name = signal('Precious Chloe Magpale');
  image = signal('assets/Magpale-Photo.jpg');
  role = signal('BSIT Student & Developer');

  description = signal(
    'I’m an IT student who enjoys learning about technology and making things through programming. I also love dancing and photography because they give me a way to be creative, have fun, and capture moments that I can look back on.'
  );

  isDescriptionVisible = signal(false);

  toggleDescription(): void {
    this.isDescriptionVisible.update(
      (isVisible) => !isVisible
    );
  }
}
