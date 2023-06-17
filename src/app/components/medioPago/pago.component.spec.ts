import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioPagoComponent } from './pago.component';

describe('HeaderComponent', () => {
  let component:  MedioPagoComponent;
  let fixture: ComponentFixture< MedioPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  MedioPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( MedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
