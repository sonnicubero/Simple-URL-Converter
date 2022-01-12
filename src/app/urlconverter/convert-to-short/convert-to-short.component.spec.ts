import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToShortComponent } from './convert-to-short.component';

describe('ConvertToShortComponent', () => {
  let component: ConvertToShortComponent;
  let fixture: ComponentFixture<ConvertToShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
