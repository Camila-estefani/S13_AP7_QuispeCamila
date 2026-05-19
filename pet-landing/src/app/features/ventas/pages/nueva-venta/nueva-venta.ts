import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { VentaService } from '../../services/venta.service';
import { Cliente, Producto } from '../../../../shared/models/venta.model';

@Component({
  selector: 'app-nueva-venta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './nueva-venta.html',
  styleUrl: './nueva-venta.css'
})
export class NuevaVentaPage implements OnInit {
  ventaForm: FormGroup;
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  errorMsg = '';
  successMsg = '';
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService,
    private router: Router
  ) {
    this.ventaForm = this.fb.group({
      clienteId: ['', Validators.required],
      detalles: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.ventaService.getClientes().subscribe({
      next: (data) => this.clientes = data,
      error: () => this.errorMsg = 'No se pudo cargar la lista de clientes. Verifica que el backend esté activo.'
    });
    this.ventaService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: () => this.errorMsg = 'No se pudo cargar la lista de productos.'
    });
    this.agregarProducto(); // Iniciar con una fila
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }

  crearDetalleGroup(): FormGroup {
    return this.fb.group({
      productoId: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]]
    });
  }

  agregarProducto(): void {
    this.detalles.push(this.crearDetalleGroup());
  }

  quitarProducto(index: number): void {
    if (this.detalles.length > 1) {
      this.detalles.removeAt(index);
    }
  }

  getProducto(productoId: any): Producto | undefined {
    return this.productos.find(p => p.id === +productoId);
  }

  getSubtotal(index: number): number {
    const detalle = this.detalles.at(index).value;
    const producto = this.getProducto(detalle.productoId);
    if (!producto || !detalle.cantidad) return 0;
    return producto.precio * detalle.cantidad;
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.detalles.length; i++) {
      total += this.getSubtotal(i);
    }
    return total;
  }

  validarStock(index: number): string {
    const detalle = this.detalles.at(index).value;
    const producto = this.getProducto(detalle.productoId);
    if (!producto) return '';
    if (detalle.cantidad > producto.stock) {
      return `Stock insuficiente. Disponible: ${producto.stock}`;
    }
    return '';
  }

  hayErroresDeStock(): boolean {
    for (let i = 0; i < this.detalles.length; i++) {
      if (this.validarStock(i)) return true;
    }
    return false;
  }

  onSubmit(): void {
    this.errorMsg = '';
    this.successMsg = '';

    if (this.ventaForm.invalid) {
      this.ventaForm.markAllAsTouched();
      this.errorMsg = 'Por favor completa todos los campos requeridos.';
      return;
    }

    if (this.hayErroresDeStock()) {
      this.errorMsg = 'Hay productos con stock insuficiente. Ajusta las cantidades.';
      return;
    }

    this.cargando = true;
    const payload = {
      clienteId: +this.ventaForm.value.clienteId,
      detalles: this.ventaForm.value.detalles.map((d: any) => ({
        productoId: +d.productoId,
        cantidad: +d.cantidad
      }))
    };

    this.ventaService.registrarVenta(payload).subscribe({
      next: (venta) => {
        this.cargando = false;
        this.successMsg = `✅ Venta #${venta.id} registrada exitosamente por $${venta.total.toFixed(2)}`;
        this.ventaForm.reset();
        this.detalles.clear();
        this.agregarProducto();
        setTimeout(() => this.router.navigate(['/ventas']), 2000);
      },
      error: (err) => {
        this.cargando = false;
        this.errorMsg = err.error?.error || 'Error al registrar la venta. Intenta nuevamente.';
      }
    });
  }
}
