import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarImagenPage } from './mostrar-imagen.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarImagenPageRoutingModule {}
