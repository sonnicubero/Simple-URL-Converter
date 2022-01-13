import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UrlconverterService } from '../service/urlconverter.service';

@Component({
  selector: 'app-convert-to-short',
  templateUrl: './convert-to-short.component.html',
  styleUrls: ['./convert-to-short.component.scss'],
})
export class ConvertToShortComponent implements OnInit {
  // @Output()  = new EventEmitter();
  longURL: string = '';
  tinyURL: string = '';
  uniqueKey: string = '';

  isLongURLValid: boolean = false;

  constructor(private urlConverterService: UrlconverterService) {}

  ngOnInit(): void {}

  getUniqueKey() {
    this.uniqueKey =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5);
  }

  onConvertToShort() {
    this.getUniqueKey();

    this.isLongURLValid =
      this.longURL.startsWith('https://www.') ||
      this.longURL.startsWith('https://');

    if (!this.isLongURLValid) {
      this.longURL = 'https://' + this.longURL;
      this.isLongURLValid = true;
    }

    if (this.isLongURLValid) {
      this.tinyURL = 'tinyurl.com/' + this.uniqueKey;
    }
    console.log(this.tinyURL);
  }
}
