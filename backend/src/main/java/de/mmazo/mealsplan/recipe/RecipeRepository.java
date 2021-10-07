package de.mmazo.mealsplan.recipe;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "recipes", path = "recipes")
public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    // http://localhost:8080/recipes/search/findByName?name=Pizza
    List<Recipe> findByName(@Param("name") String name);

    // http://localhost:8080/recipes/1
    Recipe findById(@Param("id") long id);
}
