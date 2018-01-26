import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeClientRowComponent } from './liste-client-row/liste-client-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    ListeClientRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
