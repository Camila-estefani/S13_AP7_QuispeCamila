import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.html',
  styleUrl: './ropa.css',
})
export class Ropa {
  products = [
    {
      id: 'sweater-1',
      name: 'Suéter Cómodo',
      price: 45.99,
      image: 'https://i.pinimg.com/736x/1c/af/02/1caf025d47893050b86aab1e8f9d741a.jpg',
      badge: 'Nuevo',
      description: 'Suéter suave en algodón para clima frío. Disponible en varios tamaños y colores.',
    },
    {
      id: 'jacket-1',
      name: 'Abrigo Impermeable',
      price: 59.99,
      image: 'https://i.pinimg.com/736x/d2/12/36/d21236a909d4add4fa983de7b106a47a.jpg',
      badge: 'Descuento',
      description: 'Abrigo resistente al agua perfecto para días lluviosos. Fácil de poner y quitar.',
    },
    {
      id: 'bandana-1',
      name: 'Bandana Adorable',
      price: 15.99,
      image: 'https://i.pinimg.com/736x/33/a2/9e/33a29e85d9192f03f66acdb5ef13b07a.jpg',
      badge: null,
      description: 'Bandana fashion para gatos y perros pequeños. Múltiples diseños disponibles.',
    },
    {
      id: 'boots-1',
      name: 'Botas Protectoras',
      price: 38.99,
      image: 'https://i.pinimg.com/736x/0b/dd/5e/0bdd5e75ce7193e4016dca14f5ad9e19.jpg',
      badge: 'Tendencia',
      description: 'Botas cómodas para proteger las patas en invierno o en superficies calientes.',
    },
    {
      id: 'pajamas-1',
      name: 'Pijama Cómodo',
      price: 42.99,
      image: 'https://i.pinimg.com/1200x/4e/4a/68/4e4a685f9b40afa2d5c8dc46f2b8c874.jpg',
      badge: null,
      description: 'Pijama suave y cálido para las noches frías. Material transpirable y suave.',
    },
    {
      id: 'harness-1',
      name: 'Arnés Fashion',
      price: 34.99,
      image: 'https://i.pinimg.com/736x/2e/f5/c3/2ef5c3e8d1a4e8b5c3a2b1d5e6f7a8b9.jpg',
      badge: 'Top Ventas',
      description: 'Arnés ergonómico y moderno. Diseñado para comodidad y seguridad máxima.',
    },
  ];

}
