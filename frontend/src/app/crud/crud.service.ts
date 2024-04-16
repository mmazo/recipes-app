import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CrudItem, CrudServiceConfig} from "./models";
import {CrudServiceConfiguration} from "./crud-config.service";
@Injectable()
export abstract class CrudService {
  protected constructor(private http: HttpClient, @Inject(CrudServiceConfiguration) public config: CrudServiceConfig) {}

  private mapToDTO(item: CrudItem): any {
    const dto: any = {...item};
    dto[this.config.idAttributeName] = dto.id;
    delete dto.id;
    return dto;
  }

  private mapFromDTO(dto: any): CrudItem {
    const item: any = {...dto};
    item.id = item[this.config.idAttributeName];
    delete item[this.config.idAttributeName];
    return item as CrudItem;
  }

  public getList(searchValue?: string): Observable<Array<CrudItem>> {
    const url = searchValue
      ? this.config.apiBaseUrl + '/search/searchByNameAndDescription'
      : this.config.apiBaseUrl;
    const options = searchValue
      ? { params: { value: searchValue } }
      : undefined;
    return this.http
      .get<{ _embedded: { [key: string]: Array<CrudItem> } }>(url, options)
      .pipe(
        map(
          (resp) => {
                     const ret = resp._embedded[this.config.listPathName];
                     return ret.map((value) => this.mapFromDTO(value));
                 }
          )
      );
  }

  public deleteOne(id: number): Observable<CrudItem> {
    return this.http.delete<CrudItem>(this.config.apiBaseUrl + '/' + id);
  }

  public getOne(id: number): Observable<CrudItem> {
    return this.http.get<CrudItem>(this.config.apiBaseUrl + '/' + id);
  }

  public updateOne(item: CrudItem): Observable<CrudItem> {
    return this.http.put<CrudItem>(
      this.config.apiBaseUrl + '/' + item.id,
      this.mapToDTO(item)
    );
  }

  public createOne(item: CrudItem): Observable<CrudItem> {
    return this.http.post<CrudItem>(this.config.apiBaseUrl, this.mapToDTO(item));
  }

  public getTags(id: number): Observable<CrudItem> {
    return this.http.get<CrudItem>(this.config.apiBaseUrl + '/' + id + '/tags');
  }
}
