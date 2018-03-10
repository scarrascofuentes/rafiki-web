import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-recurso-educativo',
  templateUrl: './detalles-recurso-educativo.component.html',
  styleUrls: ['./detalles-recurso-educativo.component.css']
})
export class DetallesRecursoEducativoComponent implements OnInit {

  recursoEducativo: any;
  idRecursoEducativo: String;
  domain: string = 'http://localhost:10010/recursosEducativos';

  respuesta: Array<String>;


  constructor(private route: ActivatedRoute, private router: Router, private HttpClient: HttpClient) {
    
    this.route.params.subscribe(res => {
      
      this.idRecursoEducativo = res.id;
      

      console.log(res.id)
    })
  }

  getRecursoEducativo(){

    this.HttpClient.get(`${this.domain}/${this.idRecursoEducativo}`).subscribe(data =>{
      // console.log(data);
      this.recursoEducativo = data;
      console.log("GET RECURSO EDUCATIVO");
      console.log(this.recursoEducativo);
    
    });
  }

  ngOnInit() {
    this.getRecursoEducativo();
  }

}
