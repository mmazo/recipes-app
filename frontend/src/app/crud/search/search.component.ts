import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements AfterViewInit {

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
