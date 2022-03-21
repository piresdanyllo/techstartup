import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInativosComponent } from './lista-inativos.component';

describe('ListaInativosComponent', () => {
  let component: ListaInativosComponent;
  let fixture: ComponentFixture<ListaInativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
