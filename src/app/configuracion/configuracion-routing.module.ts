import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaConfiguracionComponent } from './components/lista-configuracion/lista-configuracion.component';

const routes: Routes = [
  {
    path: '',
    component:ListaConfiguracionComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
