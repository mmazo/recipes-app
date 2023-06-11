import { Component } from '@angular/core';
import {CrudService} from "../../crud/crud.service";
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  providers: [CrudService]
})
export class RecipesListComponent {}
