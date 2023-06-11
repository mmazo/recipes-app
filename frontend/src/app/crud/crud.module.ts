import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from "@angular/common/http";
import { ImageModule } from "../image/image.module";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ImageModule, FormsModule
  ],
  exports: [ListComponent]
})
export class CrudModule {}
