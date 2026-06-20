import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Credenciales simuladas (en una app real vendrían del backend)
const CREDENCIALES = [
  { email: 'admin@petcare.com',  password: '123456' },
  { email: 'camila@petcare.com', password: 'mascotas2026' }
];

const SESSION_KEY = 'petcare_session';

export interface UsuarioSesion {
  email: string;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  // ── Login ────────────────────────────────────────────
  login(email: string, password: string): boolean {
    const encontrado = CREDENCIALES.find(
      c => c.email === email.trim().toLowerCase() && c.password === password
    );

    if (encontrado) {
      const usuario: UsuarioSesion = {
        email: encontrado.email,
        nombre: encontrado.email.split('@')[0]
      };
      // Guardamos la sesión en sessionStorage (se limpia al cerrar el navegador)
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  // ── Logout ───────────────────────────────────────────
  logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
    this.router.navigate(['/login']);
  }

  // ── Estado de sesión ─────────────────────────────────
  estaAutenticado(): boolean {
    return !!sessionStorage.getItem(SESSION_KEY);
  }

  getUsuario(): UsuarioSesion | null {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }
}
