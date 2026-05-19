import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  // La URL de tu backend que ya probamos
  private apiUrl = 'http://localhost:3000/mascotas'; 

  constructor(private http: HttpClient) { }

  // 1. Obtener la lista de mascotas
  getMascotas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2. Crear una nueva mascota
  agregarMascota(mascota: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mascota);
  }

  // 3. Eliminar una mascota
  eliminarMascota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}