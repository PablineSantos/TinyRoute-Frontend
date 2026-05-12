import { Component } from '@angular/core';
import {AuthFacade} from '../../../core/auth/auth.facade';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  imports:[RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public authFacade: AuthFacade, private router: Router,private toastr: ToastrService) {}

  logout() {
    this.authFacade.logout();
    this.toastr.info('Você saiu da sua conta com sucesso.', 'Até logo!'); // <-- 3. Adicione a mensagem
    this.router.navigate(['/']);
  }
}
