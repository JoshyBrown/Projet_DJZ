import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { VirementComponent } from './virement/virement.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';

import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './service/auth.guard';
import { JwtInterceptor } from './service/jwt.interceptor';
import { ConseillerClientService } from './service/conseiller-client.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { ListeConseillersComponent } from './liste-conseillers/liste-conseillers.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateclientComponent,
    ListeClientsComponent,
    VirementComponent,
    LoginComponent,
    AlertComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    ListeConseillersComponent,
    DeleteClientComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ConseillerClientService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
