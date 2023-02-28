import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoSemanaComponent } from './compromisso-semana.component';

describe('CompromissoSemanaComponent', () => {
  let component: CompromissoSemanaComponent;
  let fixture: ComponentFixture<CompromissoSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromissoSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromissoSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
