import { Component } from '@angular/core';
import {CrudService} from "../../crud/crud.service";
@Component({
  selector: 'app-tag-crud-list',
  templateUrl: './tag-crud-list.component.html',
  providers: [CrudService]
})
export class TagCrudListComponent {}
