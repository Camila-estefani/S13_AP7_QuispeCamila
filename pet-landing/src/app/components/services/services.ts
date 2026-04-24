import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      icon: '🩺',
      title: 'Consulta veterinaria',
      description: 'Revision completa, vacunas y plan preventivo para cada etapa de vida.',
      price: 'Desde S/ 80'
    },
    {
      icon: '✂️',
      title: 'Grooming premium',
      description: 'Bano, corte, limpieza de oidos y cuidado dermatologico con productos hipoalergenicos.',
      price: 'Desde S/ 70'
    },
    {
      icon: '🐕',
      title: 'Entrenamiento y paseo',
      description: 'Sesiones de actividad fisica y obediencia positiva para perros con mucha energia.',
      price: 'Desde S/ 55'
    },
    {
      icon: '🏡',
      title: 'Hotel de dia',
      description: 'Espacio seguro con juegos, descanso y monitoreo para cuando no estas en casa.',
      price: 'Desde S/ 90'
    }
  ];
}
