import { TestBed } from '@angular/core/testing';

import { GroceriesService } from './groceries.service';

describe('GroceriesService', () => {
  let service: GroceriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllGroceries should return value from observable',
    (done: DoneFn) => {
    service.getAllGroceries().subscribe(value => {
      expect(value).toEqual(jasmine.any(Array));
      const valueKeys = Object.keys(value[0])
      expect(valueKeys).toEqual(jasmine.arrayContaining(["name", "unit", "costPerUnit"]));
      done();
    });
  });

});
