import { Routes } from '@angular/router';
import { TasksComponent } from './shared/components/templates/tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'welcome',
  // component: WelcomeComponent,
  // canActivate: [AuthGuard]
  // },
];
