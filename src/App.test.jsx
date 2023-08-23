/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: App.test.jsx
     @version: I
     Creation: 09/05/2023
     Last modification: 09/05/2023*/

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// addition test
test('adding two numbers correctly', () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('output')).toHaveTextContent('5');
});

// ac button function test
test('AC button clears current number', () => {
  const { getByText, getByTestId } = render(<App />);
  const output = getByTestId('output');
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('AC'));
  expect(output.textContent).toBe('');
});

// buttons match their digit in the output test
test('buttons match their digit in the output', () => {
  const { getByText, getByTestId } = render(<App />);
  const output = getByTestId('output');
  fireEvent.click(getByText('1'));
  expect(output.textContent).toBe('1');
});

// 9 characters input limit test
test('9 characters input limit', () => {
  const { getByTestId, getByText } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('0'));
  expect(getByTestId('output')).toHaveTextContent('123456789');
});

// error output when the 9 characters limit is reached in an operation test
test('error output when the 9 characters limit is reached', () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('='));
  expect(getByTestId('output')).toHaveTextContent('ERROR');
});

// undefined division error output
test('undefined division (0 as the denominator)', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('output')).toHaveTextContent('ERROR');
});

// mod function test
test('mod function', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('%'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('output')).toHaveTextContent('2.4');
});

// 9 characters input limit test
test('9 characters input limit', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+/-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('9'));
    expect(getByTestId('output')).toHaveTextContent('-12345678');
});

// negate function test
test('negate function test', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+/-'));
    fireEvent.click(getByText('+/-'));
    expect(getByTestId('output')).toHaveTextContent('7');
});