package org.formation.proxibanque.service;

import java.time.LocalDateTime;

import javax.annotation.PostConstruct;

import org.formation.proxibanque.dao.IDaoAgence;
import org.formation.proxibanque.entity.Adresse;
import org.formation.proxibanque.entity.Agence;
import org.formation.proxibanque.entity.Client;
import org.formation.proxibanque.entity.Conseiller;
import org.formation.proxibanque.entity.Gerant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Classe (Spring Bean) pour charger les donnees simulation au demarrage
 * 
 * 
 * @author JW
 *
 */

@Service
public class SimulationDataService {
	
	private static final Logger LOGGER =  LoggerFactory.getLogger(SimulationDataService.class);
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	@Autowired
	private IDaoAgence daoAgence;
	

	public SimulationDataService() {
		super();
	}

	@PostConstruct
	public void createSomeClient() {

		Adresse add = new Adresse("Paris", 75001, "IdF", "0123456789");

		Client client01 = new Client("Dupont", "Julien", "CL001",
				new Adresse("Palaiseau", 91120, "IdF", "01234567"));
		Client client02 = new Client("CLIENT02", "client02", "CL002",
				new Adresse("Palaiseau", 91120, "IdF", "01234567"));
		Client client03 = new Client("CLIENT03", "client03", "CL003",
				new Adresse("Palaiseau", 91120, "IdF", "01234567"));
		Client client04 = new Client("CLIENT04", "client04", "CL004",
				new Adresse("Palaiseau", 91120, "IdF", "01234567"));
		Client client05 = new Client("CLIENT05", "client05", "CL005",
				new Adresse("Palaiseau", 91120, "IdF", "01234567"));

		Client enterprise1 = new Client("Darty", "EJ001883", "CL006", add);
		Client enterprise2 = new Client("Carrefour", "EJ001223", "CL007", add);
		Client enterprise3 = new Client("Auchan", "E001234", "CL008", add);
		Client enterprise4 = new Client("SFR", "EJ9179875", "CL009", add);

		Conseiller leConseiller = new Conseiller("David", "SUPER", "C001", add);
		leConseiller.setLogin("conseiller");
		leConseiller.setPassword(passwordEncoder.encode("test"));
		
		leConseiller.addClient(client01);
		leConseiller.addClient(client02);
		leConseiller.addClient(client03);
		leConseiller.addClient(client04);
		leConseiller.addClient(client05);
		leConseiller.addClient(enterprise1);
		leConseiller.addClient(enterprise2);
		leConseiller.addClient(enterprise3);
		leConseiller.addClient(enterprise4);

		Gerant leGerant = new Gerant("WANG", "Julien", "CG002", add);
		leGerant.setLogin("gerant");
		leGerant.setPassword(passwordEncoder.encode("test"));
		
		
		Agence leAgence = new Agence("0001", LocalDateTime.now().toString(), leGerant);

		leGerant.addConseiller(leConseiller);
		leAgence.setGerant(leGerant);

		daoAgence.save(leAgence);
		
		LOGGER.debug("Create simulation data : " + leAgence.toString());
	}

}
