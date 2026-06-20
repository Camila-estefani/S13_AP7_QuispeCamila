import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  estaAutenticado = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Actualiza el estado en cada cambio de ruta
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.estaAutenticado = this.authService.estaAutenticado();
      });
    // Estado inicial
    this.estaAutenticado = this.authService.estaAutenticado();
  }
}
