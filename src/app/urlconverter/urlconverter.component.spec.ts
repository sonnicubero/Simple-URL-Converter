import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLConverterComponent } from './urlconverter.component';

describe('URLConverterComponent', () => {
  let component: URLConverterComponent;
  let fixture: ComponentFixture<URLConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(URLConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
