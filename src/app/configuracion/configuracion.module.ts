import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ListaConfiguracionComponent } from './components/lista-configuracion/lista-configuracion.component';


@NgModule({
  declarations: [
    ListaConfiguracionComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
