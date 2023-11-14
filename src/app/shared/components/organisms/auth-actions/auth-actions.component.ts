import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {
  currentUser = null;
}
