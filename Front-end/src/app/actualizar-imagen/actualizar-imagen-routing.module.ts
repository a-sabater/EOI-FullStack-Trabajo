import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarImagenPage } from './actualizar-imagen.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarImagenPageRoutingModule {}
