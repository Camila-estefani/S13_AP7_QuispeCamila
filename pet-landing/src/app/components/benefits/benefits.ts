import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits {
  benefits = [
    'Atencion profesional certificada',
    'Reserva rapida por canales digitales',
    'Planes personalizados segun raza y edad',
    'Seguimiento continuo de bienestar'
  ];
}
