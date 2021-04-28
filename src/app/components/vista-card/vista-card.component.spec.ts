import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCardComponent } from './vista-card.component';

describe('VistaCardComponent', () => {
  let component: VistaCardComponent;
  let fixture: ComponentFixture<VistaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
