import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-member-preview',
  styleUrl: './member-preview.scss',
  templateUrl: './member-preview.html',
})
export class MemberPreview {
  description = input<string>('');
}

