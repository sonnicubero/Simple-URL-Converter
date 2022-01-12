import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLConverterComponent } from './urlconverter/urlconverter.component';

const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: 'converter', component: URLConverterComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
