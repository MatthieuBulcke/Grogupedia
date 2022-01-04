import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpecieComponent } from './single-specie.component';

describe('SingleSpecieComponent', () => {
  let component: SingleSpecieComponent;
  let fixture: ComponentFixture<SingleSpecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSpecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
