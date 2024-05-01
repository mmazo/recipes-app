import { Component } from '@angular/core';
import { CrudService } from '../../crud/crud.service';
import { TagService } from '../tag.service';
import { CrudModule } from '../../crud/crud.module';
@Component({
  selector: 'app-tag-crud-list',
  standalone: true,
  templateUrl: './tag-crud-list.component.html',
  imports: [CrudModule],
  providers: [{ provide: CrudService, useClass: TagService }],
})
export class TagCrudListComponent {}
