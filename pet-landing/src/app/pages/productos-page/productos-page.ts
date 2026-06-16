import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  emoji: string;
  categoria: string;
  badge?: string;
}

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css'
})
export class ProductosPage {
  categoriaActiva = 'Todos';

  categorias = ['Todos', 'Alimentación', 'Accesorios', 'Higiene', 'Juguetes'];

  productos: Producto[] = [
    { id: 1, nombre: 'Alimento Premium Perro 5kg',  descripcion: 'Fórmula balanceada con proteínas naturales para perros adultos.', precio: 45.00, emoji: '🐶', categoria: 'Alimentación', badge: 'Más vendido' },
    { id: 2, nombre: 'Alimento Premium Gato 3kg',   descripcion: 'Nutrición completa para gatos con omega-3 y vitaminas esenciales.', precio: 35.00, emoji: '🐱', categoria: 'Alimentación' },
    { id: 3, nombre: 'Collar Antipulgas',            descripcion: 'Protección continua por 8 meses contra pulgas y garrapatas.', precio: 18.50, emoji: '🦟', categoria: 'Accesorios', badge: 'Nuevo' },
    { id: 4, nombre: 'Juguete Interactivo',          descripcion: 'Estimula la inteligencia de tu mascota con este juguete dispensador.', precio: 22.00, emoji: '🎾', categoria: 'Juguetes' },
    { id: 5, nombre: 'Shampoo Mascotas 500ml',       descripcion: 'Formula suave con aloe vera, pH neutro para piel sensible.', precio: 12.00, emoji: '🧴', categoria: 'Higiene' },
    { id: 6, nombre: 'Cama Ortopédica Mediana',      descripcion: 'Espuma viscoelástica que protege las articulaciones de tu mascota.', precio: 85.00, emoji: '🛏️', categoria: 'Accesorios', badge: 'Premium' },
    { id: 7, nombre: 'Correa Retráctil 5m',          descripcion: 'Correa extensible con freno ergonómico, hasta 20kg de peso.', precio: 28.00, emoji: '🔗', categoria: 'Accesorios' },
    { id: 8, nombre: 'Vitaminas Mascotas x30',       descripcion: 'Suplemento multivitamínico para fortalecer el sistema inmune.', precio: 15.00, emoji: '💊', categoria: 'Alimentación' },
    { id: 9, nombre: 'Pelota Kong Clásica',          descripcion: 'Juguete resistente de caucho natural, ideal para morder.', precio: 19.90, emoji: '🏈', categoria: 'Juguetes' },
    { id: 10, nombre: 'Cepillo Dientes Mascota',     descripcion: 'Kit dental con pasta sabor pollo y cepillo de ángulo especial.', precio: 9.50, emoji: '🦷', categoria: 'Higiene' },
    { id: 11, nombre: 'Arena Gato Premium 4kg',      descripcion: 'Arena aglomerante sin polvo, máxima absorción y control de olor.', precio: 14.00, emoji: '🏖️', categoria: 'Higiene' },
    { id: 12, nombre: 'Túnel para Gatos',            descripcion: 'Túnel de tela plegable con crinkle, ¡los gatos lo adoran!', precio: 25.00, emoji: '🌀', categoria: 'Juguetes' },
  ];

  get productosFiltrados(): Producto[] {
    if (this.categoriaActiva === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.categoriaActiva);
  }

  cambiarCategoria(cat: string): void {
    this.categoriaActiva = cat;
  }
}
