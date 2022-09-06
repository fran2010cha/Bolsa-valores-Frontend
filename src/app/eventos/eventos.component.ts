import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Evento } from './evento';
import { EventoService } from './evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  @Input() plataformaid:number;

  constructor(private eventoService: EventoService) { }

  eventos: Evento[] = [];


  ngOnInit(): void {
   
  }

  ngOnChanges(): void {
    this.eventos = [];
    this.listarEventos();
   
  }
   listarEventos(): void {
    if(this.plataformaid != undefined && this.plataformaid != null ){
    this.eventoService.getEventos(this.plataformaid).subscribe(
      result=>{
        for(let x in result){
          console.log(result[x].nombre_evento);
          this.eventos.push(result[x]);
        }
      }, error=>{
      });
    }
   }
}
