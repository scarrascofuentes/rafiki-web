import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PipeTransform, Pipe } from '@angular/core';
import { Organizacion } from '../../models/Organizacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-lista-recursos-educativos',
  templateUrl: './lista-recursos-educativos.component.html',
  styleUrls: ['./lista-recursos-educativos.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class ListaRecursosEducativosComponent implements OnInit {

  domain: string = 'http://localhost:10010/recursosEducativos';
  recursoEducativo: any;

  constructor(private HttpClient: HttpClient) { }

  getRecursosEducativos() {
    this.HttpClient.get(`${this.domain}`).subscribe(data => {
      //console.log(data);
      this.recursoEducativo = data;
    });
  }
   
  deleteRecursoEducativo(id){
    
    const respuesta = confirm('¿ Estás seguro que deseas eliminarlo?');

    if(respuesta){
      this.HttpClient.delete(`${this.domain}/${id}`).subscribe(data => {
        //console.log(data);
        this.ngOnInit();
      });
    }
  }

  ngOnInit() {

    this.getRecursosEducativos();
  }

}
