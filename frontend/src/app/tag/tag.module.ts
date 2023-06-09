import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TagCrudListComponent } from './tag-crud-list/tag-crud-list.component';
import {CrudModule} from "../crud/crud.module";



@NgModule({
  declarations: [
    TagCrudListComponent
  ],
  imports: [ CrudModule.forRoot({apiBaseUrl: 'api/v1/tags', idAttributeName: 'tagId', listPathName: 'tags' }) ],
  exports: [TagCrudListComponent]
})
export class TagModule { }
