import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagCrudListComponent } from './tag/tag-crud-list/tag-crud-list.component';
import { RecipesListComponent } from './recipe/recipes-list/recipes-list.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesListComponent,
    TagCrudListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
