package de.mmazo.mealsplan.tag;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
public class SearchableTagRepositoryImpl implements SearchableTagRepository {
    private final EntityManager entityManager;

    public SearchableTagRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Tag> searchByNameAndDescription(String value) {
        Query query = entityManager.createNativeQuery("SELECT r.* from Tag r where UPPER(r.name) like UPPER(:word) or UPPER(r.description) like UPPER(:word)", Tag.class);
        query.setParameter("word", "%" + value + "%");
        return query.getResultList();
    }
}
