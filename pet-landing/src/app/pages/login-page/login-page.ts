import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  errorMsg   = '';
  cargando   = false;
  mostrarPass = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Si ya hay sesión activa, redirige directo al inicio
    if (this.authService.estaAutenticado()) {
      this.router.navigate(['/']);
      return;
    }

    // Reactive Form con validaciones
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  // Acceso rápido a los controles
  get f() { return this.loginForm.controls; }

  togglePass(): void {
    this.mostrarPass = !this.mostrarPass;
  }

  onSubmit(): void {
    this.errorMsg = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    const { email, password } = this.loginForm.value;

    // Simula una pequeña demora (como si fuera una llamada API)
    setTimeout(() => {
      const ok = this.authService.login(email, password);
      this.cargando = false;

      if (ok) {
        this.router.navigate(['/']);
      } else {
        this.errorMsg = 'Correo o contraseña incorrectos. Verifica tus credenciales.';
      }
    }, 600);
  }

  // Rellena el formulario con credenciales de demo
  usarDemo(): void {
    this.loginForm.setValue({
      email: 'admin@petcare.com',
      password: '123456'
    });
  }
}
