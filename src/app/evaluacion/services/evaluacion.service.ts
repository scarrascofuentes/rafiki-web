import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable()
export class EvaluacionService {
  domain: string = "http://localhost:10010/evaluaciones";

  constructor(private http: HttpClient) { }
  
  getEvaluaciones()  {
    return this.http.get(`${this.domain}`)
  }

  getEvaluacion(id: String) {
    const url = `${this.domain}/${id}`;
    return this.http.get(url)
  }

  postEvaluacion(evaluacion: Object) {
    return this.http.post(`${this.domain}`, evaluacion)
  }

  updateOrganizacion(evaluacion: Object, id: String) {
    return this.http.put(`${this.domain}/${id}`, evaluacion, httpOptions)
  }
  
  deleteEvaluacion(id: String) {
    return this.http.delete(`${this.domain}/${id}`)
  }

}
