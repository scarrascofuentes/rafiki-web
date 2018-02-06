import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-modificar-evaluacion',
  templateUrl: './modificar-evaluacion.component.html',
  styleUrls: ['./modificar-evaluacion.component.css']
})
export class ModificarEvaluacionComponent implements OnInit {
  rForm: FormGroup;
  evaluacion: any;
  id: String;
  mensaje: String= '';

  nivelesDeAprendizaje = ['Recordar', 'Comprender', 'Aplicar','Analizar','Evaluar', 'Crear'];
  tiposDeEjecucion = ['Al azar', 'Orden numeral', 'Mayor dificultad','Menor dificultad'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private evaluacionService: EvaluacionService) { 
      this.route.params.subscribe(res => {
        this.id = res.id;
      })
      this.rForm = fb.group({
        'profesorAutor': [Validators.required],
        //'creado_fecha': [null, Validators.required],
        'nivelAprendizaje': [Validators.required],
        'tipoEjecucion': [Validators.required],
        'asignatura': [Validators.required],
        'detalles': [Validators.required],
        'retroalimentacion': this.fb.array([])
      })
    }

  ngOnInit() {
    this.getEvaluacion();
  }

  getEvaluacion(): void {
    this.evaluacionService.getEvaluacion(this.id)
    .subscribe(res => { 
      this.evaluacion = res
    })
  }

  updateEvaluacion(evaluacion){
    this.mensaje = 'Se ha modificado correctamente la evaluacion de <'+evaluacion.nombreProfesor+'>a la Base de Datos. Se le redireccionará a la pagina de inicio';

    this.evaluacionService.updateOrganizacion(evaluacion, this.id)
    .subscribe(res => {
        this.evaluacion = res;
        setTimeout(() =>{
          this.router.navigate(['/evaluaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
    );
  }
}
