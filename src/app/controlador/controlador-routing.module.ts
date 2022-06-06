import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaControladoresComponent } from './components/lista-controladores/lista-controladores.component';

const routes: Routes = [
  {
    path: '',
    component:ListaControladoresComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControladorRoutingModule { }
