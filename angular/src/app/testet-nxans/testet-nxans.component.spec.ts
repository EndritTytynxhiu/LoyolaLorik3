import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestetNxansComponent } from './testet-nxans.component';

describe('TestetNxansComponent', () => {
  let component: TestetNxansComponent;
  let fixture: ComponentFixture<TestetNxansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestetNxansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestetNxansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
