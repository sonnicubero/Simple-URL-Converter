import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlconverterService } from './urlconverter/service/urlconverter.service';
import { URLConverterComponent } from './urlconverter/urlconverter.component';

@NgModule({
  declarations: [AppComponent, URLConverterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UrlconverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
