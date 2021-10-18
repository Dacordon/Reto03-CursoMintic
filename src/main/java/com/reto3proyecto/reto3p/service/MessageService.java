/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.MessageRepository;
import com.reto3proyecto.reto3p.entities.Message;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Consultor
 */
@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;
  public List<Message> getAll() {return (List<Message>) messageRepository.getAll();};
  public Optional<Message> getMessage(int id) {return messageRepository.getMessage(id); };
  public Message save (Message message){
      if (message.getId()==null){
          return messageRepository.save(message);
      }
      else
      {
          Optional<Message> mo = messageRepository.getMessage(message.getId());
          if (mo.isEmpty()){
              return messageRepository.save(message);
          }
          else
          {
              return message;
          }
      }
      
      
  }
}
