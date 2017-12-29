import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwComponent } from './vieww.component';

describe('ViewwComponent', () => {
  let component: ViewwComponent;
  let fixture: ComponentFixture<ViewwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
