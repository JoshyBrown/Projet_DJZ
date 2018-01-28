import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirementComponent } from './virement/virement.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './service/auth.guard';
import { LoginGuard } from './service/login.guard';

const appRoutes: Routes = [
/*   { path: 'login', component: LoginComponent, canActivate: [LoginGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'virement', component: VirementComponent, canActivate: [AuthGuard] },
  { path: 'update-client/:id', component: UpdateclientComponent, canActivate: [AuthGuard] },
  { path: 'update-client', component: UpdateclientComponent, canActivate: [AuthGuard] },
  { path: 'gestion-client', component: ListeClientsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } */

  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'virement', component: VirementComponent },
  { path: 'update-client/:id', component: UpdateclientComponent },
  { path: 'update-client', component: UpdateclientComponent },
  { path: 'gestion-client', component: ListeClientsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
