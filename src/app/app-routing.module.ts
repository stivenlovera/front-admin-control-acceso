import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    //canActivate:[NoAuthGuard],
    data: {
      preload: true
    }
  },
  {
    path: 'controlador',
    loadChildren: () => import('./controlador/controlador.module').then( m => m.ControladorModule),
    //canActivate:[NoAuthGuard],
    data: {
      preload: true
    }
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyecto/proyecto.module').then( m => m.ProyectoModule),
    //canActivate:[NoAuthGuard],
    data: {
      preload: true
    }
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionModule),
    //canActivate:[NoAuthGuard],
    data: {
      preload: true
    }
  },
  {
    path: 'contacts',
    component:ContactosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
