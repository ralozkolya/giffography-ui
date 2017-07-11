import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumbComponent } from './event-thumb.component';

describe('EventThumbComponent', () => {
  let component: EventThumbComponent;
  let fixture: ComponentFixture<EventThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
