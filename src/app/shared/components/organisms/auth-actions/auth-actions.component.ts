import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './auth-actions.component.html',
})
export class AuthActionsComponent {
  currentUser = null;
}
