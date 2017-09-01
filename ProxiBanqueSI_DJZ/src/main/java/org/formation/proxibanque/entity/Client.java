package org.formation.proxibanque.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Entity Client abstract (strategy JOINED TABLE)
 * 
 * @author JW
 *
 */


@JsonIgnoreProperties(value = {"conseiller"})
@Entity
@Table(name = "client")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(unique = true)
	private String refClient;

	@Embedded
	private Adresse adresse;

	@OneToOne(mappedBy = "client", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	private CompteCourant compteCourant;

	@OneToOne(mappedBy = "client", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	private CompteEpargne compteEpargne;

	@ManyToOne
	private Conseiller conseiller;

	public Client() {
		super();
		adresse = new Adresse();
		
		this.setCompteCourant(new CompteCourant());
		this.setCompteEpargne(new CompteEpargne());
	}

	public Client(String refClient, Adresse adresse) {
		super();
		this.refClient = refClient;
		this.adresse = adresse;

		this.setCompteCourant(new CompteCourant());
		this.setCompteEpargne(new CompteEpargne());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRefClient() {
		return refClient;
	}

	public void setRefClient(String refClient) {
		this.refClient = refClient;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public Conseiller getConseiller() {
		return conseiller;
	}

	public void setConseiller(Conseiller monConseiller) {
		this.conseiller = monConseiller;
	}

	public CompteCourant getCompteCourant() {
		return compteCourant;
	}

	public CompteEpargne getCompteEpargne() {
		return compteEpargne;
	}

	public void setCompteCourant(CompteCourant compteCourant) {
		compteCourant.setClient(this);
		this.compteCourant = compteCourant;
	}

	public void setCompteEpargne(CompteEpargne compteEpargne) {
		compteEpargne.setClient(this);
		this.compteEpargne = compteEpargne;
	}
}