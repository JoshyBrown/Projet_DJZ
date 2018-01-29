import { Adresse } from './adresse';

export class Client {
  id: string;
  refClient: string;
  nom: string;
  prenom: string;
  login: string;
  password: string;
  adresse: Adresse;

constructor(id: string, refClient: string, nom: string, prenom: string, adresse?: Adresse, login?: string, password?: string) {
    this.id = id;
    this.refClient = refClient;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse || null;
    this.login = login || null;
    this.password = login || null;
  }

}
