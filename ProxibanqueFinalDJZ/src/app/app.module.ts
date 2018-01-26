import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeClientRowComponent } from './liste-client-row/liste-client-row.component';



@NgModule({
  declarations: [
    AppComponent,
    UpdateclientComponent,
    ListeClientsComponent,
    ListeClientRowComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
