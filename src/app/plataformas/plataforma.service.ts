import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Plataforma} from './plataforma'
import { Observable } from 'rxjs';
import { Evento } from '../eventos/evento';
 
@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  private urlEndPoint:string = 'https://prueba-bolsa-valores.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getPlataformas(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.urlEndPoint+'plataformas/all');
  }

  getPlataformasEventos(param:number): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.urlEndPoint+'eventos/plataforma/'+param);
  }
}
