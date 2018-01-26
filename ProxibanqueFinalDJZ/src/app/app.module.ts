import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
