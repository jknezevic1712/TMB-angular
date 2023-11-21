import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { NewTrackerComponent } from '../../organisms/new-tracker-dialog/new-tracker.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, NewTrackerComponent],
  templateUrl: './tasks.component.html',
  styles: [
    ':host { display: flex; width: 100%; flex-direction: column; align-items: center; justify-items: flex-start; gap: 2rem}',
  ],
})
export class TasksComponent {}
