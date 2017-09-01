package org.formation.proxibanque.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Classe de configuration Spring Security 
 *  - filtrage des acces selon ROLE
 *  - configurer AuthenticationManagerBuilder pour verifier password utilisateur logge
 * 
 * @author JW
 *
 */
@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = CustomUserDetailsService.class)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    
	@Autowired
    UserDetailsService customUserDetailsService;
	
	@Autowired
    CustomSuccessHandler customSuccessHandler;

  
    @Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
	}


	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic()  
        .and()  
        .logout()  
        .and()
		.authorizeRequests()
//		.anyRequest().permitAll();
		.anyRequest().authenticated()
        .antMatchers("/", "/conseiller*").access("hasRole('ROLE_CONSEILLER')")
        .antMatchers("/", "/gerant*").access("hasRole('ROLE_GERANT')")
//        .and()
//        .formLogin()
//        	.loginPage("/login").loginProcessingUrl("/login")
//        	.successHandler(customSuccessHandler)
//        	.usernameParameter("login").passwordParameter("password")
//        	.failureUrl("/login")
        .and()
        	.csrf().disable();
//        .exceptionHandling().accessDeniedPage("/access_denied");
    }
	
	@Bean
	public PasswordEncoder passwordEncoder(){
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}
}