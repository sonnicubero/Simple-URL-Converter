import { Component, OnInit } from '@angular/core';
import { UrlconverterService } from '../service/urlconverter.service';

@Component({
  selector: 'app-convert-to-short',
  templateUrl: './convert-to-short.component.html',
  styleUrls: ['./convert-to-short.component.scss'],
})
export class ConvertToShortComponent implements OnInit {
  constructor(private urlConverterService: UrlconverterService) {}

  ngOnInit(): void {}
}
