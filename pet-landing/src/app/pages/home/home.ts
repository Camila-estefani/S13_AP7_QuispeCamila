import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Benefits } from '../../components/benefits/benefits';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Hero, Benefits, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  petShopItems = [
    { name: 'Chompa Teddy', price: 'S/ 49', emoji: '🧥' },
    { name: 'Collar pastel', price: 'S/ 29', emoji: '🦴' },
    { name: 'Arnes comodo', price: 'S/ 65', emoji: '🎀' },
    { name: 'Cama nube', price: 'S/ 95', emoji: '🛏️' }
  ];

  reviews = [
    {
      name: 'Lucia y Moka',
      message: 'Mi mascota esta feliz y su ropita le queda preciosa.',
      photo: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Diego y Luna',
      message: 'El collar nuevo esta hermoso, super recomendado.',
      photo: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Carla y Milo',
      message: 'La atención fue amable y Milo salió feliz de su paseo.',
      photo: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Andrea y Nina',
      message: 'Mi gatita ama su camita nueva, duerme todo el día.',
      photo: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Sofia y Rocky',
      message: 'Le compramos arnés y le quedó perfecto.',
      photo: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Marcos y Kira',
      message: 'Mi mascota con su ropita se ve demasiado tierna.',
      photo: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Paula y Coco',
      message: 'Todo de calidad, y los colores pastel son bellos.',
      photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Rosa y Toby',
      message: 'Compramos collar y juguete, a Toby le encantó.',
      photo: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Cesar y Nala',
      message: 'Excelente servicio, rapido y muy amable.',
      photo: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Valeria y Simba',
      message: 'Subimos su foto con la ropita y todos la amaron.',
      photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80'
    }
  ];
}
