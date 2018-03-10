import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-recurso-educativo',
  templateUrl: './crear-recurso-educativo.component.html',
  styleUrls: ['./crear-recurso-educativo.component.css']
})
export class CrearRecursoEducativoComponent implements OnInit {

  rForm: FormGroup;
  domain: string = 'http://localhost:10010/recursosEducativos';
  recursoEducativo: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

    this.rForm = formBuilder.group({

      'titulo': [null, Validators.required],
      'descripcion': [null, Validators.required],
      'asignatura': [null, Validators.required],
      'nivel': [null, Validators.required],
      'tipoRecurso': [null, Validators.required],
      'autor': [null, Validators.required],
      'links': this.formBuilder.array([])

    });
  }

  postRecursoEducativo(post) {

    console.log(post);

    this.http.post(`${this.domain}`, post).subscribe(data => {
      console.log(data);
      this.recursoEducativo = data;
      console.log(this.recursoEducativo);
      alert("¡Se ha creado el recurso educativo!");
      this.router.navigate(['/recursosEducativos']);
    });

  }

  onAddLinks() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('links')).push(control);

  }

  ngOnInit() {
  }

}
