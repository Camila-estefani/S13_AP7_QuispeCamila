export interface Cliente {
  id: number;
  nombre: string;
  email: string;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

export interface DetalleVenta {
  productoId: number;
  nombreProducto: string;
  cantidad: number;
  precio: number;
  subtotal: number;
}

export interface Venta {
  id?: number;
  clienteId: number;
  nombreCliente: string;
  fecha: string;
  detalles: DetalleVenta[];
  total: number;
}
