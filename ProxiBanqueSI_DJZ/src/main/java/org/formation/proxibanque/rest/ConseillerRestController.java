package org.formation.proxibanque.rest;

import java.util.List;

import javax.validation.Valid;

import org.formation.proxibanque.dao.DaoException;
import org.formation.proxibanque.dao.IDaoEmployee;
import org.formation.proxibanque.entity.Client;
import org.formation.proxibanque.entity.Employee;
import org.formation.proxibanque.service.IConseillerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

@RestController
public class ConseillerRestController implements IConseillerRestController {

	@Autowired
	private IConseillerService conseillerService;

	public ConseillerRestController() {
		super();
	}
	
	
	@Autowired
    private IDaoEmployee daoEmployee;
	
	@PostMapping("/auth")
	public ResponseEntity<Employee> kogin(@Valid @RequestBody Employee user) {
		user = daoEmployee.findEmployeeByLogin(user.getLogin());
		if ( null != user ) {
			user.setToken("Test token");
			return ResponseEntity.ok(user);
		} else
			return ResponseEntity.notFound().build();
	}
	
	@Override
	public ResponseEntity<Client> chercherClient(@PathVariable(value = "id") Long clientId) {
		try {
			Client foundClient = conseillerService.chercherClient(clientId);
			if (null == foundClient)
				return ResponseEntity.notFound().build();
			
			return ResponseEntity.ok(foundClient);

		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
	public ResponseEntity<Client> supprimerClient(@Valid @RequestBody Client client) {
		try {
			conseillerService.supprimerClient(client);
			
			return ResponseEntity.ok(client);
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	/**
	 * Recupere tous les client de la persistence
	 * 
	 * @return : une liste de client
	 * @throws DaoException
	 *             DaoException
	 */
	public ResponseEntity<List<Client>> listerTousClients() {
		try {
			List<Client> clis = conseillerService.listerTousClients();
			
			return ResponseEntity.ok(clis);
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	/**
	 * Recupere tous les client de la persistence
	 * 
	 * @return : une liste de client
	 * @throws DaoException
	 *             DaoException
	 */
	public ResponseEntity<List<Client>> listerClientsDeConseiller(@PathVariable(value = "id") Long idConseiller) {
		try {
			List<Client> clis = conseillerService.listerClientsDeConseiller(idConseiller);
			
			return ResponseEntity.ok(clis);
		} catch (DaoException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
