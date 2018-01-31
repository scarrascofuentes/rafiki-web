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
    this.http.post('http://localhost:10010/organizaciones', organizacion)
    .subscribe(res => {
        let id = res['_id'];
        this.organizacion = res;
        this.router.navigate(['/organizacion',this.organizacion._id]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
