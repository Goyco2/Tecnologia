import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetagliStanzaComponent } from './detagli-stanza.component';

describe('DetagliStanzaComponent', () => {
  let component: DetagliStanzaComponent;
  let fixture: ComponentFixture<DetagliStanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetagliStanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetagliStanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
