import { async, tick, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExchangeService } from '../exchange/exchange.service';
import { BasketComponent } from './basket.component';

describe('BasketComponent', () => {

  let component: BasketComponent;
  let exchangeService: ExchangeService;

  const dummyExchange = {
    rates: {
      USD: 1.5,
      EUR: 1.5
    },
    base: "GBP"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ BasketComponent ],
      providers: [ ExchangeService, HttpClient ]
    })
    component = TestBed.createComponent(BasketComponent).componentInstance;
    exchangeService = TestBed.get(ExchangeService);
    spyOn(exchangeService, 'getExchangeRates').and.returnValue(of(dummyExchange));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the `getExchangeRates` method on the `ExchangeService`', <any>fakeAsync((): void => {
    // Check default value
    expect(component.exchangeRates).toEqual({})
    // Initialise component
    component.ngOnInit();
    expect(exchangeService.getExchangeRates).toHaveBeenCalled();
    tick();
    // Check value now
    expect(component.exchangeRates).toEqual(dummyExchange.rates)
  }));

});
