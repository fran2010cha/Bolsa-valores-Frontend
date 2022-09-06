import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventosComponent } from './eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { EventoService } from './eventos/evento.service';
import { PlataformaService } from './plataformas/plataforma.service';
import { PlataformasComponent } from './plataformas/plataformas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventosComponent,
    PlataformasComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventoService,PlataformaService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
