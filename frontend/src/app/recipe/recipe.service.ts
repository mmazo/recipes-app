import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {
  public serviceUrl: string = 'api/v1/recipes';

  constructor(private http: HttpClient) {}

  public getList(searchValue?: string): Observable<Array<Recipe>> {
    const url = searchValue
      ? this.serviceUrl + '/search/searchByNameAndDescription'
      : this.serviceUrl;
    const options = searchValue
      ? { params: { value: searchValue } }
      : undefined;
    return this.http
      .get<{ _embedded: { recipes: Array<Recipe> } }>(url, options)
      .pipe(map((resp) => resp._embedded.recipes));
  }

  public deleteOne(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(this.serviceUrl + '/' + id);
  }

  public getOne(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.serviceUrl + '/' + id);
  }

  public updateOne(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(
      this.serviceUrl + '/' + recipe.recipeId,
      recipe
    );
  }

  public createOne(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.serviceUrl, recipe);
  }
}
