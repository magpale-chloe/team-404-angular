import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-rullan',
  imports: [

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