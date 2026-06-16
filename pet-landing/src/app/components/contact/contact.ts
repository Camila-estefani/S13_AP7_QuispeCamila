import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  citaForm: FormGroup;
  message = '';
  editandoId: number | null = null;
  citas = [
    {
      id: 1,
      ownerName: 'Ana López',
      petName: 'Luna',
      phone: '987654321',
      email: 'ana.lopez@mail.com',
      petType: 'Perro',
      service: 'Consulta veterinaria',
      appointmentDate: '2026-06-10',
      appointmentTime: '10:30',
      notes: 'Chequeo general y vacunación.',
    },
    {
      id: 2,
      ownerName: 'Carlos Pérez',
      petName: 'Michi',
      phone: '912345678',
      email: 'carlos.perez@mail.com',
      petType: 'Gato',
      service: 'Control de alimentación',
      appointmentDate: '2026-06-15',
      appointmentTime: '14:00',
      notes: 'Revisión de dieta y cambio de alimento.',
    },
  ];
  private idCounter = 3;

  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      ownerName: ['', [Validators.required, Validators.minLength(3)]],
      petName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, this.phoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      petType: ['', Validators.required],
      service: ['', Validators.required],
      appointmentDate: ['', [Validators.required, this.futureDateValidator]],
      appointmentTime: ['', Validators.required],
      notes: [''],
    });
  }

  get f() {
    return this.citaForm.controls;
  }

  private phoneValidator(control: AbstractControl): ValidationErrors | null {
    const phone = control.value || '';
    const digits = phone.replace(/\D/g, '');
    return digits.length === 9 ? null : { invalidPhone: true };
  }

  private futureDateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return selectedDate >= today ? null : { pastDate: true };
  }

  onSubmit(): void {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      this.message = '❌ Revisa los campos del formulario, hay errores pendientes.';
      return;
    }

    const cita = {
      id: this.editandoId ?? this.idCounter++,
      ...this.citaForm.value,
    };

    if (this.editandoId) {
      const index = this.citas.findIndex((item) => item.id === this.editandoId);
      if (index !== -1) {
        this.citas[index] = cita;
        this.message = '✅ Cita actualizada con éxito.';
      }
    } else {
      this.citas.push(cita);
      this.message = '✅ Cita registrada correctamente.';
    }

    this.resetForm();
  }

  onEdit(cita: any): void {
    this.editandoId = cita.id;
    this.message = '';
    this.citaForm.setValue({
      ownerName: cita.ownerName,
      petName: cita.petName,
      phone: cita.phone,
      email: cita.email,
      petType: cita.petType,
      service: cita.service,
      appointmentDate: cita.appointmentDate,
      appointmentTime: cita.appointmentTime,
      notes: cita.notes,
    });
  }

  onDelete(id: number): void {
    if (!confirm('¿Eliminar esta cita?')) {
      return;
    }
    this.citas = this.citas.filter((item) => item.id !== id);
    if (this.editandoId === id) {
      this.resetForm();
    }
    this.message = '✅ Cita eliminada correctamente.';
  }

  resetForm(): void {
    this.editandoId = null;
    this.citaForm.reset();
    this.message = '';
  }
}
