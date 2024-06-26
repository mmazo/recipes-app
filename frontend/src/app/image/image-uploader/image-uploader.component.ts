import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from '@augwit/ng2-file-upload';

import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent implements OnInit {
  @Output()
  uploadedImageId: EventEmitter<number> = new EventEmitter<number>();

  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  private prevUploadedImageId: number = -1;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private imageService: ImageService) {
    this.uploader = new FileUploader({ url: this.imageService.serviceUrl });
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any,
    ) => {
      let resp: Image = JSON.parse(response) as Image;
      this.returnUploadedImageId(resp.id);
      this.deleteOldImage(resp.id);
    };
  }

  ngOnInit() {
    //nothing for now
  }

  public returnUploadedImageId(id: number) {
    this.uploadedImageId.emit(id);
  }

  private deleteOldImage(newImageId: number) {
    if (this.prevUploadedImageId !== null) {
      this.imageService.deleteOne(this.prevUploadedImageId).subscribe({
        next: () => {
          this.prevUploadedImageId = newImageId;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
