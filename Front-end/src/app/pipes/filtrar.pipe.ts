import { Pipe, PipeTransform } from '@angular/core';
import { Imagen } from '../interfaces/imagen';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(imagenes: Imagen[], search: string): Imagen[] {
    if (!search) {
      return imagenes;
    }

    return imagenes.filter(e =>
      e.titulo.toLowerCase().includes(search.toLowerCase()) ||
      e.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.toLowerCase().includes(search.toLowerCase())
    );
  }

}
