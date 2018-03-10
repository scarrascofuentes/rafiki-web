import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecursoEducativoComponent } from './modificar-recurso-educativo.component';

describe('ModificarRecursoEducativoComponent', () => {
  let component: ModificarRecursoEducativoComponent;
  let fixture: ComponentFixture<ModificarRecursoEducativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRecursoEducativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRecursoEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
