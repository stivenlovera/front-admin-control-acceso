import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaControladoresComponent } from './lista-controladores.component';

describe('ListaControladoresComponent', () => {
  let component: ListaControladoresComponent;
  let fixture: ComponentFixture<ListaControladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaControladoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaControladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
