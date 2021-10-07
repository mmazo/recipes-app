import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ImageModule } from '../image/image.module';
import { FormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsComponent
  ],
    imports: [
        CommonModule,
        ImageModule,
        FormsModule
    ],
  providers: [RecipeService],
  exports: [RecipesListComponent]
})
export class RecipeModule { }
