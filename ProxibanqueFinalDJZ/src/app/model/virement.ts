import { Client } from './client';
import { Compte } from './compte';

export class Virement {
    debiteur: Client;
    crediteur: Client;
    depart: Compte;
    cible: Compte;
    montant: number;
}
