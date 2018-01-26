package org.formation.proxibanque.rest;

import java.util.List;

import javax.validation.Valid;

import org.formation.proxibanque.entity.Client;
import org.formation.proxibanque.entity.ClientEntreprise;
import org.formation.proxibanque.entity.ClientParticulier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/proxi_banque")
@PreAuthorize("hasRole('ROLE_CONSEILLER')")
public interface IConseillerRestController {
	
	@GetMapping("/clients/{id}")
	public ResponseEntity<Client> chercherClient(@PathVariable(value = "id") Long clientId);
	
	@PostMapping("/clients")
	public ResponseEntity<Client> ajouterClient(@Valid @RequestBody Client client);
	
	@PutMapping("/clients")
	public ResponseEntity<Client> modifierClient(@Valid @RequestBody Client client);
	
	@DeleteMapping("/clients")
	public void supprimerClient(@Valid @RequestBody Client client);
	
	@GetMapping("/clients")
	public List<Client> listerTousClients();
	
	@GetMapping("/clients_de_conseiller/{id}")
	public List<Client> listerClientsDeConseiller(@PathVariable(value = "id") Long idConseiller);
	
	@GetMapping("/clients_particulier_de_conseiller/{id}")
	public List<ClientParticulier> listerClientsParticulierDeConseiller(@PathVariable(value = "id") Long idConseiller);
	
	@GetMapping("/clients_entreprise_de_conseiller/{id}")
	public List<ClientEntreprise> listerClientsEntrepriseDeConseiller(@PathVariable(value = "id") Long idConseiller);
}
