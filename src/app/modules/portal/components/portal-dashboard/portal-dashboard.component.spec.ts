import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDashboardComponent } from './portal-dashboard.component';

describe('PortalDashboardComponent', () => {
  let component: PortalDashboardComponent;
  let fixture: ComponentFixture<PortalDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalDashboardComponent]
    });
    fixture = TestBed.createComponent(PortalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
