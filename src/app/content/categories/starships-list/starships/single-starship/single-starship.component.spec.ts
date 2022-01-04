import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStarshipComponent } from './single-starship.component';

describe('SingleStarshipComponent', () => {
  let component: SingleStarshipComponent;
  let fixture: ComponentFixture<SingleStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
