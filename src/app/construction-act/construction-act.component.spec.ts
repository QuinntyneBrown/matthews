import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionActComponent } from './construction-act.component';

describe('ConstructionActComponent', () => {
  let component: ConstructionActComponent;
  let fixture: ComponentFixture<ConstructionActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
