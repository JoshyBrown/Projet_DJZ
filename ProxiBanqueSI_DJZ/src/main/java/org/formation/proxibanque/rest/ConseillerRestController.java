package org.formation.proxibanque.rest;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.formation.proxibanque.dao.DaoException;
import org.formation.proxibanque.entity.Client;
import org.formation.proxibanque.entity.ClientEntreprise;
import org.formation.proxibanque.entity.ClientParticulier;
import org.formation.proxibanque.service.IConseillerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * Classe qui regroupe tous les traitements concernant un Conseiller courrant. -
 * Ajouter un Client - Recuperer un Client par son ID, lire toutes ces
 * informations (data) - Modifier un Client - Supprimer un Client - Lister tous
 * les Client dans persistence - ToDo : simulationCredit et gestionPatrimoine
 * 
 * DaoClient est utilise ici pour Chercher ou Modifier l'information dans
 * persistance *
 * 
 * @author JW
 *
 */

@Service
public class ConseillerRestController implements IConseillerRestController {

	@Autowired
	private IConseillerService conseillerService;

	public ConseillerRestController() {
		super();
	}

	@Override
	public ResponseEntity<Client> chercherClient(Long clientId) {
		try {
			Client foundClient = conseillerService.chercherClient(clientId);
			if (null == foundClient)
				return ResponseEntity.notFound().build();
			
			return ResponseEntity.ok(foundClient);

		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.METHOD_FAILURE).build();
		}
	}

	/**
	 * Ajout d'un client dans la persistence
	 * 
	 * @param client
	 *            : client a ajouter
	 * @throws DaoException
	 *             DaoException
	 */
	public ResponseEntity<Client> ajouterClient(@Valid @RequestBody Client client) {
		try {
			conseillerService.ajouterClient(client);
			
			return ResponseEntity.ok(client);
			
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.METHOD_FAILURE).build();
		}
	}

	/**
	 * Mettre a jour un client dans la persistence
	 * 
	 * @param client
	 *            : le client modifie
	 * @throws DaoException
	 *             DaoException
	 */
	public ResponseEntity<Client> modifierClient(@Valid @RequestBody Client client) {
		try {
			conseillerService.modifierClient(client);
			
			return ResponseEntity.ok(client);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.METHOD_FAILURE).build();
		}
	}

	/**
	 * Suppression d'un client donne dans persistence
	 * 
	 * @param client
	 *            : le client a supprimer
	 * @throws DaoException
	 *             DaoException
	 */
	public void supprimerClient(@Valid @RequestBody Client client) {
		try {
			conseillerService.supprimerClient(client);
		} catch (DaoException e) {
			
		}
	}

	/**
	 * Recupere tous les client de la persistence
	 * 
	 * @return : une liste de client
	 * @throws DaoException
	 *             DaoException
	 */
	public List<Client> listerTousClients() {
		try {
			return conseillerService.listerTousClients();
		} catch (DaoException e) {
			return new ArrayList<>();
		}
	}

	/**
	 * Recupere tous les client de la persistence
	 * 
	 * @return : une liste de client
	 * @throws DaoException
	 *             DaoException
	 */
	public List<Client> listerClientsDeConseiller(@PathVariable(value = "id") Long idConseiller) {
		try {
			return conseillerService.listerClientsDeConseiller(idConseiller);
		} catch (DaoException e) {
			return new ArrayList<>();
		}
	}

	@Override
	public List<ClientParticulier> listerClientsParticulierDeConseiller(@PathVariable(value = "id") Long idConseiller)
			 {
//		try {
//			// return daoClient.selectAllClientParticulierByConseillerId(idConseiller);
//			return new ArrayList<>();
//		} catch (DaoException e) {
			return new ArrayList<>();
//		}
	}

	@Override
	public List<ClientEntreprise> listerClientsEntrepriseDeConseiller(@PathVariable(value = "id") Long idConseiller)
			 {
//		try {
//			// return daoClient.selectAllClientEntrepriseByConseillerId(idConseiller);
//			return new ArrayList<>();
//		} catch (DaoException e) {
			return new ArrayList<>();
//		}
	}

}