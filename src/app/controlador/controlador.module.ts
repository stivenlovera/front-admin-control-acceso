import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControladorRoutingModule } from './controlador-routing.module';
import { ListaControladoresComponent } from './components/lista-controladores/lista-controladores.component';
import { ModalControladorComponent } from './components/modal-controlador/modal-controlador.component';
//material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ListaControladoresComponent,
    ModalControladorComponent
  ],
  imports: [
    CommonModule,
    ControladorRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ControladorModule { }
