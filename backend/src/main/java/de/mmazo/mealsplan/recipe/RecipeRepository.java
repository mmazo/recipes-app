package de.mmazo.mealsplan.recipe;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "recipes", path = "recipes")
public interface RecipeRepository extends CrudRepository<Recipe, Long>, SearchableRecipeRepository {
    Recipe findById(@Param("id") long id);

    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods.query-creation
    List<Recipe> findByNameContainsIgnoreCase(@Param("name") String name);

    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.at-query
    @Query("select r from Recipe r where r.name like %?1% or r.description like %?1%")
    List<Recipe> mightySearch(String search);
}
