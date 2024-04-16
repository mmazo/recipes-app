import { Injectable } from '@angular/core';
import { Image } from './image';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  public serviceUrl: string = 'api/v1/images';

  constructor(private http: HttpClient) {}

  public deleteOne(id: number): Observable<Image> {
    return this.http.delete<Image>(this.serviceUrl + '/' + id);
  }
}
