import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
 
//Servicios
import { OrganizacionService } from './organizacion/services/organizacion.service';
import { EvaluacionService } from './evaluacion/services/evaluacion.service';
 
import { AppComponent } from './app.component';
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListaEvaluacionesComponent } from './evaluacion/lista-evaluaciones/lista-evaluaciones.component';
import { CrearEvaluacionComponent } from './evaluacion/crear-evaluacion/crear-evaluacion.component';
import { DetallesEvaluacionComponent } from './evaluacion/detalles-evaluacion/detalles-evaluacion.component';
import { ModificarEvaluacionComponent } from './evaluacion/modificar-evaluacion/modificar-evaluacion.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ListaOrganizacionesComponent,
    CrearOrganizacionComponent,
    ModificarOrganizacionComponent,
    DetallesOrganizacionComponent,
    ListaEvaluacionesComponent,
    CrearEvaluacionComponent,
    DetallesEvaluacionComponent,
    ModificarEvaluacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [OrganizacionService, EvaluacionService],
  bootstrap: [AppComponent],
})
export class AppModule { }