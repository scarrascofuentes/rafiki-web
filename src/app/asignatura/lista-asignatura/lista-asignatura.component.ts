import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-asignatura',
  templateUrl: './lista-asignatura.component.html',
  styleUrls: ['./lista-asignatura.component.css']
})
export class ListaAsignaturaComponent implements OnInit {

  rForm: FormGroup;
  domain: string = 'http://localhost:10010';
  asignaturas: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.rForm = formBuilder.group({
      'nombre': [null, Validators.required],
      'horasPedagogicasConJecAnual': [null, Validators.required],
      'horasPedagogicasSinJecAnual': [null, Validators.required],
      'horasPedagogicasConJecSemanal': [null, Validators.required],
      'horasPedagogicasSinJecSemanal': [null, Validators.required]
    });
  }

  getAsignaturas() {
    this.httpClient.get(`${this.domain}/asignaturas`).subscribe(data => {
      // console.log(data);
      this.asignaturas = data;
      console.log(this.asignaturas);
    });
  }

  deleteAsignatura(id) {
    this.httpClient.delete(`${this.domain}/asignaturas`).subscribe(data => {
    });
  }

  ngOnInit() {
    this.getAsignaturas();
  }

}
