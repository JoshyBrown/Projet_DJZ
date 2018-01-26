package org.formation.proxibanque.rest;

import java.util.List;

import javax.validation.Valid;

import org.formation.proxibanque.dao.DaoException;
import org.formation.proxibanque.entity.Agence;
import org.formation.proxibanque.entity.Client;
import org.formation.proxibanque.entity.Conseiller;
import org.formation.proxibanque.service.IGerantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Classe qui regroupe tous les traitements concernant un Gerant courrant. -
 * Ajouter un conseiller Audit
 * 
 * mDaoAgence est utilise ici pour Chercher ou Modifier l'information dans
 * persistance *
 * 
 * @author JW
 *
 */

@RestController
public class GerantRestController implements IGerantRestController {

	@Autowired
	private IGerantService gerantController;
	
	public GerantRestController() {
		super();
	}

	@Override
	public ResponseEntity<Conseiller> chercherConseiller(@PathVariable(value = "id") Long idConseiller) {
		try {
			Conseiller foundConseiller = gerantController.chercherConseiller(idConseiller);
			if (null == foundConseiller)
				return ResponseEntity.notFound().build();
			
			return ResponseEntity.ok(foundConseiller);

		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Override
	public ResponseEntity<Conseiller> ajouterConseiller(@Valid @RequestBody Conseiller conseiller) {
		try {
			gerantController.ajouterConseiller(conseiller);
			
			return ResponseEntity.ok(conseiller);
			
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Override
	public ResponseEntity<Conseiller> modifierConseiller(@Valid @RequestBody Conseiller conseiller) {
		try {
			gerantController.modifierConseiller(conseiller);
			
			return ResponseEntity.ok(conseiller);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Override
	public ResponseEntity<Conseiller> supprimerConseiller(@Valid @RequestBody Conseiller conseiller) {
		try {
			gerantController.supprimerConseiller(conseiller);
			
			return ResponseEntity.ok(conseiller);
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
		
	}

	@Override
	public ResponseEntity<List<Conseiller>> listerConseillersDuGerant(@PathVariable(value = "id") Long idGerent) {
		try {
			List<Conseiller> cons = gerantController.listerConseillersDuGerant(idGerent); 
			return ResponseEntity.ok(cons);
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}    
	}

	/**
	 * Methode d'audit sur un agence selon les regle,
	 * 
	 * @param a
	 *            : l'agence a auditer
	 * @param listDebiteurs
	 *            : liste de debiteurs
	 * @return : si audit est reussi (pas de debiteur) ou pas
	 */
	@Override
	public boolean faireAudite(Agence a, List<Client> listDebiteurs) {

		boolean hasDebiteurs = false;

//		for (Conseiller con : a.getGerant().getConseillerList()) {
//			for (Client clt : con.getClientsList()) {
//
//				if (clt instanceof ClientParticulier
//						&& clt.getCompteCourant().getSolde() < CompteCourant.MAXI_DECOUVERT_PARTICULIER) {
//					listDebiteurs.add(clt);
//					hasDebiteurs = true;
//				}
//				if (clt instanceof ClientEntreprise
//						&& clt.getCompteCourant().getSolde() < CompteCourant.MAXI_DECOUVERT_ENTREPRISE) {
//					listDebiteurs.add(clt);
//					hasDebiteurs = true;
//				}
//
//			}
//		}

		return !hasDebiteurs;
	}

}
