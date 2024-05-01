import { Component } from '@angular/core';
import { CrudService } from '../../crud/crud.service';
import { RecipeService } from '../recipe.service';
import { CrudModule } from '../../crud/crud.module';
@Component({
  selector: 'app-recipes-list',
  standalone: true,
  templateUrl: './recipes-list.component.html',
  imports: [CrudModule],
  providers: [{ provide: CrudService, useClass: RecipeService }],
})
export class RecipesListComponent {}
