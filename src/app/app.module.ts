import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlconverterService } from './urlconverter/service/urlconverter.service';
import { URLConverterComponent } from './urlconverter/urlconverter.component';
import { UrlconverterModule } from './urlconverter/urlconverter.module';

@NgModule({
  declarations: [AppComponent, URLConverterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, UrlconverterModule],
  providers: [UrlconverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
