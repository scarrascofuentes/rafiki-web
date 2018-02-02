import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
 
//Servicios
import { OrganizacionService } from './organizacion/services/organizacion.service';
 
import { AppComponent } from './app.component';
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';
import { AppRoutingModule } from './/app-routing.module';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ListaOrganizacionesComponent,
    CrearOrganizacionComponent,
    ModificarOrganizacionComponent,
    DetallesOrganizacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [OrganizacionService],
  bootstrap: [AppComponent],
})
export class AppModule { }