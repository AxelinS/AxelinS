import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FoodScholarshipAppComponent } from './food-scholarship.component';

describe('FoodScholarshipComponent', () => {
  let component: FoodScholarshipAppComponent;
  let fixture: ComponentFixture<FoodScholarshipAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodScholarshipAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodScholarshipAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
