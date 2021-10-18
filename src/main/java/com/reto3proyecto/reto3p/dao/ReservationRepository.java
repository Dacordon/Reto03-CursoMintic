/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.dao;

import com.reto3proyecto.reto3p.entities.Reservation;
import com.reto3proyecto.reto3p.entities.ReservationCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Consultor
 */
@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrud reservationCrudRepository;
    public List<Reservation> getAll(){return (List<Reservation>) reservationCrudRepository.findAll();};
    public Optional<Reservation> getReservation(int idReservation) {return reservationCrudRepository.findById(idReservation);};
    public Reservation save(Reservation reservation) {return reservationCrudRepository.save(reservation);};
    
    
}
