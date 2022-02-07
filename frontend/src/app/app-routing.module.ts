import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipe/recipes-list/recipes-list.component';
import { TagCrudListComponent } from "./tag/tag-crud-list/tag-crud-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesListComponent,
    children: [],
  },
  {
    path: 'tags',
    component: TagCrudListComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
