import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


// Servicios
import { OrganizacionService } from './organizacion/services/organizacion.service';
import { EvaluacionService } from './evaluacion/services/evaluacion.service';
 
// Componentes
import { AppComponent } from './app.component';

import { OrganizacionModule } from './organizacion/organizacion.module';
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';


import { ListaEvaluacionesComponent } from './evaluacion/lista-evaluaciones/lista-evaluaciones.component';
import { CrearEvaluacionComponent } from './evaluacion/crear-evaluacion/crear-evaluacion.component';
import { DetallesEvaluacionComponent } from './evaluacion/detalles-evaluacion/detalles-evaluacion.component';
import { ModificarEvaluacionComponent } from './evaluacion/modificar-evaluacion/modificar-evaluacion.component';


import { CursoModule } from './curso/curso.module';

import { HomeComponent } from './authentication-authorization/home/home.component';
import { AuthGuard } from './authentication-authorization/_guards/auth.guard';
import { LoginComponent } from './authentication-authorization/login/login.component';
import { RegisterComponent } from './authentication-authorization/register/register.component';
import { AlertService } from './authentication-authorization/_services/alert.service';
import { AuthenticationService } from './authentication-authorization/_services/authentication.service';
import { UserService } from './authentication-authorization/_services/user.service';
import { JwtInterceptor } from './authentication-authorization/_helpers/jwt.interceptor';
import { fakeBackendProvider } from './authentication-authorization/_helpers/fake-backend';


import { ListaActividadesComponent } from './actividad/lista-actividades/lista-actividades.component';

import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { CrearActividadComponent } from './actividad/crear-actividad/crear-actividad.component';
import { DetallesActividadComponent } from './actividad/detalles-actividad/detalles-actividad.component';
import { ModificarActividadComponent } from './actividad/modificar-actividad/modificar-actividad.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  //ACTIVIDAD
  { path: 'actividades', component: ListaActividadesComponent },
  { path: 'actividades/crear', component: CrearActividadComponent }, 
  { path: 'actividades/:id', component: DetallesActividadComponent },
  { path: 'actividades/:id/editar', component: ModificarActividadComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: 'erroresRutas' },

];
 
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
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListaActividadesComponent,
    CrearActividadComponent,
    DetallesActividadComponent,
    ModificarActividadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    OrganizacionModule,
    CursoModule     
  ],
  providers: [
    OrganizacionService, 
    EvaluacionService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }