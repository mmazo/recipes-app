import { Component } from '@angular/core';
import {CrudService} from "../../crud/crud.service";
import {TagService} from "../tag.service";
@Component({
  selector: 'app-tag-crud-list',
  templateUrl: './tag-crud-list.component.html',
  providers: [{provide: CrudService, useClass: TagService}]
})
export class TagCrudListComponent {}
