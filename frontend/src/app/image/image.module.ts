import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageService } from './image.service';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule, HttpClientModule, FileUploadModule],
  declarations: [ImageUploaderComponent, ImageDisplayComponent],
  providers: [ImageService],
  exports: [ImageUploaderComponent, ImageDisplayComponent],
})
export class ImageModule {}
