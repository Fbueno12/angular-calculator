import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.clean();
  }

  clean(){
    this.number1   = '0';
    this.number2   = null;
    this.result    = null;
    this.operation = null;
  }

  addNumber(num: string): void {
    if (this.operation === null) {
  	  this.number1 = this.concatNumber(this.number1, num);
  	} else {
  	  this.number2 = this.concatNumber(this.number2, num);
  	}
  }

  concatNumber(numAtual: string, numConcat: string): string {
  	// caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
  	  numAtual = '';
  	}

    // primeiro dígito é '.', concatena '0' antes do ponto
  	if (numConcat === '.' && numAtual === '') {
  	  return '0.';
  	}

    // caso '.' digitado e já contenha um '.', apenas retorna
  	if (numConcat === '.' && numAtual.indexOf('.') > -1) {
  	  return numAtual;
  	}

  	return numAtual + numConcat;
  }

  definiroperation(operation: string): void {
    // apenas define a operação caso não exista uma
  	if (this.operation === null) {
      this.operation = operation;
      return;
  	}

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
  	if (this.number2 !== null) {
  		this.result = this.calculatorService.calcular(
  			parseFloat(this.number1),
  			parseFloat(this.number2),
  			this.operation);
  		this.operation = operation;
  		this.number1 = this.result.toString();
  		this.number2 = null;
  		this.result = null;
  	}
  }

  /**
   * Efetua o cálculo de uma operação.
   *
   * @return void
   */
  calcular(): void {
  	if (this.number2 === null) {
  		return;
  	}

  	this.result = this.calculatorService.calcular(
  		parseFloat(this.number1),
  		parseFloat(this.number2),
  		this.operation);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display(): string {
  	if (this.result !== null) {
  		return this.result.toString();
  	}
  	if (this.number2 !== null) {
  		return this.number2;
  	}
  	return this.number1;
  }

}
