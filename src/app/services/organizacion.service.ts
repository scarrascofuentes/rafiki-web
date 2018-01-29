import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OrganizacionService {

  domain: string = "http://localhost:10010";

  constructor(private http: HttpClient) { }

  getOrganizaciones()  {
    //console.log(this.http.get<Organizacion[]>(`${this.domain}/organizaciones`));
    return this.http.get(`${this.domain}/organizaciones`)
  }
}
