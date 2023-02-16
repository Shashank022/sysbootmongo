package com.boot.tmsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan(basePackages = "com.boot.tmsystem.*")
@EntityScan("com.boot.tmsystem.*")
@EnableMongoRepositories
@EnableScheduling
public class TmsystemApplication {
	public static void main(String[] args) {
			SpringApplication.run(TmsystemApplication.class, args);
		}
}
