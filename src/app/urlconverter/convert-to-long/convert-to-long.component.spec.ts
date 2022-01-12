import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToLongComponent } from './convert-to-long.component';

describe('ConvertToLongComponent', () => {
  let component: ConvertToLongComponent;
  let fixture: ComponentFixture<ConvertToLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
