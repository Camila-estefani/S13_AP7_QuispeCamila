import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * AuthGuard — protege las rutas privadas.
 * Si el usuario NO está autenticado, redirige al /login.
 * Si SÍ está autenticado, permite el acceso.
 */
export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (auth.estaAutenticado()) {
    return true;
  }

  // Redirige al login si no hay sesión activa
  return router.createUrlTree(['/login']);
};
