import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {AuthFacade} from '../auth/auth.facade';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authFacade = inject(AuthFacade);

  if (authFacade.token !== null) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
