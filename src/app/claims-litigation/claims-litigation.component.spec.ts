import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsLitigationComponent } from './claims-litigation.component';

describe('ClaimsLitigationComponent', () => {
  let component: ClaimsLitigationComponent;
  let fixture: ComponentFixture<ClaimsLitigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsLitigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsLitigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
