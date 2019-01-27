import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropdownAnchorTriggerComponent } from './demo-dropdown-anchor-trigger.component';

describe('DemoDropdownAnchorTriggerComponent', () => {
  let component: DemoDropdownAnchorTriggerComponent;
  let fixture: ComponentFixture<DemoDropdownAnchorTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDropdownAnchorTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDropdownAnchorTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
