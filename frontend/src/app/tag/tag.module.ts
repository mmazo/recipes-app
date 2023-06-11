import { NgModule } from '@angular/core';
import { TagCrudListComponent } from './tag-crud-list/tag-crud-list.component';
import {CrudModule} from "../crud/crud.module";



@NgModule({
  declarations: [
    TagCrudListComponent
  ],
  imports: [ CrudModule.withConfig({apiBaseUrl: 'api/v1/tags', idAttributeName: 'tagId', listPathName: 'tags' }) ],
  exports: [TagCrudListComponent]
})
export class TagModule { }
