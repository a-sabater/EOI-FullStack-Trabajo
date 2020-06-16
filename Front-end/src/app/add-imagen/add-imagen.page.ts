import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Imagen } from '../interfaces/imagen';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.page.html',
  styleUrls: ['./add-imagen.page.scss'],
})
export class AddImagenPage implements OnInit {

  file: string;

  imagen: Imagen = {
    id: 0,
    usuario: '',
    titulo: '',
    imagenUrl: '',
    descripcion: '',
    createAt: null,
    tags: ''
  };

  base64textString: string;

  constructor(private enviar: ListService, private alertController: AlertController, private route: Router) {
  }

  ngOnInit() {
  }

  enviarImagen() {
    this.imagen.createAt = new Date();
    if (this.imagen.usuario !== '' && this.imagen.titulo !== '' && this.imagen.imagenUrl !== '') {
      console.log(this.imagen);
      this.enviar.enviarImagenes(this.imagen).subscribe((resp: any) => {
        console.log(this.imagen);
        this.presentAlertConfirm();
      });
    }
    else {
      this.presentAdd();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Imagen subida con éxito.',
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

  async presentAdd() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Los campos no pueden estar vacíos.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
          }
        }
      ]
    });

    await alert.present();
  }
  async changeImage(event) {
    let reader = new FileReader();
    reader.onload = (data: any) => {
      this.imagen.imagenUrl = data.target.result;
      console.log(this.imagen.imagenUrl);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}
