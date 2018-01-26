import { Adresse } from './adresse';
export class Client {
  id: string;
  nom: string;
  prenom: string;
  login: string;
  motDePasse: string;
  adresse: Adresse;

constructor(id: string, nom: string, prenom: string, adresse?: Adresse, login?: string, motDePasse?: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse || null;
    this.login = login || null;
    this.motDePasse = login || null;
  }

}
