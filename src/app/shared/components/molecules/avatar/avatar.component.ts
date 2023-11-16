import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() imageAlt: string | undefined;

  ngOnInit() {
    console.log('URL ', this.imageUrl);
  }
}
