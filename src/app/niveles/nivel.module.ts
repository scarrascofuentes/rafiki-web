import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaNivelesComponent } from './lista-niveles/lista-niveles.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListaNivelesComponent
  ],
  exports:[
    ListaNivelesComponent
  ]
})
export class NivelModule { }
