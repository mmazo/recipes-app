import { ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CrudService } from "./crud.service";
import { CrudServiceConfig } from "./models";
import { CrudServiceConfiguration } from "./crud-config.service";
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
export class CrudModule {
  static withConfig(config: CrudServiceConfig): ModuleWithProviders<CrudModule> {
    return {
      ngModule: CrudModule,
      providers: [
        CrudService,
        {provide: CrudServiceConfiguration, useValue: config}
      ]
    };
  }
}
