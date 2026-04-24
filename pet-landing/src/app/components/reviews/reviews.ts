import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  reviews = [
    {
      name: 'María García',
      pet: 'Max (Golden Retriever)',
      rating: 5,
      text: 'El servicio de grooming fue excepcional. Max salió hermoso y muy feliz. ¡Recomendado!',
      image: 'https://i.pinimg.com/736x/ae/27/8d/ae278db5c7e6d80b63e1cc3847206faa.jpg',
    },
    {
      name: 'Carlos López',
      pet: 'Luna (Gato Persa)',
      rating: 5,
      text: 'Excelente cuidado durante el hotel de día. Luna llegó relajada y con mucho cariño recibido.',
      image: 'https://i.pinimg.com/736x/d0/15/8f/d0158f8ce2b4e8b1d9c5e3f2a1b0c9d8.jpg',
    },
    {
      name: 'Ana Martínez',
      pet: 'Rocky (Bulldog Francés)',
      rating: 5,
      text: 'El entrenamiento ha sido increíble. Rocky aprendió comandos básicos en pocas sesiones.',
      image: 'https://i.pinimg.com/736x/42/e5/8c/42e58c8b3f6d1a4c2e5b7a9d0f3c6e8b.jpg',
    },
    {
      name: 'Pedro Rodríguez',
      pet: 'Bella (Caniche)',
      rating: 5,
      text: 'Consulta veterinaria muy profesional. El equipo es amable y experto. Muy satisfecho.',
      image: 'https://i.pinimg.com/736x/5f/a1/b2/5fa1b2c3d8e4f6g7h9i0j2k4l5m6n7o8.jpg',
    },
    {
      name: 'Sofía Delgado',
      pet: 'Milo (Cocker Spaniel)',
      rating: 5,
      text: 'Los paseos diarios son perfectos. Milo regresa feliz, cansado y con las patas limpias.',
      image: 'https://i.pinimg.com/736x/c3/d4/e5/c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8.jpg',
    },
    {
      name: 'Juan García',
      pet: 'Toby (Husky)',
      rating: 5,
      text: 'El vestuario para mascotas es de gran calidad. Toby luce increíble con su nueva ropa.',
      image: 'https://i.pinimg.com/736x/9a/8b/7c/9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p.jpg',
    },
  ];
}

