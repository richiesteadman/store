import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ExchangeService } from './exchange.service';

describe('ExchangeService', () => {
  let injector: TestBed;
  let service: ExchangeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExchangeService]
    });
    injector = getTestBed();
    service = injector.get(ExchangeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('#getExchangeRates should return an Observable<any>', () => {
    const dummyExchange = {
      rates: {
        USD: 1.5,
        EUR: 1.5
      },
      base: "GBP"
    }

    service.getExchangeRates().subscribe(exchange => {
      expect(exchange).toEqual(dummyExchange);
    });

    const req = httpMock.expectOne(`https://api.exchangeratesapi.io/latest?base=GBP`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyExchange);
  });
});
