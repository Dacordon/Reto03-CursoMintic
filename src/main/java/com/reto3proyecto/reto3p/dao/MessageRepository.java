/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.dao;

import com.reto3proyecto.reto3p.entities.Message;
import com.reto3proyecto.reto3p.entities.MessageCrud;
import com.reto3proyecto.reto3p.entities.Message;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Consultor
 */
@Repository
public class MessageRepository {
    @Autowired
    private MessageCrud messageCrudRepository;
    public List<Message> getAll(){return (List<Message>) messageCrudRepository.findAll();};
    public Optional<Message> getMessage(int idMessage) {return messageCrudRepository.findById(idMessage);};
    public Message save(Message message) {return messageCrudRepository.save(message);};
    public void delete (Message message){messageCrudRepository.delete(message);}
    
    
}
