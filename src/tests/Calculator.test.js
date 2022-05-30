import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  // Test for add
  it('should be able to add two numbers', () => {
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  });

  // Test for subtract
  it('should be able to subtract two numbers', () => {
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator_subtract');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  // Test for multiply
  it('should be able to multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator_multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  });

  // Test for divide
  it('should be able to divide two numbers', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator_multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  });

  // Test for divide #2
  it('should be able to divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    const buttonDivide = container.getByTestId('operator_divide');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should be able to concatenate numbers together', () => {
    const button4 = container.getByTestId('number4');
    const button0 = container.getByTestId('number0');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button0);
    expect(runningTotal.textContent).toEqual('40');
  })

  it('should be able to chain multiple operations together', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator_multiply');
    const buttonSubtract = container.getByTestId('operator_subtract');
    const button1 = container.getByTestId('number1');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator_equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('14');
  })

  it('Should be able to clear the running total without affecting the calculation', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator_multiply');
    const buttonSubtract = container.getByTestId('operator_subtract');
    const button8 = container.getByTestId('number8');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator_equals');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0');
    fireEvent.click(buttonSubtract);
    fireEvent.click(button8);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('7');
  })
})

