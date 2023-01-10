import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInfoUpdateComponent } from './test-info-update.component';

describe('TestInfoUpdateComponent', () => {
  let component: TestInfoUpdateComponent;
  let fixture: ComponentFixture<TestInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInfoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
