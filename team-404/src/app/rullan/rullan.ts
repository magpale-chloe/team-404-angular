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
}