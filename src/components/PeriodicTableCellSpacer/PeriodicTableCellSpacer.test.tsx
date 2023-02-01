import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PeriodicTableCellSpacer from './PeriodicTableCellSpacer';

describe('<PeriodicTableCellSpacer />', () => {
  test('it should mount', () => {
    render(<PeriodicTableCellSpacer />);
    
    const periodicTableCellSpacer = screen.getByTestId('PeriodicTableCellSpacer');

    expect(periodicTableCellSpacer).toBeInTheDocument();
  });
});