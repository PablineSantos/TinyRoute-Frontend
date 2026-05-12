import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestModel } from '../../../core/models/register-request.model';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  username = '';
  password = '';

  private readonly API_URL = `${environment.apiUrl}/auth/register`;

  constructor(private readonly http: HttpClient, private readonly router: Router,private toastr: ToastrService) {}

  register(): void {
    const payload: RegisterRequestModel = {
      email: this.email,
      username: this.username || undefined,
      password: this.password
    };

    this.http.post<void>(this.API_URL, payload).subscribe({next: () => {
          this.toastr.success('Conta criada com sucesso! Faça seu login.', 'Bem-vinda!');
          this.router.navigate(['/login'], { state: { registeredEmail: this.email } });
        }, error: (err) => {
          const msg = err.error?.message || 'Erro ao registrar usuário';
          this.toastr.error(msg, 'Ops!');
        }
      });
  }
}
