import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ImageModule } from '../image/image.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipesListComponent
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
