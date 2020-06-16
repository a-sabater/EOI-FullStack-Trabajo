import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../interfaces/imagen';


const SERVIDOR = 'http://localhost:8080/api/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  obtenerImagenes(){
    return (this.http.get<Imagen[]>(SERVIDOR));
  }

  enviarImagenes(imagen: Imagen){
    return (this.http.post(SERVIDOR, imagen));
  }
  deleteImagen(id: string){
    return (this.http.delete(SERVIDOR + '/' + id));
  }
  actualizarImagen(imagen: Imagen){
    return (this.http.put(SERVIDOR + '/' + imagen.id, imagen));
  }
}
