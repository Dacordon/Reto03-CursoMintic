/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.dao;

import com.reto3proyecto.reto3p.entities.Client;
import com.reto3proyecto.reto3p.entities.Reservation;
import com.reto3proyecto.reto3p.entities.Reservation;
import com.reto3proyecto.reto3p.entities.ReservationCrud;
import com.reto3proyecto.reto3p.reports.countClients;
import com.reto3proyecto.reto3p.reports.statusReservations;
import java.util.ArrayList;
import java.util.Date;
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
    public void delete (Reservation reservation){reservationCrudRepository.delete(reservation);}
    
     public List<Reservation> ReservacionStatus (String status){
         return reservationCrudRepository.findAllByStatus(status);
     }
    
    public List<Object[]>getTopClient(){
        return reservationCrudRepository.countTotalReservationsByClient();
    }
    
    public List<Reservation> ReservacionTiempo (Date a, Date b){
         return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(a, b);
     }

}
