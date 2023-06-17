import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedoresComponent} from './em.component';

describe('HeaderComponent', () => {
  let component: EmprendedoresComponent;
  let fixture: ComponentFixture<EmprendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
