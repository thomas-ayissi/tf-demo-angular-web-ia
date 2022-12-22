import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7CreateComponent } from './demo7-create.component';

describe('Demo7CreateComponent', () => {
  let component: Demo7CreateComponent;
  let fixture: ComponentFixture<Demo7CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo7CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
