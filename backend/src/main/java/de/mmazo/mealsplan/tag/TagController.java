package de.mmazo.mealsplan.tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class TagController {

    private final TagRepository tagRepository;

    @Autowired
    public TagController(TagRepository tagRepository){ this.tagRepository = tagRepository; }

    @SchemaMapping(typeName = "Query",value = "allTags")
    public Iterable<Tag> findAll() {
        return tagRepository.findAll();
    }

    @SchemaMapping(typeName = "Query",value = "findOneTag")
    public Tag findOneTag(long id) {
        return tagRepository.findById(id);
    }

}
