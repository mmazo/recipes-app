package de.mmazo.mealsplan.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class RecipeGraphQLController {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeGraphQLController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @SchemaMapping(typeName = "Query", value="allRecipes")
    public Iterable<Recipe> findAll() {
        return recipeRepository.findAll();
    }
}
