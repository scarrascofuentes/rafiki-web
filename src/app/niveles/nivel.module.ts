import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaNivelesComponent } from './lista-niveles/lista-niveles.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearNivelComponent } from './crear-nivel/crear-nivel.component';
import { DetalleNivelComponent } from './detalle-nivel/detalle-nivel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListaNivelesComponent,
    CrearNivelComponent,
    DetalleNivelComponent
  ],
  exports:[
    ListaNivelesComponent,
    CrearNivelComponent
  ]
})
export class NivelModule { }
