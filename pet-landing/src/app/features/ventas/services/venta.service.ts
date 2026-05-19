import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Producto, Venta } from '../../../shared/models/venta.model';

@Injectable({ providedIn: 'root' })
export class VentaService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}/ventas`);
  }

  getVentaById(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.apiUrl}/ventas/${id}`);
  }

  registrarVenta(venta: { clienteId: number; detalles: { productoId: number; cantidad: number }[] }): Observable<Venta> {
    return this.http.post<Venta>(`${this.apiUrl}/ventas`, venta);
  }
}
