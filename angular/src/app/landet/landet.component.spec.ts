import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandetComponent } from './landet.component';

describe('LandetComponent', () => {
  let component: LandetComponent;
  let fixture: ComponentFixture<LandetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
