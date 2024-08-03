import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolizaComponent } from './edit-poliza.component';

describe('EditPolizaComponent', () => {
  let component: EditPolizaComponent;
  let fixture: ComponentFixture<EditPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
