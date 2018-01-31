import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit {

  domain: string = 'http://localhost:10010';
  curso: any;

  constructor(private HttpClient: HttpClient) {
  }

  ngOnInit() {
    this.HttpClient.get(`${this.domain}/cursos`).subscribe(data =>{
      // console.log(data);
      this.curso = data;
    });
  }

}
