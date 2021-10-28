/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.MessageRepository;
import com.reto3proyecto.reto3p.entities.Message;
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
  public Optional<Message> getMessage(int idMessage) {return messageRepository.getMessage(idMessage); };
  public Message save (Message message){
      if (message.getIdMessage()==null){
          return messageRepository.save(message);
      }
      else
      {
          Optional<Message> mo = messageRepository.getMessage(message.getIdMessage());
          if (mo.isEmpty()){
              return messageRepository.save(message);
          }
          else
          {
              return message;
          }
      }
      
      
  }
public Message update(Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> e=messageRepository.getMessage(message.getIdMessage());
            if(!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                messageRepository.save(e.get());
                return e.get();
            }else{
                return message;
            }
        }else{
            return message;
        }
    }


    public boolean deleteMessage(int messageId) {
        Boolean aBoolean = getMessage(messageId).map(message -> {
            messageRepository.delete(message);
            return true;
        }).orElse(false);
        return aBoolean;
    }    
}
