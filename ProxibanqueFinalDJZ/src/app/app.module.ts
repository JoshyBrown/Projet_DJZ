import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeClientRowComponent } from './liste-client-row/liste-client-row.component';
import { VirementComponent } from './virement/virement.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';

import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './service/auth.guard';
import { LoginGuard } from './service/login.guard';
import { JwtInterceptor } from './service/jwt.interceptor';
import { ConseillerClientService } from './service/conseiller-client.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateclientComponent,
    ListeClientsComponent,
    ListeClientRowComponent,
    VirementComponent,
    LoginComponent,
    AlertComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    routing
  ],
  providers: [
    AuthGuard,
    LoginGuard,
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
