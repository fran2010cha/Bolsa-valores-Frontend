import { Injectable } from '@angular/core';
import {Evento} from './evento'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private urlEndPoint:string = 'https://prueba-bolsa-valores.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getEventos(t:number): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.urlEndPoint+'eventos/plataforma/'+t);
  }
}
