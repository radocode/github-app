import { TestBed } from '@angular/core/testing';

import { DarkToggleService } from './dark-toggle.service';

describe('DarkToggleService', () => {
  let service: DarkToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
