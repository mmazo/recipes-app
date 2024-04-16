import { Component } from '@angular/core';
import {CrudService} from "../../crud/crud.service";
import {RecipeService} from "../recipe.service";
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  providers: [{provide: CrudService, useClass: RecipeService}]
})
export class RecipesListComponent {}
