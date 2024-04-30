import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudItem, CrudLabels } from '../models';
import { CrudService } from '../crud.service';
export const ITEM_DETAILS_MODAL_ID = 'crudItemModal';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
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

  withTags: boolean;

  withImages: boolean;

  itemTags: any;

  constructor(private crudService: CrudService) {
    this.item = this.defaultItem;
    this.modalId = ITEM_DETAILS_MODAL_ID;
    this.labels = this.crudService.config.translations;
    this.withTags = this.crudService.config.withTags;
    this.withImages = this.crudService.config.withImage;
  }

  ngOnInit(): void {
    if (this.crudService.config.withTags && this.item.id !== -1) {
      this.crudService.getTags(this.item.id).subscribe({
        next: (tags) => (this.itemTags = tags),
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  saveItem() {
    if (this.item.id >= 0) {
      // save
      this.crudService.updateOne(this.item).subscribe({
        next: () => {
          this.onSave.emit();
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      // create
      this.crudService.createOne(this.item).subscribe({
        next: () => {
          this.onSave.emit();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  setItemPicture(imageId: number) {
    this.item.imageId = imageId;
  }
}
