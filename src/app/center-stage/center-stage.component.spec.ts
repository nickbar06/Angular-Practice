import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterStageComponent } from './center-stage.component';

describe('CenterStageComponent', () => {
  let component: CenterStageComponent;
  let fixture: ComponentFixture<CenterStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
