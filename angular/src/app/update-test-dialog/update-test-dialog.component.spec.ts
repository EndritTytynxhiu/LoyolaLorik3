import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestDialogComponent } from './update-test-dialog.component';

describe('UpdateTestDialogComponent', () => {
  let component: UpdateTestDialogComponent;
  let fixture: ComponentFixture<UpdateTestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
