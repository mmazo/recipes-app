package de.mmazo.mealsplan.tag;

import java.util.List;

public interface SearchableTagRepository {
    List<Tag> searchByNameAndDescription(String value);
}
