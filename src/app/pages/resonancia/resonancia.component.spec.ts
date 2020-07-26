import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResonanciaComponent } from './resonancia.component';

describe('ResonanciaComponent', () => {
  let component: ResonanciaComponent;
  let fixture: ComponentFixture<ResonanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResonanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResonanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
