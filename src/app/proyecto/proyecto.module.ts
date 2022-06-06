import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ListaProyectosComponent } from './components/lista-proyectos/lista-proyectos.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ListaProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProyectoModule { }
