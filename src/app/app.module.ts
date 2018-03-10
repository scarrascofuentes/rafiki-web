import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrganizacionModule } from './organizacion/organizacion.module';
import { CursoModule } from './curso/curso.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
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

//ACTIVIDAD
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { CrearActividadComponent } from './actividad/crear-actividad/crear-actividad.component';
import { DetallesActividadComponent } from './actividad/detalles-actividad/detalles-actividad.component';
import { ModificarActividadComponent } from './actividad/modificar-actividad/modificar-actividad.component';

//RECURSO EDUCATIVO
import { ListaRecursosEducativosComponent } from './recurso-educativo/lista-recursos-educativos/lista-recursos-educativos.component';
import { ModificarRecursoEducativoComponent } from './recurso-educativo/modificar-recurso-educativo/modificar-recurso-educativo.component';
import { CrearRecursoEducativoComponent } from './recurso-educativo/crear-recurso-educativo/crear-recurso-educativo.component';
import { DetallesRecursoEducativoComponent } from './recurso-educativo/detalles-recurso-educativo/detalles-recurso-educativo.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  //ACTIVIDAD
  { path: 'actividades', component: ListaActividadesComponent },
  { path: 'actividades/crear', component: CrearActividadComponent }, 
  { path: 'actividades/:id', component: DetallesActividadComponent },
  { path: 'actividades/:id/editar', component: ModificarActividadComponent },

  //RECURSO EDUCATIVO
  { path: 'recursosEducativos', component: ListaRecursosEducativosComponent },
  { path: 'recursosEducativos/:id/editar', component: ModificarRecursoEducativoComponent },
  { path: 'recursosEducativos/crear', component: CrearRecursoEducativoComponent }, 
  { path: 'recursosEducativos/:id', component: DetallesRecursoEducativoComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: 'erroresRutas' },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

    //ACTIVIDAD
    ListaActividadesComponent,
    CrearActividadComponent,
    DetallesActividadComponent,
    ModificarActividadComponent,

    //RECURSO EDUCATIVO
    ListaRecursosEducativosComponent,
    ModificarRecursoEducativoComponent,
    CrearRecursoEducativoComponent,
    DetallesRecursoEducativoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
  bootstrap: [AppComponent]
})

export class AppModule { }