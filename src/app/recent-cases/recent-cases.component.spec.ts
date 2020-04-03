import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCasesComponent } from './recent-cases.component';

describe('RecentCasesComponent', () => {
  let component: RecentCasesComponent;
  let fixture: ComponentFixture<RecentCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
