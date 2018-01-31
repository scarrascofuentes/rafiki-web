import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-organizacion',
  templateUrl: './crear-organizacion.component.html',
  styleUrls: ['./crear-organizacion.component.css']
})
export class CrearOrganizacionComponent implements OnInit {
  rForm: FormGroup;
  organizacion: any;
  nombre: String = '';
  descripcion: String = '';
  mensaje: String= 'Se ha añadido correctamente la organizacion a la Base de Datos. Se le redireccionará a la pagina de inicio';

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
  ) { 
    this.rForm = fb.group({
      'nombre': [null, Validators.required],
      'descripcion': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(100)]
      )],
    })
  }

  ngOnInit() {
  }

  // crearOrganizacion(organizacion) {
  //   this.descripcion = organizacion.descripcion;
  //   this.nombre = organizacion.nombre;
  // }
  crearOrganizacion(organizacion){
    this.mensaje;
    // aqui deben ir todas las variables que se mostrarar al registrar una nueva organizacion
    this.nombre = organizacion.nombre;
    this.descripcion = organizacion.descripcion;


    this.http.post('http://localhost:10010/organizaciones', organizacion)
    .subscribe(res => {
        let id = res['_id'];
        this.organizacion = res;
        setTimeout(() =>{
          //this.router.navigate(['/organizacion',this.organizacion]);
          this.router.navigate(['/organizaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
    );
  }
}
