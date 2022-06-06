import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalControladorComponent } from './modal-controlador.component';

describe('ModalControladorComponent', () => {
  let component: ModalControladorComponent;
  let fixture: ComponentFixture<ModalControladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalControladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalControladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
