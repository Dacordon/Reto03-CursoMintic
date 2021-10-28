/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.ReservationRepository;
import com.reto3proyecto.reto3p.entities.Reservation;
import com.reto3proyecto.reto3p.entities.Reservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Consultor
 */
@Service
public class ReservationService {
    @Autowired
    ReservationRepository reservationRepository;
  public List<Reservation> getAll() {return (List<Reservation>) reservationRepository.getAll();};
  public Optional<Reservation> getReservation(int idReservation) {return reservationRepository.getReservation(idReservation); };
  public Reservation save (Reservation reservation){
      if (reservation.getIdReservation()==null){
          return reservationRepository.save(reservation);
      }
      else
      {
          Optional<Reservation> mo = reservationRepository.getReservation(reservation.getIdReservation());
          if (mo.isEmpty()){
              return reservationRepository.save(reservation);
          }
          else
          {
              return reservation;
          }
      }
      
      
  }
public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e=reservationRepository.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){
                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                reservationRepository.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }


    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reservation -> {
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }  
    
}
