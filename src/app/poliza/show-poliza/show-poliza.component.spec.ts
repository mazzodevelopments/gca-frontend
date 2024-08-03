import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolizaComponent } from './show-poliza.component';

describe('ShowPolizaComponent', () => {
  let component: ShowPolizaComponent;
  let fixture: ComponentFixture<ShowPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
