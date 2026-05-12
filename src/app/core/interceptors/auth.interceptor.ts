import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthFacade} from '../auth/auth.facade';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const token = authFacade.token;

  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }


  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {
        authFacade.logout();
        toastr.warning('Sua sessão expirou. Por favor, faça login novamente.', 'Atenção');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
