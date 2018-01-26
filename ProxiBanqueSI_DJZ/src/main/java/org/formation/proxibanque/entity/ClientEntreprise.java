package org.formation.proxibanque.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity ClientEntreprise heriter de Client
 * 
 * @author JW
 *
 */


@Entity
@Table(name = "client_entreprise")
public class ClientEntreprise extends Client {

	private String noSiret;
	private String nomSociete;

	public ClientEntreprise() {
		super();
	}

	public ClientEntreprise(String noSiret, String nomSociete, String refClient, Adresse adresse) {
		super(refClient, adresse);
		this.noSiret = noSiret;
		this.nomSociete = nomSociete;
	}

	public String getNoSiret() {
		return noSiret;
	}

	public void setNoSiret(String noSiret) {
		this.noSiret = noSiret;
	}

	public String getNomSociete() {
		return nomSociete;
	}

	public void setNomSociete(String nomSociete) {
		this.nomSociete = nomSociete;
	}
}