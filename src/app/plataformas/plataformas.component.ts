import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Plataforma } from './plataforma';
import { PlataformaService } from './plataforma.service';


@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  plataformas: Plataforma[] = [];
  @Output() eventplataforma = new EventEmitter();
  seleccionado:Plataforma=new Plataforma(0," ", " ");

  constructor(private plataformaService: PlataformaService) { }

  ngOnInit(): void {
     this.plataformaService.getPlataformas()
      .subscribe(
				result=>{
					for(let x in result){
						this.plataformas.push(result[x]);
					}
				}, error=>{
				});
  }

  capturar() {
    //console.log("sel--"+this.seleccionado.id);
    this.eventplataforma.emit( this.seleccionado.id) 
}

}
