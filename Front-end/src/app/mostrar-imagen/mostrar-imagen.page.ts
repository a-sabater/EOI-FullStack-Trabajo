import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Imagen } from '../interfaces/imagen';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.page.html',
  styleUrls: ['./mostrar-imagen.page.scss'],
})
export class MostrarImagenPage implements OnInit {
  imagen = {
    id: null,
    usuario: '',
    titulo: '',
    imagenUrl: '',
    descripcion: '',
    createAt: null,
    tags: ''
  };

  constructor(private route: Router, private router: ActivatedRoute, private listado: ListService, private alertController: AlertController) {
    this.imagen.id = +this.router.snapshot.paramMap.get('id');
    this.imagen.usuario = this.router.snapshot.paramMap.get('usuario');
    this.imagen.titulo = this.router.snapshot.paramMap.get('titulo');
    this.imagen.imagenUrl = this.router.snapshot.paramMap.get('imagenUrl');
    this.imagen.descripcion = this.router.snapshot.paramMap.get('descripcion');
    this.imagen.createAt = new Date(this.router.snapshot.paramMap.get('createAt'));
    this.imagen.tags = this.router.snapshot.paramMap.get('tags');
  }
  ngOnInit() {
  }
  
  deleteImagen(id) {
    this.presentAlertConfirm(id);

  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion!',
      message: '<strong>¿Quieres borrar la foto?</strong>',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.listado.deleteImagen(id).subscribe(() => {
              this.listado.obtenerImagenes().subscribe((resp: any) => {
                this.imagen = resp;
                this.route.navigate(['/home']);
              });
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });

    await alert.present();
  }
}