import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UrlCreateComponent} from '../../urls/url-create/url-create.component';
import {Navbar} from '../../../shared/components/navbar/';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UrlCreateComponent,Navbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
