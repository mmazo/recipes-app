import {CrudService} from "../crud/crud.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TagService extends CrudService {
  constructor(http: HttpClient) {
    super(http, {apiBaseUrl: 'api/v1/tags', idAttributeName: 'tagId', listPathName: 'tags' });
  }

}
