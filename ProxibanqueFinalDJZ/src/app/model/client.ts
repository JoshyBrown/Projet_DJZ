import { Adresse } from './adresse';
import { CompteCourant } from './compte-courant';
import { CompteEpargne } from './compte-epargne';
import { Conseiller } from './conseiller';

export class Client {
  id: string;
  refClient: string;
  nom: string;
  prenom: string;
  compteCourant: CompteCourant;
  compteEpargne: CompteEpargne;
  adresse: Adresse;
  login: string;
  password: string;
  conseiller: Conseiller;

constructor(id: string, refClient: string, nom: string, prenom: string, compteCourant: CompteCourant, compteEpargne: CompteEpargne, adresse?: Adresse, login?: string, password?: string) {
    this.id = id;
    this.refClient = refClient;
    this.nom = nom;
    this.prenom = prenom;
    this.compteCourant = compteCourant;
    this.compteEpargne = compteEpargne;
    this.adresse = adresse || null;
    this.login = login || null;
    this.password = login || null;
  }

}
