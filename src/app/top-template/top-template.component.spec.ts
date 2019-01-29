import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTemplateComponent } from './top-template.component';

describe('TopTemplateComponent', () => {
  let component: TopTemplateComponent;
  let fixture: ComponentFixture<TopTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
