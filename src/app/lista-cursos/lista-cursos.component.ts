import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  rForm: FormGroup;
  idCurso: String = '';
  nivel: String = '';
  asignatura: String = '';
  profesorJefe: String = '';
  salaCurso: String = '';
  totalAlumnos: Number;

  constructor(private formBuilder: FormBuilder) {
    this.rForm = formBuilder.group({
      'idCurso': [null, Validators.required],
      'nivel': [null, Validators.required],
      'asignatura': [null, Validators.required],
      'profesorJefe': [null, Validators.required],
      'salaCurso': [null, Validators.required],
      'totalAlumnos': [null, Validators.required],
      'validate': ''
    });

  }

  addPost(post){
    this.idCurso = post.idCurso;
    this.nivel = post.nivel;
    this.asignatura = post.asignatura;
    this.profesorJefe = post.profesorJefe;
    this.salaCurso = post.salaCurso;
    this.totalAlumnos = post.totalAlumnos;
  }

  ngOnInit() {
  }

}
