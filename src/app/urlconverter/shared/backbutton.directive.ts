import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackbutton]',
})
export class BackbuttonDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick() {
    this.location.back();
  }
}
