import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = '';
  lastname = '';
  email = '';
  phone = '';
  petType = '';
  service = '';
  details = '';
  acceptTerms = false;
  sentMessage = '';

  // Validar formato de email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validar formato de teléfono (al menos 7 dígitos)
  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{7,}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  onSubmit(): void {
    // Validación del email
    if (!this.isValidEmail(this.email)) {
      this.sentMessage = '❌ Por favor, ingresa un correo electrónico válido.';
      return;
    }

    // Validación del teléfono
    if (!this.isValidPhone(this.phone)) {
      this.sentMessage = '❌ El teléfono debe tener al menos 7 dígitos.';
      return;
    }

    // Validación de términos
    if (!this.acceptTerms) {
      this.sentMessage = '❌ Debes aceptar los términos para continuar.';
      return;
    }

    // Si todo es válido, mostrar mensaje de éxito
    this.sentMessage =
      `✅ ¡Gracias ${this.name} ${this.lastname}! Tu solicitud ha sido registrada. Te escribiremos a ${this.email} ` +
      `para coordinar el servicio de ${this.service || 'evaluación personalizada'}.`;

    // Limpiar formulario después de 3 segundos
    setTimeout(() => {
      this.resetForm();
    }, 3000);
  }

  private resetForm(): void {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.phone = '';
    this.petType = '';
    this.service = '';
    this.details = '';
    this.acceptTerms = false;
    this.sentMessage = '';
  }
}
