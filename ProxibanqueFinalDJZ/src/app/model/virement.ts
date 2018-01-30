import {Client} from './client';
import {Compte} from './compte';

export class Virement {
  id: string;
  debiteur: Client = new Client();
  crediteur: Client  = new Client();
  depart: Compte;
  cible: Compte;
  montant: number;
}
