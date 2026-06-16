/**
 * COMPONENTE RAÍZ
 * ────────────────
 * RouterOutlet: directiva que actúa como contenedor dinámico.
 * Angular reemplaza su contenido con el componente que corresponde
 * a la ruta activa, sin recargar el navegador (Single Page Application).
 *
 * Estructura: Header → <router-outlet> → Footer
 * El Header y Footer son permanentes; solo el <router-outlet> cambia.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    RouterOutlet,  // Importar RouterOutlet para usarlo en la plantilla
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
