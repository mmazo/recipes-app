import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  defaultRecipe: Recipe = {description: '', recipeId: -1, imageId: -1, name: ''};

  list: Array<Recipe> = [];

  selectedRecipe: Recipe = this.defaultRecipe;

  constructor(private recipes: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  public select(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  getRecipes() {
    this.recipes.getList().subscribe( (recipesList: Array<Recipe>) => {
      this.list = recipesList;
    }, (error: any) => {
      console.log(error);
    })
  }

  saveRecipe() {
    if (this.selectedRecipe.recipeId >= 0) {
      // save
      this.recipes.updateOne(this.selectedRecipe).subscribe(() => {
        this.getRecipes();
      }, (error) => {
        console.log(error);
      });
    } else {
      // create
      this.recipes.createOne(this.selectedRecipe).subscribe(() => {
        this.getRecipes();
      }, (error) => {
        console.log(error);
      });
    }
  }

  deleteRecipe(recipeId: number) {
    this.recipes.deleteOne(recipeId).subscribe(() => {
      this.getRecipes();
      this.selectedRecipe = this.defaultRecipe;
    }, (error) => {
      console.log(error);
    });
  }

  setRecipePicture(imageId: number) {
    this.selectedRecipe.imageId = imageId;
  }

}
