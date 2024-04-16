package de.mmazo.mealsplan.tag;

import de.mmazo.mealsplan.recipe.Recipe;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;

    private long imageId;

    @ManyToMany(mappedBy = "tags")
    private Set<Recipe> recipes;

    public Long getId() {
        return id;
    }

    public Long getTagId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Recipe> getRecipes() { return recipes; }

    public long getImageId() { return imageId; }

    public void setImageId(long imageId) { this.imageId = imageId; }
}
