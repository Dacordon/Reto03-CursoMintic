
package com.reto3proyecto.reto3p.dao;

import com.reto3proyecto.reto3p.entities.Category;
import com.reto3proyecto.reto3p.entities.CategoryCrud;
import com.reto3proyecto.reto3p.entities.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Consultor
 */
@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrud categoryCrudRepository;
    public List<Category> getAll(){return (List<Category>) categoryCrudRepository.findAll();};
    public Optional<Category> getCategory(int id) {return categoryCrudRepository.findById(id);};
    public Category save(Category category) {return categoryCrudRepository.save(category);};
    public void delete (Category category){categoryCrudRepository.delete(category);}
    
    
}

