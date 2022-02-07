import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from './tag';
import { map } from 'rxjs/operators';

@Injectable()
export class TagService {
  public serviceUrl: string = 'api/v1/tags';

  constructor(private http: HttpClient) {}

  public getList(searchValue?: string): Observable<Array<Tag>> {
    const url = searchValue
      ? this.serviceUrl + '/search/searchByNameAndDescription'
      : this.serviceUrl;
    const options = searchValue
      ? { params: { value: searchValue } }
      : undefined;
    return this.http
      .get<{ _embedded: { tags: Array<Tag> } }>(url, options)
      .pipe(map((resp) => resp._embedded.tags));
  }

  public deleteOne(id: number): Observable<Tag> {
    return this.http.delete<Tag>(this.serviceUrl + '/' + id);
  }

  public getOne(id: number): Observable<Tag> {
    return this.http.get<Tag>(this.serviceUrl + '/' + id);
  }

  public updateOne(recipe: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.serviceUrl + '/' + recipe.tagId, recipe);
  }

  public createOne(recipe: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.serviceUrl, recipe);
  }
}
