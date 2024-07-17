import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPickerComponent } from './action-picker.component';

describe('ActionPickerComponent', () => {
  let component: ActionPickerComponent;
  let fixture: ComponentFixture<ActionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
