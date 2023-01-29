import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStudentClassComponent } from './insert-student-class.component';

describe('InsertStudentClassComponent', () => {
  let component: InsertStudentClassComponent;
  let fixture: ComponentFixture<InsertStudentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertStudentClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertStudentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
