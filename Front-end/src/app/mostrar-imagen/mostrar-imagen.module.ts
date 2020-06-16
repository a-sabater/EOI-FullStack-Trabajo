import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { MostrarImagenPageRoutingModule } from './mostrar-imagen-routing.module';

import { MostrarImagenPage } from './mostrar-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarImagenPageRoutingModule
  ],
  declarations: [MostrarImagenPage]
})
export class MostrarImagenPageModule {

}
