import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { FiltrarPipe } from '../pipes/filtrar.pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imanegenes = [];
  search = '';

  constructor(private listado: ListService, private alertController: AlertController, private filtrar: FiltrarPipe) { }

  doRefresh(evento) {
    this.listado.obtenerImagenes().subscribe((resp: any) => {
      console.log(resp);
      this.imanegenes = resp;
      evento.target.complete();
    });

  }

  ionViewDidEnter() {
    this.listado.obtenerImagenes().subscribe((resp: any) => {
      this.imanegenes = resp;
    });
  }



}
