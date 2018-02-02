import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component'; 
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component'; 
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component'; 
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component'; 
 
const routes: Routes = [ 
  { 
    path: 'organizaciones', 
    component: ListaOrganizacionesComponent 
  }, 
  { 
    path: 'organizacion/:id', 
    component: DetallesOrganizacionComponent 
  }, 
  { 
    path: 'organizaciones/crear', 
    component: CrearOrganizacionComponent 
  }, 
  { 
    path: 'organizacion/:id/editar', 
    component: ModificarOrganizacionComponent 
  }, 
]; 
 
@NgModule({ 
  imports: [ 
    RouterModule.forRoot(routes) 
  ], 
  exports: [RouterModule], 
  declarations: [] 
}) 
export class AppRoutingModule { } 