import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConfiguracionComponent } from './lista-configuracion.component';

describe('ListaConfiguracionComponent', () => {
  let component: ListaConfiguracionComponent;
  let fixture: ComponentFixture<ListaConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConfiguracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
