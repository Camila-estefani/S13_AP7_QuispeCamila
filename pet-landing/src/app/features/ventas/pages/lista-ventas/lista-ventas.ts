import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../../../shared/models/venta.model';

@Component({
  selector: 'app-lista-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lista-ventas.html',
  styleUrl: './lista-ventas.css'
})
export class ListaVentasPage implements OnInit {
  ventas: Venta[] = [];
  ventasFiltradas: Venta[] = [];
  ventaDetalle: Venta | null = null;

  busqueda = '';
  ordenCampo: keyof Venta | '' = '';
  ordenAsc = true;
  cargando = true;
  errorMsg = '';

  constructor(private ventaService: VentaService) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(): void {
    this.cargando = true;
    this.errorMsg = '';
    this.ventaService.getVentas().subscribe({
      next: (data) => {
        this.ventas = data;
        this.ventasFiltradas = data;
        this.cargando = false;
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar el listado de ventas. Verifica que el backend esté activo.';
        this.cargando = false;
      }
    });
  }

  filtrar(): void {
    const texto = this.busqueda.toLowerCase().trim();
    this.ventasFiltradas = this.ventas.filter(v =>
      v.nombreCliente.toLowerCase().includes(texto) ||
      v.fecha.includes(texto) ||
      String(v.id).includes(texto)
    );
  }

  ordenarPor(campo: keyof Venta): void {
    if (this.ordenCampo === campo) {
      this.ordenAsc = !this.ordenAsc;
    } else {
      this.ordenCampo = campo;
      this.ordenAsc = true;
    }
    this.ventasFiltradas = [...this.ventasFiltradas].sort((a, b) => {
      const va = a[campo] as any;
      const vb = b[campo] as any;
      if (va < vb) return this.ordenAsc ? -1 : 1;
      if (va > vb) return this.ordenAsc ? 1 : -1;
      return 0;
    });
  }

  verDetalle(venta: Venta): void {
    this.ventaDetalle = this.ventaDetalle?.id === venta.id ? null : venta;
  }

  cerrarDetalle(): void {
    this.ventaDetalle = null;
  }

  getIconoOrden(campo: keyof Venta): string {
    if (this.ordenCampo !== campo) return '↕';
    return this.ordenAsc ? '↑' : '↓';
  }
}
