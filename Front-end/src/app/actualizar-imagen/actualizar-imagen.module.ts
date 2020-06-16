import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarImagenPageRoutingModule } from './actualizar-imagen-routing.module';

import { ActualizarImagenPage } from './actualizar-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarImagenPageRoutingModule
  ],
  declarations: [ActualizarImagenPage]
})
export class ActualizarImagenPageModule {}
