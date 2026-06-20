/**
 * ROUTING CON AUTENTICACIÓN
 * ──────────────────────────────────────────────────────────────
 * canActivate: [authGuard]  → protege la ruta; si no hay sesión redirige a /login.
 * { path: 'login' }         → ruta pública (no protegida).
 * { path: '' }              → ruta raíz protegida con authGuard.
 * { path: '**' }            → wildcard, siempre al final, muestra la página 404.
 */

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

// Páginas de autenticación (pública)
import { LoginPage }     from './pages/login-page/login-page';

// Páginas principales (protegidas)
import { Home }          from './pages/home/home';
import { ServicesPage }  from './pages/services-page/services-page';
import { ProductosPage } from './pages/productos-page/productos-page';
import { ContactPage }   from './pages/contact-page/contact-page';

// Páginas adicionales (protegidas)
import { RopaPage }      from './pages/ropa-page/ropa-page';
import { ReviewsPage }   from './pages/reviews-page/reviews-page';
import { GestionPage }   from './pages/gestion-page/gestion-page';

// Módulo de ventas (protegido)
import { ListaVentasPage } from './features/ventas/pages/lista-ventas/lista-ventas';
import { NuevaVentaPage }  from './features/ventas/pages/nueva-venta/nueva-venta';

// Página 404
import { NotFoundPage } from './pages/not-found/not-found';

export const routes: Routes = [

  // ── Ruta pública — no requiere autenticación ─────────────
  { path: 'login', component: LoginPage, title: 'PetCare+ | Iniciar Sesión' },

  // ── Rutas protegidas — canActivate: [authGuard] ──────────
  { path: '',          component: Home,          canActivate: [authGuard], title: 'PetCare+ | Inicio' },
  { path: 'servicios', component: ServicesPage,  canActivate: [authGuard], title: 'PetCare+ | Servicios' },
  { path: 'productos', component: ProductosPage, canActivate: [authGuard], title: 'PetCare+ | Productos' },
  { path: 'contacto',  component: ContactPage,   canActivate: [authGuard], title: 'PetCare+ | Contacto' },
  { path: 'ropa',      component: RopaPage,      canActivate: [authGuard], title: 'PetCare+ | Ropa' },
  { path: 'reseñas',   component: ReviewsPage,   canActivate: [authGuard], title: 'PetCare+ | Reseñas' },
  { path: 'gestion',   component: GestionPage,   canActivate: [authGuard], title: 'PetCare+ | Gestión' },

  { path: 'ventas',       component: ListaVentasPage, canActivate: [authGuard], title: 'PetCare+ | Ventas' },
  { path: 'ventas/nueva', component: NuevaVentaPage,  canActivate: [authGuard], title: 'PetCare+ | Nueva Venta' },

  // ── Wildcard — siempre al final ───────────────────────────
  { path: '**', component: NotFoundPage, title: 'PetCare+ | No encontrada' }
];
