import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-recurso-educativo',
  templateUrl: './modificar-recurso-educativo.component.html',
  styleUrls: ['./modificar-recurso-educativo.component.css']
})
export class ModificarRecursoEducativoComponent implements OnInit {

  rForm: FormGroup;
  domain: string = 'http://localhost:10010/recursosEducativos';
  recursoEducativo: any;
  id: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private HttpClient: HttpClient, private router: Router) {

    this.route.params.subscribe(res => {
      this.id = res.id;
    })

    this.rForm = formBuilder.group({

      'titulo': [Validators.required],
      'descripcion': [Validators.required],
      'asignatura': [Validators.required],
      'nivel': [Validators.required],
      'tipoRecurso': [Validators.required],
      'autor': [Validators.required],
      'links': this.formBuilder.array([])
    });

  }

  getRecursoEducativo() {

    this.HttpClient.get(`${this.domain}/${this.id}`).subscribe(data => {
      // console.log(data);
      this.recursoEducativo = data;
      console.log(this.recursoEducativo);
    });
  }

  ngOnInit() {
    this.getRecursoEducativo();
  }

  updateRecursoEducativo(put) {
    console.log("PUT DE PRUEBA");
    console.log(put);
    this.HttpClient.put(`${this.domain}/${this.id}`, put).subscribe(data => {
      console.log(put);
    });

    alert("¡Se ha editado el recurso educativo!");
    this.router.navigate(['/recursosEducativos']);


  }



  onAddLinks() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('links')).push(control);

  }

  removeLinks(i: number) {
    const control = <FormArray>this.rForm.controls['links'];
    control.removeAt(i)
  }



}
