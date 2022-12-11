import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapreontazioniComponent } from './listapreontazioni.component';

describe('ListapreontazioniComponent', () => {
  let component: ListapreontazioniComponent;
  let fixture: ComponentFixture<ListapreontazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapreontazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapreontazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
