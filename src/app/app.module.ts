import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { OrganizacionService } from './services/organizacion.service';

import { AppComponent } from './app.component';
import { ListaOrganizacionesComponent } from './lista-organizaciones/lista-organizaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaOrganizacionesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OrganizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
