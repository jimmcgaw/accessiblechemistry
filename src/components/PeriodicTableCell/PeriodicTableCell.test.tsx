import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PeriodicTableCell from './PeriodicTableCell';

describe('<PeriodicTableCell />', () => {
  test('it should mount', () => {
    render(<PeriodicTableCell elementNumber={5} />);
    
    const periodicTableCell = screen.getByTestId('PeriodicTableCell');

    expect(periodicTableCell).toBeInTheDocument();
  });
});