import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertToLongComponent } from './convert-to-long/convert-to-long.component';
import { ConvertToShortComponent } from './convert-to-short/convert-to-short.component';

const routes: Routes = [
  {
    path: 'convert-to-short',
    component: ConvertToShortComponent,
  },
  {
    path: 'convert-to-long',
    component: ConvertToLongComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class URLConverterRoutingModule {}
