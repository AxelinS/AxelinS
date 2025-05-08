import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AiosuComponent } from './ai-osu.component';

describe('AneekaComponent', () => {
  let component: AiosuComponent;
  let fixture: ComponentFixture<AiosuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AiosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
