/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.AdminRepository;
import com.reto3proyecto.reto3p.entities.Admin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Consultor
 */
@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;
  public List<Admin> getAll() {return (List<Admin>) adminRepository.getAll();};
  public Optional<Admin> getAdmin(int id) {return adminRepository.getAdmin(id); };
  public Admin save (Admin admin){
      if (admin.getId()==null){
          return adminRepository.save(admin);
      }
      else
      {
          Optional<Admin> mo = adminRepository.getAdmin(admin.getId());
          if (mo.isEmpty()){
              return adminRepository.save(admin);
          }
          else
          {
              return admin;
          }
      }
      
      
  }
    
}
