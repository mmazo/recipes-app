import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {CrudModule} from "../crud/crud.module";
@NgModule({
  declarations: [RecipesListComponent],
  imports: [CrudModule],
  exports: [RecipesListComponent],
})
export class RecipeModule {}
