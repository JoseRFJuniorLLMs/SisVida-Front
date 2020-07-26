import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcinomaComponent } from './carcinoma.component';

describe('CarcinomaComponent', () => {
  let component: CarcinomaComponent;
  let fixture: ComponentFixture<CarcinomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcinomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcinomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
