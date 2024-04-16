package de.mmazo.mealsplan.recipe;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

// https://www.baeldung.com/spring-data-composable-repositories
// https://www.baeldung.com/jpa-query-parameters
@Repository
public class SearchableRecipeRepositoryImpl implements SearchableRecipeRepository {

    private final EntityManager entityManager;

    public SearchableRecipeRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Recipe> searchByNameAndDescription(String value) {
        Query query = entityManager.createNativeQuery("SELECT r.* from Recipe r where UPPER(r.name) like UPPER(:word) or UPPER(r.description) like UPPER(:word)", Recipe.class);
        query.setParameter("word", "%" + value + "%");
        return query.getResultList();
    }
}
