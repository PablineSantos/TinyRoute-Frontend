import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {ShortUrlModel} from '../../../core/models/short-url.model';
import {AuthFacade} from '../../../core/auth/auth.facade';
import {environment} from '../../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  urls: ShortUrlModel[] = [];

  constructor(private http: HttpClient, private router: Router, private authFacade: AuthFacade,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (this.authFacade.token) {
      this.router.navigate(['/dashboard']);
    }

    if (history.state?.registeredEmail) {
      this.email = history.state.registeredEmail;
    }
  }

  login(): void {
    this.http.post(`${environment.apiUrl}/auth/login`, {
      email: this.email,
      password:  this.password
    }, { responseType: 'text' })
      .subscribe({
        next: (token: string) => {
          this.authFacade.login(token);
          this.toastr.success('Bem-vinda de volta!', 'LoginComponent efetuado');
          const redirectUrl = history.state?.redirect ?? '/dashboard';
          this.router.navigate([redirectUrl]);
        },
        error: (): void => {
          this.toastr.error('E-mail ou senha incorretos.', 'Falha no login');
        }
      });
  }
}
