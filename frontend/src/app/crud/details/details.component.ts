import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CrudItem, CrudLabels} from "../models";
import {CrudService} from "../crud.service";
export const ITEM_DETAILS_MODAL_ID = 'crudItemModal';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  defaultItem: CrudItem = {
    description: '',
    id: -1,
    imageId: -1,
    name: '',
  };

  @Input()
  item: CrudItem;

  @Output()
  onSave: EventEmitter<void> = new EventEmitter<void>();

  modalId: string;

  labels: CrudLabels;

  constructor(private crudService: CrudService) {
    this.item = this.defaultItem;
    this.modalId = ITEM_DETAILS_MODAL_ID;
    this.labels = this.crudService.config.translations;
  }

  saveItem() {
    if (this.item.id >= 0) {
      // save
      this.crudService.updateOne(this.item).subscribe(
        () => {
          this.onSave.emit();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // create
      this.crudService.createOne(this.item).subscribe(
        () => {
          this.onSave.emit();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  setItemPicture(imageId: number) {
    this.item.imageId = imageId;
  }
}
