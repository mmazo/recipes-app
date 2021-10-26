import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements AfterViewInit {

  @ViewChild("searchField")
  searchField: ElementRef | undefined;

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  doSearch(val: string) {
    this.onSearch.emit(val);
  }

  ngAfterViewInit(): void {
    this.searchField?.nativeElement?.focus();
  }

}
