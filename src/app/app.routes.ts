import {Routes} from '@angular/router';
import {LoginComponent} from './features/auth/login/./login.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {RegisterComponent} from './features/auth/register/register.component';
import {AuthGuard} from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'my-urls',
    loadComponent: () =>
      import('./features/urls/url-list/url-list.component').then(m => m.UrlListComponent),
    canActivate: [AuthGuard]
  }
];
