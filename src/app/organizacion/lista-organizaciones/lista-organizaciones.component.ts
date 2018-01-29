import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../services/organizacion.service';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-lista-organizaciones',
  templateUrl: './lista-organizaciones.component.html',
  styleUrls: ['./lista-organizaciones.component.css']
})
export class ListaOrganizacionesComponent implements OnInit {
  organizaciones: any;
  organizacion: any;
  organizacionBuscada: String = '5a68fb901819653ad8d4ab12'; // Ejemplo

  constructor(private organizacionService: OrganizacionService) { }

  ngOnInit() {
    this.getOrganizaciones();
    this.getOrganizacion();
  }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones()
      .subscribe(res => { 
        this.organizaciones = res,
        console.log(res)
      }
    )
  }

  getOrganizacion(): void {
    this.organizacionService.getOrganizacion(this.organizacion._id)
      .subscribe(res => { 
        this.organizacion = res,
        console.log(res)
      }
    )
  }

  updateOrganizacion(): void {
    this.organizacionService.updateOrganizacion(this.organizacion, this.organizacion._id)
      .subscribe()
  }

  deleteOrganizacion(): void{

  }

  // updateStatus(task: Task) {
  //   var newTask = {            
  //     _id: task._id,
  //     title: task.title,
  //     isDone: !task.isDone
  //   };
  //   this.taskService.updateTask(newTask)
  //     .subscribe(res => {
  //       task.isDone = !task.isDone;
  //     })
  // }

}
