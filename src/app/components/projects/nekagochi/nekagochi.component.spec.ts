import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NekagochiComponent } from './nekagochi.component';

describe('NekagochiComponent', () => {
  let component: NekagochiComponent;
  let fixture: ComponentFixture<NekagochiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NekagochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NekagochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
