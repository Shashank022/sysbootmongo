//package com.boot.tmsystem.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class BasicConfiguration extends WebSecurityConfigurerAdapter {
//
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
//                auth.inMemoryAuthentication()
//                        .withUser("user")
//                        .password(getPasswordEncoder().encode("pass"))
//                        .roles("USER")
//                        .and()
//                        .withUser("admin")
//                        .password("admin")
//                        .roles("ADMIN");
//    }
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http.authorizeRequests()
//                .antMatchers("/api/events").hasRole("user")
//                .antMatchers("/api/tasks").hasRole("user")
//                .antMatchers("/api/teams").hasRole("user")
//                .antMatchers("/api/users").hasRole("user")
//                .antMatchers("/api/user").hasRole("user")
//                .antMatchers("/swagger-ui.html").hasRole("user")
//                .antMatchers("/").permitAll()
//                .and().formLogin();
//
//        super.configure(http);
//    }
//
//    @Bean
//    public PasswordEncoder getPasswordEncoder() {
//        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        return encoder;
//    }
//}