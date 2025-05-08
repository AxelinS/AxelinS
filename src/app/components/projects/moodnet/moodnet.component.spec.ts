import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoodnetComponent } from './moodnet.component';

describe('MoodnetComponent', () => {
  let component: MoodnetComponent;
  let fixture: ComponentFixture<MoodnetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
