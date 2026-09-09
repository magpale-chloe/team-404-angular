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
<<<<<<< HEAD
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
=======
>>>>>>> e48e4cc (Add Magpale's Step 3)
}
