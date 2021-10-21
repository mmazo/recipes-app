package de.mmazo.mealsplan.recipe;

import java.util.List;

public interface SearchableRecipeRepository {
    List<Recipe> searchByNameAndDescription(String value);
}
