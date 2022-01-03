import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBarComponent } from './child-bar.component';

describe('ChildBarComponent', () => {
  let component: ChildBarComponent;
  let fixture: ComponentFixture<ChildBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
