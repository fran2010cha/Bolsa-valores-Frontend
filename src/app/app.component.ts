import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id_plataforma:number
  title = 'Eventos Digitales BVC';
  plataformaid:number;

  public receiveMessage(id:number){
    this.id_plataforma = id;
  }
}
