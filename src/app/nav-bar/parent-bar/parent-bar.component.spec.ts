import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBarComponent } from './parent-bar.component';

describe('ParentBarComponent', () => {
  let component: ParentBarComponent;
  let fixture: ComponentFixture<ParentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
