import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
	selector: 'app-raquin',
	imports: [
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
	],
	templateUrl: './raquin.html',
	styleUrl: './raquin.scss'
})
export class Raquin {
	fullName = signal('Renz Mathieu M. Raquin');
	imagePath = signal('assets/images/Raquin-Photo.JPG');
	role = signal('BSIT Student & Developer');
	description = signal(
		'I am Renz Mathieu M. Raquin, a 4th year IT student with a passion for web development and software engineering. I aspire to create systems that can make a positive impact to society.'
	);
	isDescriptionVisible = signal(false);

	toggleDescription(): void {
		this.isDescriptionVisible.update((isVisible) => !isVisible);
	}
}