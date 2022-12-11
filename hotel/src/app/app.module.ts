import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListapreontazioniComponent } from './listapreontazioni/listapreontazioni.component';
import { DetagliStanzaComponent } from './detagli-stanza/detagli-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapreontazioniComponent,
    DetagliStanzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
