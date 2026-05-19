import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../../services/mascota';

@Component({
  selector: 'app-gestion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-page.html',
  styleUrl: './gestion-page.css'
})
export class GestionPage implements OnInit {
  mascotaForm: FormGroup;
  listaMascotas: any[] = [];
  idEditando: number | null = null;

  constructor(private mascotaService: MascotaService, private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      nombre:      ['', [Validators.required, Validators.minLength(2)]],
      especie:     ['', [Validators.required, Validators.minLength(2)]],
      edad:        [null, [Validators.required, Validators.min(0)]],
      nombre_dueno:['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  // Acceso rápido a los controles
  get f() { return this.mascotaForm.controls; }

  cargarMascotas(): void {
    this.mascotaService.getMascotas().subscribe({
      next: (data: any) => this.listaMascotas = data,
      error: (err: any) => console.error('Error al conectar:', err)
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.invalid) {
      this.mascotaForm.markAllAsTouched();
      return;
    }

    const datos = this.mascotaForm.value;
    console.log('Enviando:', datos);

    if (this.idEditando) {
      this.mascotaService.actualizarMascota(this.idEditando, datos).subscribe({
        next: () => { this.resetForm(); this.cargarMascotas(); },
        error: (err: any) => console.error('Error al actualizar:', err)
      });
    } else {
      this.mascotaService.agregarMascota(datos).subscribe({
        next: () => { this.resetForm(); this.cargarMascotas(); },
        error: (err: any) => console.error('Error al agregar:', err)
      });
    }
  }

  prepararEdicion(m: any): void {
    this.idEditando = m.id;
    this.mascotaForm.setValue({
      nombre:       m.nombre,
      especie:      m.especie,
      edad:         m.edad,
      nombre_dueno: m.nombre_dueno
    });
  }

  borrar(id: number): void {
    if (confirm('¿Seguro de eliminar esta mascota?')) {
      this.mascotaService.eliminarMascota(id).subscribe(() => this.cargarMascotas());
    }
  }

  resetForm(): void {
    this.idEditando = null;
    this.mascotaForm.reset();
  }
}
