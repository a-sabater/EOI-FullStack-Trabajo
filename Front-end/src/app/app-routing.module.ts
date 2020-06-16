import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-imagen',
    loadChildren: () => import('./add-imagen/add-imagen.module').then( m => m.AddImagenPageModule)
  },
  {
    path: 'actualizar-imagen',
    loadChildren: () => import('./actualizar-imagen/actualizar-imagen.module').then( m => m.ActualizarImagenPageModule)
  },
  {
    path: 'mostrar-imagen',
    loadChildren: () => import('./mostrar-imagen/mostrar-imagen.module').then( m => m.MostrarImagenPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
