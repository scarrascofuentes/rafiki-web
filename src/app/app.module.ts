import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ModificarCursoComponent } from './cursos/modificar-curso/modificar-curso.component';
import { EliminarCursoComponent } from './cursos/eliminar-curso/eliminar-curso.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    EliminarCursoComponent,
    DetalleCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
