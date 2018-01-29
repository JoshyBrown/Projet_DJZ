import { Adresse } from './adresse';
import { UserRole } from './user-role';

export class Employee {
  /* private @class: string = 'org.formation.proxibanque.entity.Conseiller'; */
  id: string;
  refEmployee: string;
  nom: string;
  prenom: string;
  login: string;
  password: string;
  adresse: Adresse;
  
  roles: UserRole[];

constructor(refEmployee?: string, nom?: string, prenom?: string, adresse?: Adresse, login?: string, password?: string) {
    this.refEmployee = refEmployee;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse || null;
    this.login = login || null;
    this.password = login || null;
  }

}
