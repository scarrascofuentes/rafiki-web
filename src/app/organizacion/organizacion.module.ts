import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionService } from './services/organizacion.service';

import { ListaOrganizacionesComponent } from './lista-organizaciones/lista-organizaciones.component';
import { CrearOrganizacionComponent } from './crear-organizacion/crear-organizacion.component';
import { ModificarOrganizacionComponent } from './modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './detalles-organizacion/detalles-organizacion.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListaOrganizacionesComponent,
    CrearOrganizacionComponent,
    ModificarOrganizacionComponent,
    DetallesOrganizacionComponent,
  ],
  providers: [
    OrganizacionService
  ],
  exports:[
    ListaOrganizacionesComponent,
    CrearOrganizacionComponent,
    ModificarOrganizacionComponent,
    DetallesOrganizacionComponent,
  ]
})
export class OrganizacionModule { }
