import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag-crud-list',
  templateUrl: './tag-crud-list.component.html',
  styleUrls: ['./tag-crud-list.component.css'],
})
export class TagCrudListComponent implements OnInit {
  defaultTag: Tag = {
    description: '',
    name: '',
    tagId: -1,
  };
  list: Array<Tag> = [];
  selectedTag: Tag = this.defaultTag;

  constructor(private tags: TagService) {}

  ngOnInit(): void {
    this.getTags();
  }

  getTags(searchValue?: string) {
    this.tags.getList(searchValue).subscribe(
      (tagsList: Array<Tag>) => {
        this.list = tagsList;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public select(tag: Tag) {
    this.selectedTag = tag;
  }

  getRecipes(searchValue?: string) {
    this.tags.getList(searchValue).subscribe(
      (recipesList: Array<Tag>) => {
        this.list = recipesList;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteRecipe(tagId: number) {
    this.tags.deleteOne(tagId).subscribe(
      () => {
        this.getRecipes();
        this.selectedTag = this.defaultTag;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
