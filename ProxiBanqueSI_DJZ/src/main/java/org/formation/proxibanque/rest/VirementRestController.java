package org.formation.proxibanque.rest;

import javax.validation.Valid;

import org.formation.proxibanque.dao.DaoException;
import org.formation.proxibanque.entity.Virement;
import org.formation.proxibanque.service.IVirementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class VirementRestController implements IVirementRestController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(VirementRestController.class);
	
	@Autowired
	private IVirementService virementService;
	
	public VirementRestController() {
		super();
	}


	@Override
	public ResponseEntity<Virement> faireVirement(@Valid @RequestBody Virement virement) {
		try {
			if (virementService.faireVirement(virement)) {
				return ResponseEntity.ok(virement);
			}
			
			return  ResponseEntity.notFound().build();
			
		} catch (DaoException e) {
			LOGGER.error("Exception : " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
