import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPolizaComponent } from './form-poliza.component';

describe('FormPolizaComponent', () => {
  let component: FormPolizaComponent;
  let fixture: ComponentFixture<FormPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
