/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.ClientRepository;
import com.reto3proyecto.reto3p.entities.Client;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Consultor
 */
@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;
  public List<Client> getAll() {return (List<Client>) clientRepository.getAll();};
  public Optional<Client> getClient(int idClient) {return clientRepository.getClient(idClient); };
  public Client save (Client client){
      if (client.getIdClient()==null){
          return clientRepository.save(client);
      }
      else
      {
          Optional<Client> mo = clientRepository.getClient(client.getIdClient());
          if (mo.isEmpty()){
              return clientRepository.save(client);
          }
          else
          {
              return client;
          }
      }
      
      
  }
    
}

