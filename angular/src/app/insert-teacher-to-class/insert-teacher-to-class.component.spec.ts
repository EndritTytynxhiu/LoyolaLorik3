import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTeacherToClassComponent } from './insert-teacher-to-class.component';

describe('InsertTeacherToClassComponent', () => {
  let component: InsertTeacherToClassComponent;
  let fixture: ComponentFixture<InsertTeacherToClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTeacherToClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTeacherToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
