import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ITEM_DETAILS_MODAL_ID } from '../details/details.component';
import { CRUD_LABELS_DEFAULT, CrudItem, CrudLabels } from '../models';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  /*signals: true,*/
})
export class ListComponent implements OnInit {
  defaultItem: CrudItem = {
    description: '',
    id: -1,
    imageId: -1,
    name: '',
  };
  list: WritableSignal<Array<CrudItem>> = signal([]);
  selectedItem: WritableSignal<CrudItem> = signal(this.defaultItem);
  detailsModalId: WritableSignal<string> = signal(ITEM_DETAILS_MODAL_ID);
  labels: WritableSignal<CrudLabels> = signal(CRUD_LABELS_DEFAULT);

  constructor(private crudService: CrudService) {
    this.labels.update(() => this.crudService.config.translations);
  }

  ngOnInit(): void {
    this.getItems();
  }

  public select(recipe: CrudItem) {
    this.selectedItem.update(() => recipe);
  }

  getItems(searchValue?: string) {
    this.crudService.getList(searchValue).subscribe({
      next: (itemsList: Array<CrudItem>) => {
        this.list.update(() => itemsList);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  deleteItem(recipeId: number) {
    this.crudService.deleteOne(recipeId).subscribe({
      next: () => {
        this.getItems();
        this.selectedItem.update(() => this.defaultItem);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
