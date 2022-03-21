import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContaComponent } from './lista-conta.component';

describe('ListaContaComponent', () => {
  let component: ListaContaComponent;
  let fixture: ComponentFixture<ListaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
