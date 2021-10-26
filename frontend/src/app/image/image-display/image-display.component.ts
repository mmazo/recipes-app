import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css'],
})
export class ImageDisplayComponent implements OnInit {
  @Input()
  public cssClass: string | undefined;

  @Input()
  public id: number | undefined;

  constructor() {}

  ngOnInit() {}

  public imageUrl(): string {
    return '/api/v1/images/' + this.id;
  }
}
