import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRecursoEducativoComponent } from './detalles-recurso-educativo.component';

describe('DetallesRecursoEducativoComponent', () => {
  let component: DetallesRecursoEducativoComponent;
  let fixture: ComponentFixture<DetallesRecursoEducativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesRecursoEducativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRecursoEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
