import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthActionsComponent } from '../auth-actions/auth-actions.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AuthActionsComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
