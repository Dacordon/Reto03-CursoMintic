package com.reto3proyecto.reto3p;

import com.reto3proyecto.reto3p.service.MotorbikeController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan(basePackageClasses = MotorbikeController.class)
public class Reto3pApplication {

	public static void main(String[] args) {
		SpringApplication.run(Reto3pApplication.class, args);
	}

}
