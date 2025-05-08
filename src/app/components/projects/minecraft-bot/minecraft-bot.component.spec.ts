import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinecraftBotComponent } from './minecraft-bot.component';

describe('MinecraftBotComponent', () => {
  let component: MinecraftBotComponent;
  let fixture: ComponentFixture<MinecraftBotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecraftBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
