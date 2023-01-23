import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrataMainComponent } from './administrata-main.component';

describe('AdministrataMainComponent', () => {
  let component: AdministrataMainComponent;
  let fixture: ComponentFixture<AdministrataMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrataMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
