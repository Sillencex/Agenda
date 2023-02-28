import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoHojeComponent } from './compromisso-hoje.component';

describe('CompromissoHojeComponent', () => {
  let component: CompromissoHojeComponent;
  let fixture: ComponentFixture<CompromissoHojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromissoHojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromissoHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
