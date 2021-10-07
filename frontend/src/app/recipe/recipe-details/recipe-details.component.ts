import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

export const RECIPE_DETAILS_MODAL_ID = 'recipeModal';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  defaultRecipe: Recipe = {description: '', recipeId: -1, imageId: -1, name: ''};

  @Input()
  recipe: Recipe;

  @Output()
  onSave: EventEmitter<void> = new EventEmitter<void>();

  modalId: string;

  constructor(private recipes: RecipeService) {
    this.recipe = this.defaultRecipe;
    this.modalId = RECIPE_DETAILS_MODAL_ID;
  }

  saveRecipe() {
    if (this.recipe.recipeId >= 0) {
      // save
      this.recipes.updateOne(this.recipe).subscribe(() => {
        this.onSave.emit();
      }, (error) => {
        console.log(error);
      });
    } else {
      // create
      this.recipes.createOne(this.recipe).subscribe(() => {
        this.onSave.emit();
      }, (error) => {
        console.log(error);
      });
    }
  }

  deleteRecipe(recipeId: number) {
    this.recipes.deleteOne(recipeId).subscribe(() => {
      // emit get recipes
      this.recipe = this.defaultRecipe;
    }, (error) => {
      console.log(error);
    });
  }

  setRecipePicture(imageId: number) {
    this.recipe.imageId = imageId;
  }

}
