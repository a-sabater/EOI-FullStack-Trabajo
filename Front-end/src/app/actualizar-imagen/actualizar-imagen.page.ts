import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { Imagen } from '../interfaces/imagen';

@Component({
  selector: 'app-actualizar-imagen',
  templateUrl: './actualizar-imagen.page.html',
  styleUrls: ['./actualizar-imagen.page.scss'],
})
export class ActualizarImagenPage implements OnInit {
  imagen: Imagen = {
    id: null,
    usuario: '',
    titulo: '',
    imagenUrl: '',
    descripcion: '',
    createAt: null,
    tags: ''
  };

  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private router: ActivatedRoute, private actualizar: ListService, private alertController: AlertController) {
    this.imagen.id = +this.router.snapshot.paramMap.get('id');
    this.imagen.usuario = this.router.snapshot.paramMap.get('usuario');
    this.imagen.titulo = this.router.snapshot.paramMap.get('titulo');
    this.imagen.imagenUrl = this.router.snapshot.paramMap.get('imagenUrl');
    this.imagen.descripcion = this.router.snapshot.paramMap.get('descripcion');
    this.imagen.createAt = new Date(this.router.snapshot.paramMap.get('createAt'));
    this.imagen.tags = this.router.snapshot.paramMap.get('tags');
    console.log(this.imagen);
  }

  ngOnInit() {
  }

  actualizarImagen() {
    this.actualizar.actualizarImagen(this.imagen).subscribe((resp: any) => {
      this.presentAlertConfirm();
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Imagen actualizada correctamente.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.route.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
