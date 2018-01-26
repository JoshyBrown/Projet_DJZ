import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpdateclientComponent } from './updateclient/updateclient.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeClientsComponent,
    UpdateclientComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
