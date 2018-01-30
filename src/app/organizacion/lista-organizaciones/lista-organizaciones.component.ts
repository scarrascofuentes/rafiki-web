import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../services/organizacion.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PipeTransform, Pipe } from '@angular/core';
import { Organizacion } from '../../models/Organizacion';


@Component({
  selector: 'app-lista-organizaciones',
  templateUrl: './lista-organizaciones.component.html',
  styleUrls: ['./lista-organizaciones.component.css']
})
export class ListaOrganizacionesComponent implements OnInit {
  organizaciones: any;
  organizacionBuscada: String = '5a68fb901819653ad8d4ab12'; // Ejemplo

  constructor(
    private organizacionService: OrganizacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //this.route.params.subscribe(res => console.log(res.id));
  }

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

  updateOrganizacion(): void {
    // this.organizacionService.updateOrganizacion(this.organizacion, this.organizacion._id)
    //   .subscribe(res => {
        
    //   })
  }

  deleteOrganizacion(id: String): void{
    this.organizacionService.deleteOrganizacion(id)
      .subscribe(res => {
        console.log(res) 
      })
  }

}
