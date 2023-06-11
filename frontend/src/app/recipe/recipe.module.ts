import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {CrudModule} from "../crud/crud.module";

@NgModule({
  declarations: [RecipesListComponent],
  imports: [CrudModule.withConfig({ apiBaseUrl: 'api/v1/recipes', idAttributeName: 'recipeId', listPathName: 'recipes' })],
  exports: [RecipesListComponent],
})
export class RecipeModule {}
