/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto3proyecto.reto3p.service;

import com.reto3proyecto.reto3p.dao.CategoryRepository;
import com.reto3proyecto.reto3p.entities.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Consultor
 */
@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;
  public List<Category> getAll() {return (List<Category>) categoryRepository.getAll();};
  public Optional<Category> getCategory(int id) {return categoryRepository.getCategory(id); };
  public Category save (Category category){
      if (category.getId()==null){
          return categoryRepository.save(category);
      }
      else
      {
          Optional<Category> ca = categoryRepository.getCategory(category.getId());
          if (ca.isEmpty()){
              return categoryRepository.save(category);
          }
          else
          {
              return category;
          }
      }
      
      
  }
    
}