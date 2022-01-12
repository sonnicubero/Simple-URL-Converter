import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { URLConverterRoutingModule } from './urlconverter-routing.module';
import { ConvertToShortComponent } from './convert-to-short/convert-to-short.component';
import { ConvertToLongComponent } from './convert-to-long/convert-to-long.component';
import { BackbuttonDirective } from './shared/backbutton.directive';

@NgModule({
  declarations: [
    ConvertToShortComponent,
    ConvertToLongComponent,
    BackbuttonDirective,
  ],
  imports: [CommonModule, URLConverterRoutingModule],
  exports: [ConvertToShortComponent, ConvertToLongComponent],
})
export class UrlconverterModule {}
