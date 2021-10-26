import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ImageModule } from '../image/image.module';
import { FormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

@NgModule({
  declarations: [RecipesListComponent, RecipeDetailsComponent, RecipeSearchComponent],
  imports: [CommonModule, HttpClientModule, ImageModule, FormsModule],
  providers: [RecipeService],
  exports: [RecipesListComponent],
})
export class RecipeModule {}
