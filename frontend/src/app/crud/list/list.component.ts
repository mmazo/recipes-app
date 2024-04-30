import { Component, OnInit } from '@angular/core';
import { ITEM_DETAILS_MODAL_ID } from '../details/details.component';
import { CrudItem, CrudLabels } from '../models';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  defaultItem: CrudItem = {
    description: '',
    id: -1,
    imageId: -1,
    name: '',
  };
  list: Array<CrudItem> = [];
  selectedItem: CrudItem = this.defaultItem;
  detailsModalId: string = ITEM_DETAILS_MODAL_ID;

  labels: CrudLabels;

  constructor(private crudService: CrudService) {
    this.labels = this.crudService.config.translations;
  }

  ngOnInit(): void {
    this.getItems();
  }

  public select(recipe: CrudItem) {
    this.selectedItem = recipe;
  }

  getItems(searchValue?: string) {
    this.crudService.getList(searchValue).subscribe({
      next: (itemsList: Array<CrudItem>) => {
        this.list = itemsList;
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
        this.selectedItem = this.defaultItem;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
