/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.entities.Motorbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Consultor
 */
@RestController
@RequestMapping("/api/Motorbike")
public class MotorbikeController {
    @Autowired
    private MotorbikeService motorbikeService;
    @GetMapping("/all")
    public List<Motorbike> getMotorbike() {return motorbikeService.getAll(); };
    @GetMapping ("/{id}")
    public Optional <Motorbike> getMotorbike(@PathVariable("id") int MotorbikeId){
        return motorbikeService.getMotorbike(MotorbikeId);
    }   
    @PostMapping("/save")
    public Motorbike save(@RequestBody Motorbike motorbike) {return motorbikeService.save(motorbike);}
    
}
