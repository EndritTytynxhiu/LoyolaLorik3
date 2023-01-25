import { TestBed } from '@angular/core/testing';

import { ClassTeacherInfoService } from './class-teacher-info.service';

describe('ClassTeacherInfoService', () => {
  let service: ClassTeacherInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassTeacherInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
