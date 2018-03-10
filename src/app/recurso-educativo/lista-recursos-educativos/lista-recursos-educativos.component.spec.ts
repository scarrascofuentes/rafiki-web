import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecursosEducativosComponent } from './lista-recursos-educativos.component';

describe('ListaRecursosEducativosComponent', () => {
  let component: ListaRecursosEducativosComponent;
  let fixture: ComponentFixture<ListaRecursosEducativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecursosEducativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecursosEducativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
