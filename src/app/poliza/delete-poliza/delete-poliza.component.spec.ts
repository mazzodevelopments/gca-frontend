import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePolizaComponent } from './delete-poliza.component';

describe('DeletePolizaComponent', () => {
  let component: DeletePolizaComponent;
  let fixture: ComponentFixture<DeletePolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
