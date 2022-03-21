import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBeneficiosFuncionariosComponent } from './lista-beneficios-funcionarios.component';

describe('ListaBeneficiosFuncionariosComponent', () => {
  let component: ListaBeneficiosFuncionariosComponent;
  let fixture: ComponentFixture<ListaBeneficiosFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBeneficiosFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBeneficiosFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
