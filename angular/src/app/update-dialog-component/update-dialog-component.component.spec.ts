import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogComponentComponent } from './update-dialog-component.component';

describe('UpdateDialogComponentComponent', () => {
  let component: UpdateDialogComponentComponent;
  let fixture: ComponentFixture<UpdateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
