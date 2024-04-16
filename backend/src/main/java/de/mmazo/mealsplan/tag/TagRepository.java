package de.mmazo.mealsplan.tag;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "tags", path = "tags")
public interface TagRepository extends CrudRepository<Tag, Long>, SearchableTagRepository {
    Tag findById(@Param("id") long id);
}
