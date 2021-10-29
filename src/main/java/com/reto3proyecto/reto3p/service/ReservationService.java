/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.ReservationRepository;
import com.reto3proyecto.reto3p.entities.Client;
import com.reto3proyecto.reto3p.entities.Reservation;
import com.reto3proyecto.reto3p.reports.countClients;
import com.reto3proyecto.reto3p.reports.statusReservations;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
    
    public statusReservations getReporteStatusReservaciones(){
        List<Reservation>completed= reservationRepository.ReservacionStatus("completed");
        List<Reservation>cancelled= reservationRepository.ReservacionStatus("cancelled");
        return new statusReservations(completed.size(), cancelled.size());
    }
    
      public List<countClients> getTopClientByCategory(){
        List<Object[]> report= reservationRepository.getTopClient();
        List<countClients>res=new ArrayList<>();
        for(int i=0;i<report.size();i++){
            res.add(new countClients((Long)report.get(i)[1],(Client) report.get(i)[0]));
        }
        return res;
      }    
    
        public List<Reservation> getReportesTiempoReservaciones(String datoA, String datoB){
        SimpleDateFormat parser=new SimpleDateFormat ("yyyy-MM-dd");
        Date datoUno = new Date();
        Date datoDos = new Date();
        
        try{
            datoUno = parser.parse(datoA);
            datoDos = parser.parse(datoB);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(datoUno.before(datoDos)){
            return reservationRepository.ReservacionTiempo(datoUno, datoDos);
        }else{
            return new ArrayList<>();
        }
    } 
    
    
}
