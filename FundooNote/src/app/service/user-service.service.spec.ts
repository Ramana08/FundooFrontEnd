import { TestBed } from '@angular/core/testing';
import { UserserviceService } from './user-service.service';


describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service).toBeTruthy();
  });
});
