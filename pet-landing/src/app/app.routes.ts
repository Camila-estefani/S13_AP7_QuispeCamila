import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicesPage } from './pages/services-page/services-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { RopaPage } from './pages/ropa-page/ropa-page';
import { ReviewsPage } from './pages/reviews-page/reviews-page';
import { GestionPage } from './pages/gestion-page/gestion-page';
import { ListaVentasPage } from './features/ventas/pages/lista-ventas/lista-ventas';
import { NuevaVentaPage } from './features/ventas/pages/nueva-venta/nueva-venta';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: ServicesPage },
  { path: 'ropa', component: RopaPage },
  { path: 'reseñas', component: ReviewsPage },
  { path: 'contacto', component: ContactPage },
  { path: 'gestion', component: GestionPage },
  { path: 'ventas', component: ListaVentasPage },
  { path: 'ventas/nueva', component: NuevaVentaPage },
  { path: '**', redirectTo: '' }
];
