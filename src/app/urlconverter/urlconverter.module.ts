import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { URLConverterRoutingModule } from './urlconverter-routing.module';
import { ConvertToShortComponent } from './convert-to-short/convert-to-short.component';

@NgModule({
  declarations: [ConvertToShortComponent],
  imports: [CommonModule, URLConverterRoutingModule],
  exports: [ConvertToShortComponent],
})
export class UrlconverterModule {}
