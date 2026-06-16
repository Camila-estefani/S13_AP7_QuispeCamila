/**
 * CONFIGURACIÓN DE LA APLICACIÓN
 * ────────────────────────────────
 * provideRouter(routes)         : registra el arreglo de Routes en el inyector de Angular.
 * withComponentInputBinding()   : permite pasar parámetros de ruta como @Input() en componentes.
 * provideHttpClient()           : habilita el cliente HTTP para consumir APIs REST.
 */
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Registra las rutas y activa el binding de parámetros como @Input
    provideRouter(routes, withComponentInputBinding()),
    // Habilita HttpClient para todos los servicios de la app
    provideHttpClient()
  ]
};
