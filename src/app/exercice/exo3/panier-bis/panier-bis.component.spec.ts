import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierBisComponent } from './panier-bis.component';

describe('PanierBisComponent', () => {
  let component: PanierBisComponent;
  let fixture: ComponentFixture<PanierBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
