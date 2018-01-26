package org.formation.proxibanque.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

/**
 * Classe de Spring Security : vehiculer les differents views selon le ROLE de l'utilisateur logge
 * 
 * @author JW
 *
 */
@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
	
	private static final Logger LOGGER =  LoggerFactory.getLogger(CustomSuccessHandler.class);	
	
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	@Override
	protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException {
		String targetUrl = determineTargetUrl(authentication);

		if (response.isCommitted()) {
			LOGGER.info("Can't redirect");
			return;
		}

		redirectStrategy.sendRedirect(request, response, targetUrl);
	}

	/*
	 * This method extracts the roles of currently logged-in user and returns
	 * appropriate URL according to his/her role.
	 */
	protected String determineTargetUrl(Authentication authentication) {
		String url = "";

		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

		List<String> roles = new ArrayList<>();

		for (GrantedAuthority a : authorities) {
			roles.add(a.getAuthority());
		}

		if (roles.contains("ROLE_GERANT")) {
			url = "/gerant";
		} else if (roles.contains("ROLE_CONSEILLER")) {
			url = "/conseiller";
		} else {
			url = "/access_denied";
		}

		return url;
	}


	public void setRedirectStrategy(RedirectStrategy redirectStrategy) {
		this.redirectStrategy = redirectStrategy;
	}

	protected RedirectStrategy getRedirectStrategy() {
		return redirectStrategy;
	}
}
