import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyServiceComponent } from './agency-service.component';

describe('AgencyServiceComponent', () => {
  let component: AgencyServiceComponent;
  let fixture: ComponentFixture<AgencyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
