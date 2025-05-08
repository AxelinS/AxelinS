import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AneekaComponent } from './aneeka.component';

describe('AneekaComponent', () => {
  let component: AneekaComponent;
  let fixture: ComponentFixture<AneekaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AneekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AneekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
