import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../services/organizacion.service';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-lista-organizaciones',
  templateUrl: './lista-organizaciones.component.html',
  styleUrls: ['./lista-organizaciones.component.css']
})
export class ListaOrganizacionesComponent implements OnInit {
  organizaciones;
  
  constructor(private organizacionService: OrganizacionService) { }

  ngOnInit() {
    this.getOrganizaciones();
  }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones()
      .subscribe(res => { 
        this.organizaciones = res,
        console.log(res)
      }
    )
  }

}
