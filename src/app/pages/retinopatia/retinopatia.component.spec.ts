import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetinopatiaComponent } from './retinopatia.component';

describe('RetinopatiaComponent', () => {
  let component: RetinopatiaComponent;
  let fixture: ComponentFixture<RetinopatiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetinopatiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetinopatiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
