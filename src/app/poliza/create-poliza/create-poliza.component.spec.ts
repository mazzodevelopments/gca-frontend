import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePolizaComponent } from './create-poliza.component';

describe('CreatePolizaComponent', () => {
  let component: CreatePolizaComponent;
  let fixture: ComponentFixture<CreatePolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
