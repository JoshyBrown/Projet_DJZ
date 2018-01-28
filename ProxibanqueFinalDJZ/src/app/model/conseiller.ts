import { Adresse } from './adresse';

export class Conseiller {
  /* private @class: string = 'org.formation.proxibanque.entity.Conseiller'; */
  id: string;
  refEmployee: string;
  nom: string;
  prenom: string;
  login: string;
  password: string;
  adresse: Adresse;

constructor(id: string, refEmployee: string, nom: string, prenom: string, adresse?: Adresse, login?: string, password?: string) {
    this.id = id;
    this.refEmployee = refEmployee;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse || null;
    this.login = login || null;
    this.password = login || null;
  }

}
