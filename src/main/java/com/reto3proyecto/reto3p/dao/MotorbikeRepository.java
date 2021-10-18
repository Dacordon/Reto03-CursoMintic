/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.dao;

import com.reto3proyecto.reto3p.entities.Motorbike;
import com.reto3proyecto.reto3p.entities.MotorbikeCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Consultor
 */
@Repository
public class MotorbikeRepository {
    @Autowired
    private MotorbikeCrud motorbikeCrudRepository;
    public List<Motorbike> getAll(){return (List<Motorbike>) motorbikeCrudRepository.findAll();};
    public Optional<Motorbike> getMotorbike(int id) {return motorbikeCrudRepository.findById(id);};
    public Motorbike save(Motorbike motorbike) {return motorbikeCrudRepository.save(motorbike);};
    
    
}
