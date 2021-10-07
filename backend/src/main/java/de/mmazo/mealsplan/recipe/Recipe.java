package de.mmazo.mealsplan.recipe;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private long imageId;

    public Long getId() {
        return id;
    }

    // expose recipe id for crud operations
    public Long getRecipeId() {
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

    public long getImageId() { return imageId; }

    public void setImageId(long imageId) { this.imageId = imageId; }
}
