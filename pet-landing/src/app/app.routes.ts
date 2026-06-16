/**
 * ROUTING EN ANGULAR — Conceptos aplicados
 * ─────────────────────────────────────────
 * Routes: arreglo que mapea rutas (path) a componentes.
 * RouterLink: directiva para navegar entre rutas en la plantilla (sin recargar el navegador).
 * RouterOutlet: placeholder en app.html donde Angular renderiza el componente activo.
 * RouterLinkActive: aplica una clase CSS cuando la ruta está activa.
 * provideRouter(routes): registra las rutas en el sistema de inyección de Angular (app.config.ts).
 */

import { Routes } from '@angular/router';

// Páginas principales
import { Home }          from './pages/home/home';
import { ServicesPage }  from './pages/services-page/services-page';
import { ProductosPage } from './pages/productos-page/productos-page';
import { ContactPage }   from './pages/contact-page/contact-page';

// Páginas adicionales
import { RopaPage }      from './pages/ropa-page/ropa-page';
import { ReviewsPage }   from './pages/reviews-page/reviews-page';
import { GestionPage }   from './pages/gestion-page/gestion-page';

// Módulo de ventas (feature module)
import { ListaVentasPage } from './features/ventas/pages/lista-ventas/lista-ventas';
import { NuevaVentaPage }  from './features/ventas/pages/nueva-venta/nueva-venta';

// Página 404
import { NotFoundPage } from './pages/not-found/not-found';

export const routes: Routes = [
  // Ruta raíz — muestra el componente Home en "/"
  { path: '',           component: Home,          title: 'PetCare+ | Inicio' },

  // Rutas principales del menú de navegación
  { path: 'servicios',  component: ServicesPage,  title: 'PetCare+ | Servicios' },
  { path: 'productos',  component: ProductosPage, title: 'PetCare+ | Productos' },
  { path: 'contacto',   component: ContactPage,   title: 'PetCare+ | Contacto' },

  // Rutas adicionales
  { path: 'ropa',       component: RopaPage,      title: 'PetCare+ | Ropa' },
  { path: 'reseñas',    component: ReviewsPage,   title: 'PetCare+ | Reseñas' },
  { path: 'gestion',    component: GestionPage,   title: 'PetCare+ | Gestión' },

  // Rutas del módulo de ventas
  { path: 'ventas',        component: ListaVentasPage, title: 'PetCare+ | Ventas' },
  { path: 'ventas/nueva',  component: NuevaVentaPage,  title: 'PetCare+ | Nueva Venta' },

  // Wildcard: cualquier ruta no definida redirige a NotFoundPage
  // El "**" debe ir siempre al final del arreglo de rutas
  { path: '**', component: NotFoundPage, title: 'PetCare+ | Página no encontrada' }
];
