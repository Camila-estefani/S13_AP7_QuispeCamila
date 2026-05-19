import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private apiUrl = 'http://localhost:3000/mascotas'; 

  constructor(private http: HttpClient) { }

  getMascotas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarMascota(mascota: any): Observable<any> {
    return this.http.post(this.apiUrl, mascota);
  }

  eliminarMascota(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  actualizarMascota(id: number, mascota: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/update/${id}`, mascota);
}

}