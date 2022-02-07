import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TagService } from "./tag.service";
import { TagCrudListComponent } from './tag-crud-list/tag-crud-list.component';



@NgModule({
  declarations: [
    TagCrudListComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  providers: [TagService],
  exports: [TagCrudListComponent]
})
export class TagModule { }
