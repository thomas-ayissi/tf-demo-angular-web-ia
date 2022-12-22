import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7EditComponent } from './demo7-edit.component';

describe('Demo7EditComponent', () => {
  let component: Demo7EditComponent;
  let fixture: ComponentFixture<Demo7EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo7EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
