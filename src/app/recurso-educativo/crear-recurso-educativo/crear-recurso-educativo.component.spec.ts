import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecursoEducativoComponent } from './crear-recurso-educativo.component';

describe('CrearRecursoEducativoComponent', () => {
  let component: CrearRecursoEducativoComponent;
  let fixture: ComponentFixture<CrearRecursoEducativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRecursoEducativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecursoEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
