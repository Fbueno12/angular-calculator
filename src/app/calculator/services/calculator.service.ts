import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = "+";
  static readonly SUBSTRACT: string = "-";
  static readonly MULTIPLY: string = "*";
  static readonly DIVISION: string = "/";

  constructor() { }

  calcular(num1: number, num2: number, operation: string) : number {
    let result: number;

    switch(operation){
      case CalculatorService.SUM:
        result = num1 + num2;
        break;
      case CalculatorService.SUBSTRACT:
        result = num1 - num2;
        break;
      case CalculatorService.MULTIPLY:
        result = num1 * num2;
        break;
      case CalculatorService.DIVISION:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;

  }
}
