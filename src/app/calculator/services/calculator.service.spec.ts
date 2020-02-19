import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must garantee if 1 + 4 is equal to 5',
     inject(
      [CalculatorService],
      ( service: CalculatorService ) => {
        let sum = service.calcular(1, 4, CalculatorService.SUM);
        expect(sum).toEqual(5);
      })
  );

  it('must garantee if 1 - 1 is equal to 0',
      inject(
        [CalculatorService],
        ( service: CalculatorService ) => {
          let substract = service.calcular(1, 1, CalculatorService.SUBSTRACT);
          expect(substract).toEqual(0);
        }
      )
  );

  it('must garantee if 10 / 2 is equal to 5',
      inject(
        [CalculatorService],
        ( service: CalculatorService ) => {
          let division = service.calcular(10, 2, CalculatorService.DIVISION);
          expect(division).toEqual(5);
        }
      )
  );
});
